
'use strict';

(function($){

  $(function() {

    $('#btn-toggle').on('click', function() {
      var $this = $(this);
      if ($this.is('.collapse-mode')) {
        $this.removeClass('collapse-mode')
          .children().eq(0).removeClass('fa-caret-right').addClass('fa-caret-down')
          .siblings().text(' collapse artical');
        $('.para').removeClass('collapsed-item');
      } else {
        $this.addClass('collapse-mode')
          .children().eq(0).removeClass('fa-caret-down').addClass('fa-caret-right')
          .siblings().text(' expand artical');
        $('.para').addClass('collapsed-item');
      }
    });

    $('.subhead').on('click', function(event) {
      $(event.target).next().toggleClass('collapsed-item');
    });

  });

})(jQuery);