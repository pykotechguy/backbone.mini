// layout is the parent view of all other views
// layout is initialized by view controller
var App = App || {};

App.LayoutView = Backbone.View.extend({
    initialize: function () {

    },

    render: function () {
        this.$el.html(this.template());
        return this;
    }
});
