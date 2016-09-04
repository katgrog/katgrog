$(document).on('ready', function(){

  // Look text

  $('.js-look-link').on("click", function(){

    $('.image-face--look').addClass('is-active');
    $('.look-link').addClass('is-active');

  });

  // Party mode

  $('.js-party-mode').on("click", function(){

    $('.absolute-shapes').addClass('is-party-mode');
    $('.party-mode-link').addClass('is-active');
    $('.party-mode-off-link').addClass('is-active');
    $('.square-1--absolute').addClass('is-active');
    $('.square-2--absolute').addClass('is-active');
    $('.square-3--absolute').addClass('is-active');

  });


  $('.js-party-mode-off').on("click", function(){

    $('.absolute-shapes').removeClass('is-party-mode');
    $('.party-mode-link').removeClass('is-active');
    $('.party-mode-off-link').removeClass('is-active');
    $('.square-1--absolute').removeClass('is-active');
    $('.square-2--absolute').removeClass('is-active');
    $('.square-3--absolute').removeClass('is-active');
  });

  // mp link  hover

  $('.mp-link-wrapper').on("mouseenter", function(){
    $('.mp-logo').addClass('is-active'); }).on('mouseleave', function(){
    $('.mp-logo').removeClass('is-active');
  });

  // footer link hover

  $('.footer-link').on("mouseenter", function(){
    $(this).find('.footer-link__underline').addClass('is-active'); }).on('mouseleave', function(){
    $(this).find('.footer-link__underline').removeClass('is-active');
  });
});
