
$(document).ready(function(){


  $(window).resize(function(){
    if ($(".burger_row").css("background-color")!="rgb(255, 255, 255)") $(".burger_row").toggleClass("changebackground") && $(".main-section header").toggleClass("click");;

    $(".main-section .nav-links").hide();
  })

  $('.hamburger').click(function() {
   $(".main-section header").toggleClass("click");
   $(".main-section .nav-links").fadeToggle(200);
   $(".burger_row").toggleClass("changebackground");
 });

});

$('.button').click(function(){
 window.location.href='signup.html';
})



$(function () {
  count = 0;
  countryArray = ["China", "Greece", "India", "Jamaica", "Japan", "Korea", "Honduras", "Haiti", "Nepal"];
  setInterval(function () {
    count++;
    $("#word").fadeOut(1000, function () {
      $(this).text(countryArray[count % countryArray.length]).fadeIn(1000);
    });
  }, 5000);
});