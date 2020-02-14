import  $ from "jquery";
import "slick-carousel";

$(document).ready(function(){
  $('.logo-parade-carousel').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    respondTo: 'slider',
  });
});
