/**
 * conceptually, app.js is the script which is executed at last.
 */
var App = App || {};
App.moduleName = 'app';


// add fast click for mobile browsers
// where is the most logical place to put these codes ?
window.addEventListener('load', function() {
    FastClick.attach(document.body);
}, false);

// Start Application
// @todo: bootstrap
(function () {

    var controller = new App.Controller(App);

})();