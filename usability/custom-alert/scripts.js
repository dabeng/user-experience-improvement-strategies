
'use strict';

(function($){

  $(function() {

    $('.btn').on('click', function (event) {
      $('#alert-overlay').addClass('show-alert');
    });

    $('.custom-alert').on('click', '.btn-cancel', function(event) {
      
      $('#alert-overlay').removeClass('show-alert');

    });


  });

})(jQuery);