
'use strict';

(function($){

  function monitorScroll() {
    var navbar = $('.navbar');
    // var isDown = $(document).scrollTop() + $(window).height() - $('body')[0].scrollHeight + $('.page-footer').height() > 0 ? true : false;
    // var isAbove = pageNote.is('.above-page-footer');
    if ($(document).scrollTop() > ($('.page-header').outerHeight(true) - parseInt($('.page-header').css('margin-bottom')))) {
      // $('#wrapper').css({ 'position': 'relative' });
      navbar.addClass('fixed-mode');
    } else {
      // $('#wrapper').css({ 'position': '' });
      navbar.removeClass('fixed-mode');
    }
  }

  $(function() {
    $(document).on('scroll', monitorScroll);
  });

})(jQuery);