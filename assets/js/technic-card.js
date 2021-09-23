$(document).ready(function () {
  if ($(window).width() >= 768) {
    $('#about .about__item-inner').matchHeight({
      byRow: false
    });
    $('#about-block-2 .about__item-inner').matchHeight({
      byRow: false
    });
    $(' .offer__item - text').matchHeight({
      byRow: false
    });

  }

  $('.model__carousel').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: false,
    infinite: true,
    // autoplay: true,
    autoplaySpeed: 5000,
    cssEase: 'linear',
    variableWidth: false,
    dots: false,
    arrows: true,
    asNavFor: '.nav__carousel',
    fade: true,
    responsive: [{
      breakpoint: 1024,
      settings: {
        arrows: false,
      }
    }, ]
  });
  $('.nav__carousel').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: '.model__carousel',
    dots: false,
    arrows: false,
    // centerMode: true,
    variableWidth: false,
    focusOnSelect: true,
    responsive: [{
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          variableWidth: true,
          centerMode: false,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          variableWidth: false,
          centerMode: false,
        }
      },
    ]
  });

  $(".video__play").on("click", function () {
    $(this).fadeOut().next("video").addClass("active")
  })

  $('.carousel').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    variableWidth: true,
    focusOnSelect: true,
    infinite: true,
    // autoplay: true,
    autoplaySpeed: 5000,
    cssEase: 'linear',
    dots: true,
    arrows: true,
    mobileFirst: true,
    appendArrows: '.carousel__action',
    appendDots: $(".carousel__dots"),
    prevArrow: $(".carousel__prev"),
    nextArrow: $(".carousel__next"),
    responsive: [{
      breakpoint: 1023,
      settings: "unslick"
    }]
  });
})