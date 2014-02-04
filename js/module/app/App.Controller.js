var App = App || {};

App.Controller = Plugin.Controller.extend({
	initialize: function () {
		console.log('$ App Controller Initialized');

        // cms = content management system
        this.CmsModel = new App.CmsModel();

        this.CmsModel.on('change:loaded', _.bind(this.bootstrap, this));


        // view controller
        this.viewController = new App.ViewController({ controller: this });

        // router has dependencies on view controller, therefore must come after it
        this.router = new App.Router({ controller: this });
        Backbone.history.start();
	},

    bootstrap: function () {
        console.log('* CMS Data Loaded *');

        this.viewController.showHeader();
        this.viewController.showMain();
    }
});