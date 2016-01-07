
'use strict';

(function($){



  $(function() {

$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
  // e.target // newly activated tab
  e.relatedTarget.style['border-bottom-color']='#fff'; // previous active tab
})

  });

})(jQuery);