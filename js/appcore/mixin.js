/**
 * Mixin allows you to extend Underscore with your own utility functions.
 */
_.mixin({
    /**
     * Asynchronously load templates located in separate .tpl files
     */
    loadTemplate: function (args) {
        var deferreds = [];
        $.each(args.views, function (index, view) {

            if (args.namespace[view]) {
                // Get template from app location
                var template_url = window.location.pathname + 'tpl/' + view + '.html';
                deferreds.push($.get(template_url, function (data) {
                    args.namespace[view].prototype.template = _.template(data);
                }));
            } else {
                throw new Error("View not found");
            }
        });
        $.when.apply(null, deferreds).done(args.callback);
    },

    /**
     * Get query string param by name
     * window.location.search()
     *
     * @param name - String of param name
     *
     * @return string - empty string if not found.
     * _("unit").getQueryParamByName()
     */
    getQueryParamByName: function (name) {
        var regexS = "[\\?&]" + name + "=([^&#]*)";
        var regex = new RegExp(regexS);
        var results = regex.exec(window.location.search);
        if (results == null)
            return "";
        else
            return decodeURIComponent(results[1].replace(/\+/g, " "));
    }
});