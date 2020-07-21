'use strict'
$(function(){

  const showTime = 200;

  const opening = () => {
    $('header h1').delay(500).show(1000).css({
      'transform' : 'translateX(0)'
    });
    // $('#f-name').animate({
    //   "right":"+530"
    // },1000);
    // $('#name').delay(1300).fadeIn(showTime);
    $('.message').delay(2000).show(1000);
    $('header').delay(4500).hide(1000);
  }
  opening();

});
