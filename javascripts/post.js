(function() {
  function stickyResize(){
    var stickyWidth = $('.sticky-wrapper').css('width');
    $('.sticky').css('width', stickyWidth);
  }

  if ($(window).width() > 600) {
    window.addEventListener('resize', stickyResize);
    
    var sticky = new Waypoint.Sticky({
        element: $('.sticky')[0]
    });
    var stickyWidth = $('.sticky-wrapper').css('width');
    $('.sticky').css('width', stickyWidth);
  }
}());