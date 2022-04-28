// Hamburger Menu
$('.hamburger__menu').on('click', function() {
  $('.hamburger__menu, .hamburger__nav, .hamburger__bg').toggleClass('open');
});

$('.hamburger__nav a').on('click', function() {
  $('.hamburger__menu, .hamburger__nav, .hamburger__bg').removeClass('open');
});

$(window).resize(function() {
  $('.hamburger__menu, .hamburger__nav, .hamburger__bg').removeClass('open');
})


// Swiper
const swiper = new Swiper('.swiper', {
  slidesPerView: "auto",
  spaceBetween: 20,
  breakpoints: {
    // when window width is >= 768px
    768: {
      spaceBetween: 40,
    },
  },
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});


// Accordion
$('.qa__q').click(function () {
  $(this).next('.qa__a').slideToggle();
  $(this).find('.qa__icon').toggleClass('open');	
});


 // お問い合わせフォーム：送信後メッセージ
 let $form = $( '#js-form' )
 $form.submit(function(e) { 
   $.ajax({ 
    url: $form.attr('action'), 
    data: $form.serialize(), 
    type: "POST", 
    dataType: "xml", 
    statusCode: { 
       0: function() { 
         //送信に成功したときの処理 
         $form.slideUp()
         $( '#js-success' ).slideDown()
       }, 
       200: function() { 
         //送信に失敗したときの処理 
         $form.slideUp()
         $( '#js-error' ).slideDown()
       }
     } 
   });
   return false; 
 }); 


 // お問い合わせフォーム：必須項目の入力チェック
 let $submit = $( '#js-submit' )
 $( '#js-form input[type="text"]' ).keyup( 'change', function() {
   if(
     $( '#js-form input[placeholder="氏名"]' ).val() !== "" &&
     $( '#js-form input[placeholder="フリガナ"]' ).val() !== ""
   ) {
     // 全て入力された時
     $submit.attr( 'disabled', false )
   } else {
     // 全て入力されていない時
     $submit.attr( 'disabled', true )
   }
 })


 // Smooth Scrolling
$('a[href^="#"]').on('click', function() {

  let header = $('.header').innerHeight();
  let id = $(this).attr('href');
  let position = (id == '#') ? 0 : $(id).offset().top - header;

  $('html, body').animate({
    scrollTop: position
  },
  300);
});


// トップへ戻るボタン の表示/非表示
$(window).on("scroll", function() {
  if (100 < $(this).scrollTop()) {
    $('#toTop').addClass('show');
  } else {
    $('#toTop').removeClass('show');
  }
});


// WOW.js
new WOW().init();


