// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }


// Place any jQuery/helper plugins in here.
    $(".animsition").animsition({
        inClass: 'fade-in',
        outClass: 'fade-out',
        inDuration: 800,
        outDuration: 400,
        linkElement: 'a:not([target="_blank"]):not([href^="#"])',
        loading: true,
        loadingParentElement: 'body', //animsition wrapper element
        loadingClass: 'animsition-loading',
        loadingInner: '<img src="/assets/loader.svg" alt="loading…">',
        timeout: false,
        timeoutCountdown: 5000,
        onLoadEvent: true,
        browser: [ 'animation-duration', '-webkit-animation-duration'],
        // "browser" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
        // The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
        overlay : false,
        overlayClass : 'animsition-overlay-slide',
        overlayParentElement : 'body',
        transition: function(url){ window.location.href = url; }
      });
    $('.smoothScroll').smoothScroll({
        // Options
        easing: 'swing',
        speed: 1000
    });

    if ( $('.work__grid').length ) {
        $('.work__grid').isotope({
            // Options
            layoutMode: 'masonryHorizontal',
            itemSelector: '.work__card',
            masonryHorizontal: {
              rowHeight: 240,
              gutter: 20
            }
        });
    }

    if ( $('.journal__grid').length ) {
        $('.journal__grid').isotope({
            // Options
            layoutMode: 'masonry',
            itemSelector: '.journal__item',
            percentPosition: true,
            masonry: {
              columnWidth: '.journal__item--sizer'
            }
        });
    }
}());