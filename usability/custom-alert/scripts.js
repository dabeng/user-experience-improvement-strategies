
'use strict';

(function($){

  $(function() {

    $('#basic-alert').on('click', function (event) {
      $('#alert-overlay').addClass('show-alert');

    });

    $('.custom-alert').on('click', '.btn-cancel', function(event) {
      
      $('#alert-overlay').removeClass('show-alert');
    });


  });

})(jQuery);