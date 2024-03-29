/**
 * App.ViewController is the parent object of all the backbone views.
 *
 * ViewController loads the Layout and append them to <body>
 */
var App = App || {};

App.ViewController = Backbone.Mini.ViewController.extend({
    ui: {
        header: '#HeaderView',
        main: '#MainView',
        modal: '#ModalView',
        alert: '#AlertView'
    },

    initialize: function (options) {
        // prepend layout to <body>
        $('body').prepend( new App.LayoutView().render().$el );


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
