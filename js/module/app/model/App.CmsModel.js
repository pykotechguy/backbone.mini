/**
 *
 */
var App = App || {};

App.CmsModel = Backbone.Model.extend({
	apiUrl: "data/cms.json?sid=100",

	defaults: {
		sid: 0,

		data: {},

		loaded: false
	},

	initialize: function () {
		console.log('* CMS Model initialized *');

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
		console.log('* CMS request success *', data);
		this.set(data, {silent: true});

		this.set('loaded', true)
	},

	requestError: function () {
		
	}
});