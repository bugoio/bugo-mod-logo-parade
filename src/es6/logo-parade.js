import  $ from "jquery";
import "slick-carousel";

$(document).ready(function(){
  $('.slick-carousel').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    respondTo: 'slider',
  });
});
