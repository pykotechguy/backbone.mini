// Controller in Backbone Applications
// 1. loading templates for this namespace automatically
// 2. connect views and models, provide as a universal hub
// 3. elimate this.controller = options.controller boilerplate codes
// 4. run intialize()
//
// One Namespace, One Controller 
// 
// Dependency: underscore.js
var Plugin = Plugin || {};

Plugin.Controller = function (namespace) {
	// namespace is the unique global object of this application(App, App1, App2, etc..)
	// default namespace is App
	if (!namespace) var namespace = App;

	// load templates from /tpl base on View name
	this.loadTemplate(namespace, _.bind(function () { 
		// initialize after all the templates are loaded
		this.initialize.apply(this, arguments);
	}, this));
};

// whatever funcitons you put here is available in Plugin.Controller's construct function (the block above)
// but not available anywhere else
_.extend(Plugin.Controller.prototype, {
	initialize: function () {},

	// loadTemplate has few assumptions:
	// 1. the variable name of backbone view must match file name in /tpl (App.HeaderView --> HeaderView.tpl)
	// 2. the template folder must be named /tpl
	loadTemplate: function (namespace, callback) {
		// find out all the views: 
		// if the name ends with 'View', then we assume it's a view file
		var views = [];
		for (var key in namespace) {
			if (key.slice(-4) === 'View' || key.slice(-9) === 'Component') {
				views.push(key);
			}
		}

		var deferreds = [];
		_.each(views, function(view, key) {
			// Get template from app location
            var template_url = window.location.pathname + 'tpl/' + view + '.html';

            deferreds.push($.ajax({
            	url: template_url,
            	success: function (data) {
            		namespace[view].prototype.template = _.template(data);
            	},
            	error: function () {
            		console.log('!! Error !! ' + view + '.html not found');
            	}
            }));
		});

		$.when.apply(null, deferreds).done(callback);
	}
});


// Helper function to correctly set up the prototype chain, for subclasses.
// Similar to `goog.inherits`, but uses a hash of prototype properties and
// class properties to be extended.
Plugin.Controller.extend = Plugin.extend;