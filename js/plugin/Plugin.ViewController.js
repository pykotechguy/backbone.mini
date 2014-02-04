/**
 * @description a rendering object configured via Backbone.Events to listen for its views to be called, and invoke their assigned callback function
 * @require Underscore.js
 * @params options (object)
 * use:
 * var render = new Plugin.Render.extend({});
 * render.viewRender.trigger('vote');
 */
Plugin.ViewController = function (options) {
    options || (options = {});
    if (options.views) this.views = options.views;
    if (options.controller) this.controller = options.controller;
    this._bindRoutes();
    this.initialize.apply(this, arguments);
};

// Set up all inheritable **Plugin.Render** properties and methods.
_.extend(Plugin.ViewController.prototype, Backbone.Events, {
    initialize: function () {},
    
    _bindRoutes: function () {
        if (!this.views) return;
        _.each(this.views, _.bind(function (value, key, list) {
            this.on(key, this[value], this);
            _.bindAll(this, value);
        }, this));
    }
});

Plugin.ViewController.extend = Plugin.extend;