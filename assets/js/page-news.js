$(document).ready(function () {

  $('.carousel').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    variableWidth: true,
    focusOnSelect: true,
    infinite: true,
    // autoplay: true,
    autoplaySpeed: 5000,
    cssEase: 'linear',
    dots: false,
    arrows: false,
    mobileFirst: true,
    responsive: [{
      breakpoint: 768,
      settings: "unslick"
    }]
  });
})