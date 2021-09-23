$(document).ready(function () {

    $('.popular__carousel').slick({
        slidesToShow: 4,
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
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    variableWidth: false,
                    focusOnSelect: true,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    variableWidth: true,
                    focusOnSelect: true,
                }
            }
        ]
    });
    $('.popular__carousel').addClass('active');
    $('.popular__action').addClass('active')
    $('.popular__item').addClass('active')

    $('.popular__item-text').matchHeight({
        byRow: false
    });

    $('.news__item-inner').matchHeight({
        byRow: false
    });
})