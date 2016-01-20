
'use strict';

(function($){

  function customAlert(type, message) {
    var dtd = $.Deferred();
    if (type === 0) {

    } else if (type === 1) {
      if (!$('#alert-overlay').length) {
        $('body').append(
          '<div id="alert-overlay">' +
            '<div class="custom-alert">' +
              '<span class="alert-icon">?</span>' +
              '<p class="alert-message"></p>' +
              '<div class="alert-buttons">' +
                '<button type="button" class="btn btn-success btn-ok">OK</button>' +
                '<button type="button" class="btn btn-default btn-cancel">Cancel</button>' +
              '</div>' +
            '</div>' +
          '</div>')
          .find('#alert-overlay').find('.alert-message').text(message)
          .siblings('.alert-buttons').children().data('dtd', dtd)
          .filter('.btn-ok').on('click', function() {
            $('#alert-overlay').removeClass('show-alert');
            $(this).data('dtd').resolve(true);
          })
          .siblings('.btn-cancel').on('click', function() {
            $('#alert-overlay').removeClass('show-alert');
            $(this).data('dtd').resolve(false);
          });
          // With the help of the following line, we enfore browser to repaint in order to
          // fire up the first time transition of alert icon.
          var overlay = $('#alert-overlay')[0];
          overlay.style.offsetWidth = overlay.offsetWidth;
          overlay.classList.add('show-alert');
      } else {
        $('#alert-overlay').addClass('show-alert')
          .find('.alert-buttons').children().data('dtd', dtd);
      }
    }

    return dtd;
  }

  $(function() {

    $('#btn-confirm').on('click', function () {
      var confirmBox = customAlert(1, 'It\'s time to change. Do you agree with me?');
      $.when(confirmBox).then(function(res) {
        if (res) {
          $('#response').text('Yes, let\'s go for it.');
        } else {
          $('#response').text('No, this is not the time.');
        }
      });
    });

  });

})(jQuery);