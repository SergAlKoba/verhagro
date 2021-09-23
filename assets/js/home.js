$(document).ready(function () {

  //popular__carousel

  if ($('.popular__item').length > 3) {
    $('.popular__carousel').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      draggable: false,
      infinite: true,
      // autoplay: true,
      autoplaySpeed: 5000,
      cssEase: 'linear',
      variableWidth: false,
      dots: true,
      appendArrows: '.popular__action',
      appendDots: $(".popular__dots"),
      prevArrow: $(".popular__prev"),
      nextArrow: $(".popular__next"),
      responsive: [{
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          variableWidth: true,
          focusOnSelect: true,
        }
      }]
    });
    $('.popular__carousel').addClass('active');
    $('.popular__action').addClass('active')
    $('.popular__item').addClass('active')
  } else if ($('.popular__item').length === 3) {
    $('.popular__carousel').slick({
      slidesToShow: 2,
      slidesToScroll: 1,
      draggable: false,
      infinite: true,
      // autoplay: true,
      autoplaySpeed: 5000,
      cssEase: 'linear',
      variableWidth: false,
      dots: true,
      appendArrows: '.popular__action',
      appendDots: $(".popular__dots"),
      prevArrow: $(".popular__prev"),
      nextArrow: $(".popular__next"),
      responsive: [{
        breakpoint: 768,
        settings: {
          variableWidth: true,
          focusOnSelect: true,
        }
      }]
    });
    $('.popular__carousel').addClass('active');
    $('.popular__action').addClass('active')
    $('.popular__item').addClass('active')
  } else {
    return false
  }

  $('.popular__item-text').matchHeight({
    byRow: false
  });

  //spares__carousel

  if ($('.spares__item').length > 3) {
    $('.spares__carousel').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      draggable: false,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 5000,
      cssEase: 'linear',
      variableWidth: false,
      dots: true,
      appendArrows: '.spares__action',
      appendDots: $(".spares__dots"),
      prevArrow: $(".spares__prev"),
      nextArrow: $(".spares__next"),
      responsive: [{
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          variableWidth: true,
          focusOnSelect: true,
        }
      }]
    });
    $('.spares__carousel').addClass('active');
    $('.spares__action').addClass('active')
    $('.spares__item').addClass('active')
  } else if ($('.spares__item').length === 3) {
    $('.spares__carousel').slick({
      slidesToShow: 2,
      slidesToScroll: 1,
      draggable: false,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 5000,
      cssEase: 'linear',
      variableWidth: false,
      dots: true,
      appendArrows: '.spares__action',
      appendDots: $(".spares__dots"),
      prevArrow: $(".spares__prev"),
      nextArrow: $(".spares__next"),
      responsive: [{
        breakpoint: 768,
        settings: {
          variableWidth: true,
          focusOnSelect: true,
        }
      }]
    });
    $('.spares__carousel').addClass('active');
    $('.spares__action').addClass('active')
    $('.spares__item').addClass('active')
  } else {
    return false
  }

  $('.spares__item-text').matchHeight({
    byRow: false
  });

  //promotional

  if ($('.promotional__item').length > 3) {
    $('.promotional__carousel').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      draggable: false,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 5000,
      cssEase: 'linear',
      variableWidth: false,
      dots: true,
      appendArrows: 'promotional__action',
      appendDots: $(".promotional__dots"),
      prevArrow: $(".promotional__prev"),
      nextArrow: $(".promotional__next"),
      responsive: [{
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          variableWidth: true,
          focusOnSelect: true,
        }
      }]
    });
    $('.promotional__carousel').addClass('active');
    $('.promotional__action').addClass('active')
    $('.promotional__item').addClass('active')
  } else if ($('.promotional__item').length === 3) {
    $('.promotional__carousel').slick({
      slidesToShow: 2,
      slidesToScroll: 1,
      draggable: false,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 5000,
      cssEase: 'linear',
      variableWidth: false,
      dots: true,
      appendArrows: '.promotional__action',
      appendDots: $(".promotional__dots"),
      prevArrow: $("promotional__prev"),
      nextArrow: $("promotional__next"),
      responsive: [{
        breakpoint: 768,
        settings: {
          variableWidth: true,
          focusOnSelect: true,
        }
      }]
    });
    $('.promotional__carousel').addClass('active');
    $('.promotional__action').addClass('active')
    $('.promotional__item').addClass('active')
  } else {
    return false
  }

  $('.promotional__item-text').matchHeight({
    byRow: false
  });

})