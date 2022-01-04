// ハンバーガーメニュー
$(".openbtn").click(() => { //ボタンがクリックされたら
  $(".openbtn").toggleClass('active'); //ボタン自身に activeクラスを付与し
  $("#g-nav").toggleClass('panelactive'); //ナビゲーションにpanelactiveクラスを付与
  $(".circle-bg").toggleClass('circleactive'); //丸背景にcircleactiveクラスを付与
});

$("#g-nav a, #header a").click(() => { //ナビゲーションのリンクがクリックされたら
  $(".openbtn").removeClass('active'); //ボタンの activeクラスを除去し
  $("#g-nav").removeClass('panelactive'); //ナビゲーションのpanelactiveクラスを除去
  $(".circle-bg").removeClass('circleactive'); //丸背景のcircleactiveクラスを除去
});


// slick
$(document).ready(function() {
  $('.carousel').slick({
    autoplay: true, // 自動再生
    autoplaySpeed: 5000, // 自動再生の速さ、単位はミリ秒
    arrows: false, // 左右のナビゲーションを無効にする
    dots: true, // スライド下にドットを表示する
    fade: false, // スライドの切り替えをフェードにする 
  });
});


// fullPage.js + Animate.css
(function($) {

  'use strict';

  // variables
  var $isAnimatedSecond = $('.concept .is-animated'),
    $isAnimatedSecondSingle = $('.concept .is-animated__single'),
    $isAnimatedThird = $('.about .is-animated'),
    $isAnimatedThirdSingle = $('.about .is-animated__single'),
    $isAnimatedFourth = $('.works .is-animated'),
    $isAnimatedFourthSingle = $('.works .is-animated__single'),
    $isAnimatedFifth = $('.contact .is-animated'),
    $isAnimatedFifthSingle = $('.contact .is-animated__single');

  // initialize fullPage
  $('#fullpage').fullpage({

    navigation: true,
    anchors: ['hero', 'concept', 'about', 'works', 'contact'],
    onLeave: function(index, nextIndex, direction) {

      /**
       * use the following condition: 
       *
       *   if( index == 1 && direction == 'down' ) {
       *
       * if you haven't enabled the dot navigation
       * or you aren't interested in the animations that occur 
       * when you jump (using the dot navigation) 
       * from the first section to another sections 
       */

      // first animation
      if (index == 1 && nextIndex == 2) {
        $isAnimatedSecond.addClass('animate__animated animate__fadeInUp animate__delay-1s');
        $isAnimatedSecond.eq(0).css('--animate-delay', '.6s');
        $isAnimatedSecond.eq(1).css('--animate-delay', '.9s');
        $isAnimatedSecond.eq(2).css('--animate-delay', '1.2s');
        $isAnimatedSecondSingle.addClass('animate__animated animate__zoomIn animate__delay-1s').css('--animate-delay', '.3s');
      }

      /**
       * use the following condition: 
       *
       *   else if( index == 2 && direction == 'down' ) {
       *
       * if you haven't enabled the dot navigation
       * or you aren't interested in the animations that occur 
       * when you jump (using the dot navigation) from the first section to the third one 
       */

      // second animation
      else if ((index == 1 || index == 2) && nextIndex == 3) {
        $isAnimatedThird.eq(0).addClass('animate__animated animate__fadeInUp animate__delay-1s').css('--animate-delay', '.9s');
        $isAnimatedThird.eq(1).addClass('animate__animated animate__fadeInUp animate__delay-1s').css('--animate-delay', '1.2s');
        $isAnimatedThird.eq(2).addClass('animate__animated animate__fadeInUp animate__delay-1s').css('--animate-delay', '1.5s');
        $isAnimatedThirdSingle.eq(0).addClass('animate__animated animate__zoomIn animate__delay-1s').css('--animate-delay', '.3s');
        $isAnimatedThirdSingle.eq(1).addClass('animate__animated animate__zoomIn animate__delay-1s').css('--animate-delay', '.6s');
      }


      /**
       * use the following condition:
       *
       *   else if( index == 3 && direction == 'down' ) {
       *
       * if you haven't enabled the dot navigation
       * or you aren't interested in the animations that occur 
       * when you jump (using the dot navigation) 
       * from the first or second section to the fourth one 
       */

      // third animation
      else if ((index == 1 || index == 2 || index == 3) && nextIndex == 4) {
        // $isAnimatedFourth.addClass('animated zoomIn').css('animation-delay', '.6s');
        $isAnimatedFourthSingle.addClass('animate__animated animate__zoomIn animate__delay-1s').css('--animate-delay', '.3s');
        // $isAnimatedFourthSingle.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
        //   $(this).removeClass('lightSpeedIn').addClass('zoomOutDown');
        // });
      }

      // fourth animation
      else if ((index == 1 || index == 2 || index == 3 || index == 4) && nextIndex == 5) {
        $isAnimatedFifth.addClass('animate__animated animate__fadeInUpBig animate__delay-1s').css('--animate-delay', '.6s');
        $isAnimatedFifthSingle.addClass('animate__animated animate__zoomIn animate__delay-1s').css('--animate-delay', '.3s');
        // $isAnimatedFifthSingle.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
        //   $(this).removeClass('lightSpeedIn').addClass('zoomOutDown');
        // });
      }
    }

  });

})(jQuery);


const form = document.getElementById('my-form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
});
