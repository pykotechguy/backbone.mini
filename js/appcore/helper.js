// Avoid `console` errors in browsers that lack a console.
// boolean to turn off console log in production
(function () {
    // console logging on local and dev
    var prod = (window.location.host.substr(0, 5) === 'local' || window.location.host.indexOf('dev') !== -1) ? false : true;
    var methods = ['assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error', 'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log', 'markTimeline', 'profile', 'profileEnd', 'markTimeline', 'table', 'time', 'timeEnd', 'timeStamp', 'trace', 'warn'];
    var length = methods.length;
    window.console = (!(window.console && window.console.log)) ? {} : window.console;
    var noop = (!prod && window.console.log) ? window.console.log : function () {
    };
    while (length--) {
        if (prod || !window.console[methods[length]]) {
            window.console[methods[length]] = noop;
        }
    }
})();


// handy debug short cut function
function cc(args) {
    _.each(arguments, function (arg) {
        console.log('------>', arg);
    });
}