
'use strict';

(function($){



  $(function() {

$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
  // e.target // newly activated tab
  // e.relatedTarget.style['border-bottom-color']='#fff'; // 
  var preTab = e.relatedTarget;// previous active tab
    // -> removing the class
  preTab.classList.remove('change-border-color');
  
  // -> triggering reflow /* The actual magic */
  // without this it wouldn't work. Try uncommenting the line and the transition won't be retriggered.
  preTab.style.offsetWidth = preTab.offsetWidth;
  
  // -> and re-adding the class
  preTab.classList.add('change-border-color');
})

  });

})(jQuery);