/**
 * conceptually, app.js is the script which is executed at last.
 * @todo: 
 */
var App = App || {};

// add fast click for mobile browsers
// where is the most logical place to put these codes ?
window.addEventListener('load', function() {
    FastClick.attach(document.body);
}, false);

// Start Application
(function () {
	// 
    var controller = new App.Controller(App);

})();