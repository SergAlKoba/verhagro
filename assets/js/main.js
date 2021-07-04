/**
 * Global variables
 */
"use strict";

var userAgent = navigator.userAgent.toLowerCase(),
  initialDate = new Date(),

  $document = $(document),
  $window = $(window),
  $html = $("html"),
  isTouch = "ontouchstart" in window,
  isIE = userAgent.indexOf("msie") != -1 ? parseInt(userAgent.split("msie")[1]) : userAgent.indexOf("trident") != -1 ? 11 : userAgent.indexOf("edge") != -1 ? 12 : false,

  plugins = {
    rdParallax: $(".rd-parallax"),
    materialParallax: $(".parallax-container"),
  };

var headerHeight = $('header').innerHeight();

$(window).on('scroll', function () {

  var y = $(window).scrollTop(),
    topBar = $('.header__navigation-wrapper');

  if (y >= headerHeight) {
    topBar.addClass('sticky');
  } else {
    topBar.removeClass('sticky');
  }

});


if ($(window).width() <= 1023) {
  $('.main').css('margin-top', headerHeight);
} else {
  $('.main').css('margin-top', '0');
}

$(window).on("resize", function () {
  if ($(window).width() <= 1023) {
    $('.main').css('margin-top', headerHeight);
  } else {
    $('.main').css('margin-top', '0');
  }
})

document.addEventListener("touchstart", function () {}, true);

$(document).ready(function () {

  /**
   * Menu 
   */

  $('.header__burger').on('click', function () {
    $('.header__navigation').toggleClass('active');
    $('.overlay').toggleClass('active');
    $(this).addClass('active');
  });

  $('.header__toggle-link').on('click', function () {
    $('.header__top').toggleClass('active');
    $('.header__overlay').toggleClass('active');
    $('.header__navigation').removeClass('active');
    $('.header__burger').removeClass('active');
    $(this).addClass('active');
  });

  $('.header__close').on('click', function () {
    $('.header__toggle-link').removeClass('active');
    $('.header__top').removeClass('active');
    $('.header__overlay').removeClass('active');
    $('.header__navigation').removeClass('active');
    $('.header__burger').removeClass('active');
  });

  $('.header__dropdown-arrow').on('click', function () {
    $('.header__dropdown').toggleClass('active');
  });
  $('.header__language-arrow').on('click', function () {
    $('.header__language').toggleClass('active');
  });

  $('.close').on('click', function () {
    $(this).parent('li').css('display', 'none');
  });

  jQuery(function ($) {
    $(document).mouseup(function (e) {
      var div = $(".header__dropdown");
      if (!div.is(e.target) &&
        div.has(e.target).length === 0) {
        div.removeClass('active');
      }
    });
  });

  jQuery(function ($) {
    $(document).mouseup(function (e) {
      var div = $(".header__language");
      if (!div.is(e.target) &&
        div.has(e.target).length === 0) {
        div.removeClass('active');
      }
    });
  });

  jQuery(function ($) {
    $(document).mouseup(function (e) {
      var div = $(".header__navigation");
      if (!div.is(e.target) &&
        div.has(e.target).length === 0) {
        div.removeClass('active');
        $('.header__burger').removeClass('active');
        $('.overlay').removeClass('active');
      }
    });
  });

  jQuery(function ($) {
    $(document).mouseup(function (e) {
      var div = $(".header__top");
      if (!div.is(e.target) &&
        div.has(e.target).length === 0) {
        div.removeClass('active');
        $('.header__overlay').removeClass('active');
        $('.header__toggle-link').removeClass('active');
      }
    });
  });

  var mfn = {
    "mobileInit": "1024",
    "parallax": "translate3d",
    "responsive": "1",
    "sidebarSticky": "",
    "lightbox": {
      "disable": false,
      "disableMobile": false,
      "title": false
    },
    "slider": {
      "blog": 0,
      "clients": 0,
      "offer": 0,
      "portfolio": 0,
      "shop": 0,
      "slider": 0,
      "testimonials": 0
    }
  };

  function mainMenu() {
    $('#menu > ul.header__list').mfnMenu({
      addLast: true,
      arrows: true,
      mobileInit: 1024,
      responsive: mfn.responsive
    });
  }
  mainMenu();
  $(function () {
    $('.sub-menu-img li').matchHeight();
  });


  //Попапы
  jQuery(function (a) {
    a(document).mouseup(function (b) {
      var c = a(".modal__inner");
      c.is(b.target) || 0 !== c.has(b.target).length || (c.removeClass("active-modal"),
        a(".modal").removeClass("active-modal"),
        a("body").removeClass("showing-modal"))
    })
  });

  $('.modal__close, .finish').on('click', function () {
    $(".modal").removeClass('active-modal');
    $('body').removeClass('showing-modal');
    $("#playerPopoup").attr('src', '')
  });

  $('.application').on('click', function () {
    $(".modal").removeClass('active-modal');
    $(".modal__application").addClass('active-modal');
    $('body').addClass('showing-modal');
  });

  $('.inform').on('click', function () {
    $(".modal").removeClass('active-modal');
    $(".modal__inform").addClass('active-modal');
    $('body').addClass('showing-modal');
  });

  $('.log-in').on('click', function () {
    $(".modal").removeClass('active-modal');
    $(".modal__log-in").addClass('active-modal');
    $('body').addClass('showing-modal');
  });

  $('.registration').on('click', function () {
    $(".modal").removeClass('active-modal');
    $(".modal__registration").addClass('active-modal');
    $('body').addClass('showing-modal');
  });


  jQuery(".only_number").keypress(function (e) {
    if (e.which != 8 && e.which != 0 && e.which != 46 && (e.which < 48 || e.which > 57)) {
      return false;
    }
  });

  $('.minus').on('click', function () {
    var $input = $(this).parent().find('input');
    var count = parseInt($input.val()) - 1;
    count = count < 0 ? 0 : count;
    $input.val(count);
    $input.change();
    return false;
  });

  $('.plus').on('click', function () {
    var $input = $(this).parent().find('input');
    $input.val(parseInt($input.val()) + 1);
    $input.change();
    return false;
  });


  //Cкролл к блоку
  $(".go-to").on('click', function () {
    var elementClick = $(this).attr("href")
    var destination = $(elementClick).offset().top - $('.header').outerHeight();
    jQuery("html:not(:animated),body:not(:animated)").animate({
      scrollTop: destination
    }, 800);
    return false;
  });


  //isScrolledIntoView
  function isScrolledIntoView(elem) {
    var $window = $(window);
    return elem.offset().top + elem.outerHeight() >= $window.scrollTop() && elem.offset().top <= $window.scrollTop() + $window.height();
  }

  // RD Parallax
  if (plugins.rdParallax.length) {
    var i;
    $.RDParallax();


    $(window).on("scroll", function () {
      for (i = 0; i < plugins.rdParallax.length; i++) {
        var parallax = $(plugins.rdParallax[i]);
        if (isScrolledIntoView(parallax)) {
          parallax.find(".rd-parallax-inner").css("position", "fixed");
        } else {
          parallax.find(".rd-parallax-inner").css("position", "absolute");
        }
      }
    });

    $("a[href='#']").on("click", function (e) {
      setTimeout(function () {
        $(window).trigger("resize");
      }, 300);
    });
  }


  //Material Parallax

  if (plugins.materialParallax.length) {
    if (!isIE) {
      plugins.materialParallax.parallax();
    } else {
      for (var i = 0; i < plugins.materialParallax.length; i++) {
        var parallax = $(plugins.materialParallax[i]),
          imgPath = parallax.data("parallax-img");
      }
    }
  }

});