var App = App || {};

App.Router = Backbone.Router.extend({
	routes: {
	},

	initialize: function (options) {
		console.log('** Router Initialized **');
		this.controller = options.controller;
	}
});
