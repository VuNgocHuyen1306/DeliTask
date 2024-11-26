$(document).ready(function () {
  // Activate Carousel
  $("#myCarousel").carousel({
    interval: false,
  });

  // Enable Carousel Indicators
  $(".item1").click(function () {
    $("#myCarousel").carousel(0);
  });
  $(".item2").click(function () {
    $("#myCarousel").carousel(1);
  });
  $(".item3").click(function () {
    $("#myCarousel").carousel(2);
  });

  var targetDiv = $("#header");
  $(window).scroll(function () {
    var windowpos = $(window).scrollTop();

    if (windowpos >= 50) {
      targetDiv.addClass("scrolling-active");
    } else {
      targetDiv.removeClass("scrolling-active");
    }
  });
});
