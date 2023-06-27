$(document).ready(function () {  
    $('.fade').slick({
      autoplay: true,
      autoplaySpeed: 300,
      dots: true,
      infinite: true,
      speed: 500,
      fade: true,
      cssEase: 'linear',
      appendArrows: $('.slider'),
      appendDots: $('.dots-slider'),
      prevArrow: '<button type="button" class="slick-prev"><img src="./gallery/icons/feedback/feedback_arrow-left_icon.png"></button>',
      nextArrow: '<button type="button" class="slick-next"><img src="./gallery/icons/feedback/feedback_arrow-left_icon.png"></button>',
      // prevArrow: $('.prev-btn'),
      // nextArrow: $('.next-btn'),
    });
  })