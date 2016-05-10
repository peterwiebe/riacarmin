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
}());

// Place any jQuery/helper plugins in here.
$(window).ready(function() {
    $('.smoothScroll').smoothScroll({
        // Options
        easing: 'swing',
        speed: 1000
    });

    $('.scroll-pane').jScrollPane(
        {
            showArrows: true,
        }
    );

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