 $(document).ready(function () {
   jcf.replaceAll();

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

   $('.popular__item-text').matchHeight({
     byRow: false
   });

   $('.store__item-text').matchHeight({
     byRow: false
   });

   $('.store__button').on('click', function () {
     $('.page').addClass('hidden');
     $('.store__filter').addClass('active');
     $('.store__filter-overlay').addClass('active');
     $('.store').css('z-index', '100');
     $('.store__wrapper-button').css('opacity', '0.5');
   })


   if ($(window).width() <= 1024) {
     $('.store__filter-title').on('click', function () {
       $(this).next().toggleClass('active');
     })
     var acc = document.getElementsByClassName("store__filter-title");
     var i;

     for (i = 0; i < acc.length; i++) {
       acc[i].addEventListener("click", function () {
         this.classList.toggle("active");
         var panel = this.nextElementSibling;
         if (panel.style.maxHeight) {
           panel.style.maxHeight = null;
         } else {
           panel.style.maxHeight = panel.scrollHeight + "px";
         }
       });
     }
   }

   $('.store__filter-button , .store__filter-subtitle').on('click', function () {
     $('.page').removeClass('hidden');
     $('.store__filter').removeClass('active');
     $('.store__filter-overlay').removeClass('active');
     $('.store').css('z-index', '10');
     $('.store__wrapper-button').css('opacity', '1');

   })

 })