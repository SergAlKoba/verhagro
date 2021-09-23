$(document).ready(function () {

    $('.tab-link').click(function () {
        var id = $(this).attr('data-tab'),
            content = $('.tab-content[data-tab="' + id + '"]');

        $('.tab-link.active').removeClass('active'); // 1
        $(this).addClass('active'); // 2

        $('.tab-content.active').removeClass('active'); // 3
        content.addClass('active'); // 4
    });

    //popular__carousel
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

    //promotional__carousel
    $('.promotional__carousel').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        draggable: false,
        infinite: true,
        // autoplay: true,
        autoplaySpeed: 5000,
        cssEase: 'linear',
        variableWidth: false,
        dots: true,
        appendArrows: '.promotional__action',
        appendDots: $(".promotional__dots"),
        prevArrow: $(".promotional__prev"),
        nextArrow: $(".promotional__next"),
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
    $('.promotional__carousel').addClass('active');
    $('.promotional__action').addClass('active');
    $('.promotional__item').addClass('active');

    $('.promotional__item-text').matchHeight({
        byRow: false
    });

    //model__carousel
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
        arrows: false,
        asNavFor: '.nav__carousel',
        fade: true,
    });
    $('.nav__carousel').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.model__carousel',
        dots: false,
        arrows: true,
        // centerMode: true,
        variableWidth: false,
        focusOnSelect: true,
        vertical: true,
        responsive: [{
                breakpoint: 768,
                settings: {
                    variableWidth: true,
                    vertical: false,
                    arrows: false,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    variableWidth: false,
                    vertical: false,
                    arrows: false,
                }
            },
        ]
    });

})