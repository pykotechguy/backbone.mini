/**
 * App.ViewController is the parent object of all the backbone views.
 */
var App = App || {};

App.ViewController = Plugin.ViewController.extend({
    ui: {
        header: '#HeaderView',
        main: '#MainView',
        modal: '#ModalView',
        alert: '#AlertView'
    },


    initialize: function (options) {
        this.controller = options.controller;

        // get references of all layout elements in this application
        this.$header = $('#HeaderView');
        this.$main = $('#MainView');
        this.$modal = $('#ModalView');
    },

    showHeader: function () {
    	this.$header.html( new App.HeaderView({controller: this.controller}).render().el );
    },

    showMain: function () {
    	this.$main.html( new App.MainView({controller: this.controller}).render().el );
    },

    scrollToBottom: function () {
        $("html, body").animate({ scrollTop: $(document).height() }, 1000);
    }
});
