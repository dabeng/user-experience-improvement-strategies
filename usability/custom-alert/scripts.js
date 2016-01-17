
'use strict';

(function($){

  $(function() {

    $('.btn').on('click', function (event) {
      $('#alert-overlay').addClass('show-alert')
        .find('.custom-alert').offset($(event.target).offset());

    });

    $('.custom-alert').on('click', '.btn-cancel', function(event) {
      
      $('#alert-overlay').removeClass('show-alert');
      $(document).scrollTop();
    });


  });

})(jQuery);