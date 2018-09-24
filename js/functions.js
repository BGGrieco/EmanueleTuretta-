$(document).ready(function()
{
  $("#sestasi").hover(function()
  {
    $("#one").toggleClass("coverOn");
  });

  $("#delia").hover(function()
  {
    $("#two").toggleClass("coverOn");
  });

  $("#altro").hover(function()
  {
    $("#three").toggleClass("coverOn");
  });

  $("#altroAncora").hover(function()
  {
    $("#four").toggleClass("coverOn");
  });

  var slideIndex = 0;
  carousel();
  function carousel()
  {
    "use strict";
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++)
    {
      x[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > x.length)
    {
      slideIndex = 1;
    }
    x[slideIndex-1].style.display = "block";
    setTimeout(carousel, 4000);
  }
});
