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
  var $conceptZoomIn = $('.concept .zoom-in'),
    $conceptFadeInUp = $('.concept .fade-in-up'),
    $aboutZoomIn = $('.about .zoom-in'),
    $aboutFadeInUp = $('.about .fade-in-up'),
    $works = $('.works-area'),
    $contactForm = $('.contact .form-list'),
    $contactBtn = $('.contact .submit-btn');

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

      // Concept animation
      if (index == 1 && nextIndex == 2) {
        $conceptZoomIn.addClass('animate__animated animate__zoomIn');
        $conceptFadeInUp.addClass('animate__animated  animate__fadeInUp');
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

      // About animation
      else if ((index == 1 || index == 2) && nextIndex == 3) {
        $aboutZoomIn.addClass('animate__animated animate__zoomIn');
        $aboutFadeInUp.addClass('animate__animated  animate__fadeInUp');
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

      // Works animation
      else if ((index == 1 || index == 2 || index == 3) && nextIndex == 4) {
        $works.addClass('animate__animated animate__zoomIn animate__delay-2s');

        // $isAnimatedFourthSingle.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
        //   $(this).removeClass('lightSpeedIn').addClass('zoomOutDown');
        // });
      }

      // Contact animation
      else if ((index == 1 || index == 2 || index == 3 || index == 4) && nextIndex == 5) {
        $contactForm.addClass('animate__animated animate__zoomIn animate__delay-1s');
        $contactBtn.addClass('animate__animated  animate__fadeInUpBig animate__delay-2s');
        
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
