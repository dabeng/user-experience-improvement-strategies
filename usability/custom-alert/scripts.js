
'use strict';

(function($){

  function customAlert(type, message) {
    var dtd = $.Deferred();
    var appendCustomAlert = function() {
      $('body').append(
        '<div id="alert-overlay">' +
          '<div class="custom-alert">' +
            '<span class="alert-icon"></span>' +
            '<p class="alert-message"></p>' +
            '<div class="alert-buttons"></div>' +
          '</div>' +
        '</div>');
    }
    var appendAlertButtons = function(type) {
      var alertButtons = $('#alert-overlay').find('.alert-buttons');
      alertButtons.children().remove();
      if (type === 0) {
        alertButtons.append('<button type="button" class="btn btn-primary btn-ok">OK</button>');
      } else {
        alertButtons.append('<button type="button" class="btn btn-primary btn-ok">OK</button>' +
          '<button type="button" class="btn btn-default btn-cancel">Cancel</button>');
      }
    };
    var bindButtonHandler = function(type, isConfirm) {
      var btns = $('#alert-overlay').find('.alert-buttons').children();
      if (type === 0) {
        btns.on('click', function() {
          $('#alert-overlay').removeClass('show-alert');
          $(this).data('dtd').resolve();
        });
      } else if (type === 1) {
        btns.filter('.btn-ok').on('click', function() {
          $('#alert-overlay').removeClass('show-alert');
          $(this).data('dtd').resolve(true);
        })
        .siblings('.btn-cancel').on('click', function() {
          $('#alert-overlay').removeClass('show-alert');
          $(this).data('dtd').resolve(false);
        });
      } else {

      }
    };
    // With the help of the following function, we enfore browser to repaint in order to
    // fire up the first time transition of alert icon.
    var startIconTransition = function() {
      var overlay = $('#alert-overlay')[0];
      overlay.style.offsetWidth = overlay.offsetWidth;
      overlay.classList.add('show-alert');
    };
    if (type === 0) { // alert box
      if (!$('.custom-alert').length) {
        appendCustomAlert();
        appendAlertButtons(0);
        bindButtonHandler(0);
        startIconTransition();
      } else if (!$('.alert-box').length) {
        appendAlertButtons(0);
        bindButtonHandler(0);
      }
      $('#alert-overlay').find('.custom-alert').attr('class', 'custom-alert alert-box')
        .find('.alert-icon').text('!');
    } else if (type === 1) { // confirm box
      if (!$('.custom-alert').length) {
        appendCustomAlert();
        appendAlertButtons(1);
        bindButtonHandler(1);
        startIconTransition();
      } else if (!$('.confirm-box').length) {
        appendAlertButtons(1);
        bindButtonHandler(1);
      }
      $('#alert-overlay').find('.custom-alert').attr('class', 'custom-alert confirm-box')
        .find('.alert-icon').text('?');
    } else { // prompt box

    }

    $('#alert-overlay').find('.alert-buttons').children().data('dtd', dtd)
      .end().siblings('.alert-message').text(message)
      .closest('#alert-overlay').addClass('show-alert');

    return dtd;
  }

  $(function() {

    $('#btn-alert').on('click', function () {
      /*
        alert('An exception occurred.');
        $('#response').text('The application has just got an exception.');
      */
      var alertBox = customAlert(0, 'An exception occurred.');
      $.when(alertBox).then(function() {
        $('#response').text('The application has just got an exception.');
      });
    });

    $('#btn-alert2').on('click', function () {
      var alertBox = customAlert(0, 'Another exception occurred.');
      $.when(alertBox).then(function() {
        $('#response').text('The application has just got another exception.');
      });
    });

    $('#btn-confirm').on('click', function () {
      /*
        var res = confirm('It\'s time to change. Do you agree with me?');
        if (res) {
          $('#response').text('Yes, let\'s go for it.');
        } else {
          $('#response').text('No, this is not the time.');
        }
      */
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