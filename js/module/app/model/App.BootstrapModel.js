/**
 *
 */
var App = App || {};

App.BootstrapModel = Backbone.Model.extend({
	apiUrl: "data/bootstrap.json",

	defaults: {
		sid: 0,

		data: {},

		loaded: false
	},

	initialize: function () {
		console.log('* Bootstrap Model initialized *');

		this.requestData();
	},

	requestData: function () {
		var url = this.apiUrl;
		
		var xhrParams = {
              url: url
            , type: "GET"
            , dataType: 'json'
            , crossDomain: true
            , success: _.bind(this.requestSuccess, this)
            , error: _.bind(this.requestError, this)
        };

        this.xhr = $.ajax(xhrParams);
	},

	requestSuccess: function (data) {
		console.log('* Bootstrap request success *', data);
		this.set(data, {silent: true});

		this.set('loaded', true)
	},

	requestError: function () {
		
	}
});