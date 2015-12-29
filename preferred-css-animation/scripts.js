
'use strict';


window.onload = function () {



  function expandItems() {
    if (collapseItemsId) {
      cancelAnimationFrame(collapseItemsId);
    }
    var stop = true;
    var answers = document.querySelectorAll('.js-answer');
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

  document.getElementById('btn-toggle').addEventListener('click', function() {
    if (this.classList.contains('collapse-mode')) {
      this.classList.remove('collapse-mode');
      this.textContent = '▼ Unfold List';
      expandItemsId = requestAnimationFrame(expandItems);
    } else {
      this.classList.add('collapse-mode');
      this.textContent = '▶ Folded List';
      collapseItemsId = requestAnimationFrame(collapseItems);
    }
  });

  function collapseItem(elem) {
    if (expandItemId) {
      cancelAnimationFrame(expandItemId);
    }
    var stop = true;
    if (elem.clientHeight > 0) {
      stop = false;
    }

    if (!stop) {
      elem.style.height = (elem.clientHeight - 10) + 'px';
      requestAnimationFrame(function() {
        collapseItemId = collapseItem(elem);
      });
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

  var questions = document.querySelectorAll('.js-question');
  for (var i = 0; i < questions.length; i++) {
    questions[i].addEventListener('click', function(event) {
      var question = event.target;
      if (question.classList.contains('collapse-mode')) {
        question.classList.remove('collapse-mode');
        requestAnimationFrame(function() {
          expandItemId = expandItem(question.nextElementSibling);
        });
      } else {
        question.classList.add('collapse-mode');
        requestAnimationFrame(function() {
          collapseItemId = collapseItem(question.nextElementSibling);
        });
      }
    });
  }

};


(function($){

  var collapseItemsId = null;
  var expandItemsId = null;
  var collapseItemId = null;
  var expandItemId = null;

  function collapseItems() {
    if (expandItemsId) {
      cancelAnimationFrame(expandItemsId);
    }
    var stop = true;
    var answers = document.querySelectorAll('.js-answer');
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

  $(function() {
    $(document).on('scroll', monitorScroll);
  });

})(jQuery);