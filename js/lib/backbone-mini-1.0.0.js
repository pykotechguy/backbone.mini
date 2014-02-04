// Backbone.Mini
// -------------
// v0.0.1

// Copyright (c)2014 Ti-Wen Lin, Rubicon Project Inc.
// Backbone.Mini may be freely distributed under the MIT license.
//
// http://tiwen.learnexcellent.com


var Mini = (function (global, Backbone, _) {
    "use strict";

    // define and export Mini namespace
    var Mini = {};
    Backbone.Mini = Mini;

    // Version Number
    Mini.VERSION = "0.0.1";

    // get DOM manipulator $ for later use
    Mini.$ = Backbone.$;

    // borrow super useful .extend from backbone
    var extend = Backbone.Model.extend;


    // Mini Controller
    Mini.Controller = function (namespace) {
        // namespace is the unique global object of this application(App, App1, App2, etc..)
        // default namespace is App
        if (!namespace) {
            namespace = App || {};
        }

        // load templates from /js/tpl/ base on View name
        this.loadTemplate(namespace, _.bind(function () {
            // initialize after all the templates are loaded
            this.initialize.apply(this, arguments);
        }, this));
    };

    Mini.Controller.prototype.initialize = function () {
        // put init logic for controller here, if necessary
    };

    Mini.Controller.prototype.loadTemplate = function (namespace, callback) {
        // find out all the views:
        // if the name ends with 'View', then we assume it's a view file
        var views = [];
        for (var key in namespace) {
            if (key.slice(-4) === 'View' || key.slice(-9) === 'Component') {
                views.push(key);
            }
        }

        console.log('>>>>', namespace);

        var deferreds = [];
        _.each(views, function(view) {
            // Get template from app location
            var template_url = window.location.pathname + 'js/module/' + namespace.moduleName +'/tpl/' + view + '.tpl';

            deferreds.push($.ajax({
                url: template_url,
                success: function (data) {
                    // bind underscore template to each view.js
                    namespace[view].prototype.template = _.template(data);
                },
                error: function () {
                    console.log('!! Error !! ' + view + '.tpl not found');
                }
            }));
        });

        $.when.apply(null, deferreds).done(callback);
    };

    Mini.Controller.extend = extend;


})(this, Backbone, _);
