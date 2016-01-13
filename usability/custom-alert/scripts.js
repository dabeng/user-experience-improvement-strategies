
'use strict';

(function($){

  $(function() {

    $('#basic-alert').on('click', function (event) {
      $('#alert-overlay').addClass('show-alert')
        .find('.custom-alert').addClass('show-message');

    });


  });

})(jQuery);