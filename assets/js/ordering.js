 $(document).ready(function () {
   jcf.replaceAll();

   $('.form__radio').click(function () {
     $('.form__radio').next('.form__fieldset').removeClass('active')
     $(this).next('.form__fieldset').addClass('active')
   })
 })