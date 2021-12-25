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

// 動きのきっかけの起点となるアニメーションの名前を定義
function BgFadeAnime() {

  // 背景色が伸びて出現（左から右）
  $('.bgLRextendTrigger').each(function() { //bgLRextendTriggerというクラス名が
    var elemPos = $(this).offset().top - 50; //要素より、50px上の
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight) {
      $(this).addClass('bgLRextend'); // 画面内に入ったらbgLRextendというクラス名を追記
    }
    else {
      $(this).removeClass('bgLRextend'); // 画面外に出たらbgLRextendというクラス名を外す
    }
  });

  // 文字列を囲う子要素
  $('.bgappearTrigger').each(function() { //bgappearTriggerというクラス名が
    var elemPos = $(this).offset().top - 50; //要素より、50px上の
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight) {
      $(this).addClass('bgappear'); // 画面内に入ったらbgappearというクラス名を追記
    }
    else {
      $(this).removeClass('bgappear'); // 画面外に出たらbgappearというクラス名を外す
    }
  });
}

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function() {
  BgFadeAnime(); /* アニメーション用の関数を呼ぶ*/
}); // ここまで画面をスクロールをしたら動かしたい場合の記述

// 画面が読み込まれたらすぐに動かしたい場合の記述
$(window).on('load', function() {
  BgFadeAnime(); /* アニメーション用の関数を呼ぶ*/
}); // ここまで画面が読み込まれたらすぐに動かしたい場合の記述
