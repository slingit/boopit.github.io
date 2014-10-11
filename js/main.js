//variables
var clicked = 0;
var tTime = 250;

$(document).ready(function(){
    $(".container").fitVids();
});

$('.videoPop').click(function() {
  if(clicked == 0) {
    $('.videoh').slideDown(tTime);
    $('#mainView .description').slideUp(tTime);
    setTimeout(function() {
      $('.videoPop').text('Hide Demo');
    }, tTime);
    clicked = 1;
  } else {
    $('.videoh').slideUp(tTime);
    $('#mainView .description').slideDown(tTime);
    setTimeout(function() {
      $('.videoPop').text('Demo');
    }, tTime);
    clicked = 0;
  }
})
