
'use strict';

(function($){

  function monitorScroll() {
    var pageNote = $('.page-note');
    var isDown = $(document).scrollTop() + $(window).height() - $('body')[0].scrollHeight + $('.page-footer').height() > 0 ? true : false;
    var isAbove = pageNote.is('.above-page-footer');
    if (isDown && !isAbove) {
      $('#wrapper').css({ 'position': 'relative' });
      pageNote.addClass('above-page-footer');
    } else if (!isDown && isAbove) {
      $('#wrapper').css({ 'position': '' });
      pageNote.removeClass('above-page-footer');
    }
  }

  $(function() {
    $(document).on('scroll', monitorScroll);
  });

})(jQuery);