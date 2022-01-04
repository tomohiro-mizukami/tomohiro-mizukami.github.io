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
    // autoplay: true, // 自動再生
    autoplaySpeed: 5000, // 自動再生の速さ、単位はミリ秒
    arrows: false, // 左右のナビゲーションを無効にする
    dots: true, // スライド下にドットを表示する
    fade: false, // スライドの切り替えをフェードにする 
  });
});


// Waypoints + Animate.css
const effects = ['fadeInUp', 'zoomIn'];
// ${effect}クラスの付いた要素にwaypointを登録
effects.forEach((effect) => {
  // ${effect}クラスの付いた要素にwaypointを登録
  $(`.${effect}`).waypoint({
    handler(direction) {
      // 要素が画面上に来るとここが実行される
      if (direction === 'down') {
        /**
         * 下方向のスクロール
         * イベント発生元の要素に${effect}クラスを付けることで
         * アニメーションを開始
         */
        $(this.element)
          .addClass(`animate__${effect}`)
          .css('opacity', '1')
          .removeClass(`${effect}`);

        /**
         * waypointを削除することで、この要素に対しては
         * これ以降handlerが呼ばれなくなる
         */
        this.destroy();
      }
    },

    // 要素が画面上に来たらhandlerを実行
    offset: '100%',
  });
});

// fullPage.js
$(document).ready(function() {
  $('#fullpage').fullpage({
    //Navigation
    anchors: ['hero', 'concept', 'about', 'works', 'contact']
  });
});
