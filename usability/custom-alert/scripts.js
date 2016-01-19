
'use strict';

(function($){

  function customAlert(type, message) {
    var dtd = $.Deferred();
    if (type === 0) {

    } else if (type === 1) {
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
        .end().find('.btn-ok').on('click',function() {
          $('#alert-overlay').removeClass('show-alert');
          dtd.resolve(true);
        })
        .siblings('.btn-cancel').on('click',function() {
          $('#alert-overlay').removeClass('show-alert');
          dtd.resolve(false);
        })
        .closest('#alert-overlay').addClass('show-alert');
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