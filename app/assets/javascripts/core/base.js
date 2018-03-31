$(document).on('ready', function(){
  $("#good-dogs-link").click(function() {
    $('html, body').animate({
        scrollTop: $("#good-dogs").offset().top
    }, 500);
  });
});
