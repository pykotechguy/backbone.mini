/**
 */
var App = App || {};

App.HeaderView = Backbone.View.extend({
    initialize: function() {

    },

    events: {

    },

    render: function() {
        this.$el.html(this.template());
        return this;
    }
});

