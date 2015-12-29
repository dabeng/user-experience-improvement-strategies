
'use strict';

(function($){

  var collapseItemsId = null;
  var expandItemsId = null;
  var collapseItemId = null;
  var expandItemId = null;

  function collapseItem(elem) {
    if (expandItemId) {
      cancelAnimationFrame(expandItemId);
    }
    var stop = true;
    if (elem.clientHeight > 0) {
      stop = false;
    }

    if (!stop) {
      elem.style.height = ((elem.clientHeight - 10) > 0 ? (elem.clientHeight - 10) : 0 ) + 'px';
      requestAnimationFrame(function() {
        collapseItemId = collapseItem(elem);
      });
    }
  }

  function collapseItems() {
    if (expandItemsId) {
      cancelAnimationFrame(expandItemsId);
    }
    var stop = true;
    var answers = document.querySelectorAll('.para');
    for (var i = 0; i < answers.length; i++) {
      if (answers[i].clientHeight > 0) {
        stop = false;
      }
    }
    if (!stop) {
      for (i = 0; i < answers.length; i++) {
        answers[i].previousElementSibling.classList.add('collapse-mode');
        if ((answers[i].clientHeight - 10) < 10) {
          answers[i].style.height = '0px';
        } else {
          answers[i].style.height = (answers[i].clientHeight - 10) + 'px';
        }
      }
      collapseItemsId = requestAnimationFrame(collapseItems);
    }
  }

  function expandItem(elem) {
    if (collapseItemId) {
      cancelAnimationFrame(collapseItemId);
    }
    var stop = true;
    if (elem.scrollHeight > elem.clientHeight) {
      stop = false;
    }

    if (!stop) {
      if (elem.scrollHeight > elem.clientHeight) {
        elem.style.height = (elem.clientHeight + 10) + 'px';
      }
      requestAnimationFrame(function() {
        expandItemId = expandItem(elem);
      });
    }
  }

  function expandItems() {
    if (collapseItemsId) {
      cancelAnimationFrame(collapseItemsId);
    }
    var stop = true;
    var answers = document.querySelectorAll('.para');
    for (var i = 0; i < answers.length; i++) {
      if (answers[i].scrollHeight > answers[i].clientHeight) {
        stop = false;
      }
    }
    if (!stop) {
      for (i = 0; i < answers.length; i++) {
        if (answers[i].scrollHeight > answers[i].clientHeight) {
          answers[i].previousElementSibling.classList.remove('collapse-mode');
          answers[i].style.height = (answers[i].clientHeight + 10) + 'px';
        }
      }
      expandItemsId = requestAnimationFrame(expandItems);
    }
  }

  $(function() {

    $('#btn-toggle').on('click', function() {
      if (this.classList.contains('collapse-mode')) {
        this.classList.remove('collapse-mode');
        this.childNodes[0].classList.remove('fa-caret-right');
        this.childNodes[0].classList.add('fa-caret-down');
        this.childNodes[1].textContent = ' collapse artical';
        expandItemsId = requestAnimationFrame(expandItems);
      } else {
        this.classList.add('collapse-mode');
        this.childNodes[0].classList.remove('fa-caret-down');
        this.childNodes[0].classList.add('fa-caret-right');
        this.childNodes[1].textContent = ' expand article';
        collapseItemsId = requestAnimationFrame(collapseItems);
      }
    });

    $('.subhead').on('click', function(event) {
      var subhead = event.target;
      if (subhead.classList.contains('collapse-mode')) {
        subhead.classList.remove('collapse-mode');
        requestAnimationFrame(function() {
          expandItemId = expandItem(subhead.nextElementSibling);
        });
      } else {
        subhead.classList.add('collapse-mode');
        requestAnimationFrame(function() {
          collapseItemId = collapseItem(subhead.nextElementSibling);
        });
      }
    });

  });

})(jQuery);