$(document).ready(function () {

  $('.news__item-inner').matchHeight({
    byRow: false
  });


  $('.news__item-text').each(function (index, element) {
    if ($(window).width() < 768) {
      $clamp(element, {
        clamp: 5,
      });
    } else {
      $clamp(element, {
        clamp: 4,
      });
    }
  });
})