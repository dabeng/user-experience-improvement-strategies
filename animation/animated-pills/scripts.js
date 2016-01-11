
'use strict';

(function($){

  function highlightPill(pill) {
    $('.nav-pills').find('.highlight').css({
      'width': pill.width(),
      'left': pill.position().left + window.parseFloat($('.nav-pills').find('li').css('margin-left'))
    });
  }

  $(function() {

    highlightPill($('.nav-pills').find('.active'));

    $('.nav-pills').children().on('mouseenter', function (event) {
      highlightPill($(event.target.parentNode));
    });

    $('.nav-pills').on('mouseleave', function (event) {
      highlightPill($('.nav-pills').find('.active'));
    });

  });

})(jQuery);