var App = App || {};

App.Controller = Backbone.Mini.Controller.extend({
	initialize: function () {
		console.log('$ App Controller Initialized $');

        // cms = content management system
        this.BootstrapModel = new App.BootstrapModel();
        this.BootstrapModel.on('change:loaded', _.bind(this.bootstrap, this));

        // view controller
        this.viewController = new App.ViewController({ controller: this });

        // router has dependencies on view controller, therefore must come after it
        this.router = new App.Router({ controller: this });
        Backbone.history.start();
	},

    // any logic that's dependent on bootstrap model data should be placed here
    bootstrap: function () {
        console.log('* Bootstrap Data Loaded *');

        this.viewController.showHeader();
        this.viewController.showMain();
    }
});