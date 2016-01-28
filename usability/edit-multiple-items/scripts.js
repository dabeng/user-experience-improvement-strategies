
'use strict';

(function($){

  function toggleTag() {
    $(this).toggleClass('selected');
  }

  function addTag(event) {
    event.stopPropagation();

    var $this = $(this);
    if (event.which === 13) {
      var value = this.value.trim();
      if (value.length) {
        $this.before('<span class="tag added">' + value + '</span>').val('');
      } else {
        $this.val('');
      }
    }
  }

  function deleteTag(event) {
    event.stopPropagation();

    var $this = $(this);
    var selectedTags = $this.find('.selected');
    if (event.which === 46 && selectedTags.length) {
      selectedTags.removeClass('selected').addClass('deleted');
    }
  }

  function saveEditTag(event) {
    var valueList = [];
    $(event.target).closest('.tag-pool-wrapper').find('.tag-pool').children('.tag')
      .removeClass('selected').not('.deleted').each(function(index, item) {
        valueList.push($(item).text());
      });
    $('#results').find('span').text(valueList.join());
  }

  function cancelEditTag(event) {
    $(event.target).closest('.tag-pool-wrapper').find('.tag-pool').children()
      .removeClass('selected')
      .filter('.added').remove()
      .end().filter('.deleted').removeClass('deleted');
  }

  $(function() {

    $('.tag-pool').on('click', '.tag', toggleTag);

    $('.tag-pool').on('keyup', '.tag-input', addTag);

    $('.tag-pool').on('keyup', deleteTag);

    $('.tag-buttons').on('click','.btn-save', saveEditTag);

    $('.tag-buttons').on('click','.btn-cancel', cancelEditTag);

  });

})(jQuery);