jQuery(function() {
  $('#receitas > h2').each(function() {
    $(this).bind('click', function() {
      total_height = 0;
      $(this).prevAll(':visible').each(function() {
        total_height = total_height + $(this).outerHeight(true);
      })
      $(this).next('div').slideToggle(400, function() {
        if ($(this).is(':visible')) {
          $('body,html').animate({scrollTop: total_height}, 400);
        }
      });
    });
  });
});
