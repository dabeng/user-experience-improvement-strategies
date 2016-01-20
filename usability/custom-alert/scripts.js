
'use strict';

(function($){

  function customAlert(type, message) {
    var dtd = $.Deferred();
    if (type === 0) { // alert box
      if (!$('.custom-alert').length) {
        $('body').append(
          '<div id="alert-overlay">' +
            '<div class="custom-alert alert-box">' +
              '<span class="alert-icon">?</span>' +
              '<p class="alert-message"></p>' +
              '<div class="alert-buttons">' +
                '<button type="button" class="btn btn-primary btn-ok">OK</button>' +
              '</div>' +
            '</div>' +
          '</div>')
          .find('#alert-overlay').find('.alert-message').text(message)
          .siblings('.alert-buttons').children().data('dtd', dtd)
          .on('click', function() {
            $('#alert-overlay').removeClass('show-alert');
            $(this).data('dtd').resolve();
          });
          // With the help of the following line, we enfore browser to repaint in order to
          // fire up the first time transition of alert icon.
          var overlay = $('#alert-overlay')[0];
          overlay.style.offsetWidth = overlay.offsetWidth;
          overlay.classList.add('show-alert');
      } else if (!$('.alert-box').length) {
        $('#alert-overlay').find('.alert-buttons').children().remove()
          .end().append('<button type="button" class="btn btn-primary btn-ok">OK</button>')
          .children().data('dtd', dtd)
          .on('click', function() {
            $('#alert-overlay').removeClass('show-alert');
            $(this).data('dtd').resolve();
          })
          .parent().siblings('.alert-icon').text('!')
          .siblings('.alert-message').text(message)
          .parent().attr('class', 'custom-alert alert-box')
          .parent().addClass('show-alert');
      } else {
        $('#alert-overlay').find('.alert-buttons').children().data('dtd', dtd)
          .closest('#alert-overlay').addClass('show-alert');
      }
    } else if (type === 1) { // confirm box
      if (!$('.custom-alert').length) {
        $('body').append(
          '<div id="alert-overlay">' +
            '<div class="custom-alert confirm-box">' +
              '<span class="alert-icon">?</span>' +
              '<p class="alert-message"></p>' +
              '<div class="alert-buttons">' +
                '<button type="button" class="btn btn-primary btn-ok">OK</button>' +
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
      } else if (!$('.confirm-box').length) {
        var box = $('#alert-overlay').find('.custom-alert');
        if (box.is('.alert-box')) {
          box.find('.alert-buttons').children().remove()
            .end().append('<button type="button" class="btn btn-primary btn-ok">OK</button>' +
            '<button type="button" class="btn btn-default btn-cancel">Cancel</button>')
            .children().filter('.btn-ok').on('click', function() {
              $('#alert-overlay').removeClass('show-alert');
              $(this).data('dtd').resolve(true);
            })
            .siblings('.btn-cancel').on('click', function() {
              $('#alert-overlay').removeClass('show-alert');
              $(this).data('dtd').resolve(false);
            });
        }
        box.find('.alert-buttons').children().data('dtd', dtd)
          .parent().siblings('.alert-icon').text('?')
          .siblings('.alert-message').text(message)
          .parent().attr('class', 'custom-alert confirm-box')
          .parent().addClass('show-alert');
      } else {
        $('#alert-overlay').find('.alert-buttons').children().data('dtd', dtd)
          .closest('#alert-overlay').addClass('show-alert');
      }
    } else { // prompt box

    }

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