$(function () {
    /*!
     * jQuery - .scrollTo()
     *
     *  Author:
     *  Timothy A. Perez
     *
     * Date: OCT 2012
     * Comments: Setting new web standards...
     */
    // .scrollTo - Plugin
    $.fn.scrollTo = function (target, options, callback) {
        if (typeof options == 'function' && arguments.length == 2) { callback = options; options = target; }
        var settings = $.extend({
            scrollTarget: target,
            offsetTop: 50,
            duration: 800,
            easing: 'easeOutQuad'
        }, options);
        return this.each(function () {
            var scrollPane = $(this);
            var scrollTarget = (typeof settings.scrollTarget == "number") ? settings.scrollTarget : $(settings.scrollTarget);
            var scrollY = (typeof scrollTarget == "number") ? scrollTarget : scrollTarget.offset().top  - settings.offsetTop;
            scrollPane.stop(true).animate({ scrollTop: scrollY }, settings.duration, settings.easing, function () {
                if (typeof callback == 'function') { callback.call(this); }
            });
        });
    }

    
});

// left: 37, up: 38, right: 39, down: 40,
// spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36

function preventDefault(e) {
    e = e || window.event;
    if (e.preventDefault)
        e.preventDefault();
    e.returnValue = false;
}


function disableScroll() {
    window.onwheel = preventDefault; // modern standard
    //window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
}

function enableScroll() {
    //window.onmousewheel = document.onmousewheel = null;
    window.onwheel = null;
}