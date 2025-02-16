// mv_slide

let index = 0;
const slides = document.querySelectorAll('.slide');

function showNextSlide() {
  slides[index].classList.remove('active'); // 現在のスライドを非表示にする
  index = (index + 1) % slides.length; // 次のスライドに進む（ループ）0余り１
  slides[index].classList.add('active'); // 新しいスライドを表示
}
setInterval(showNextSlide, 4000); // 3秒ごとにスライドを切り替える

// ハンバーガーメニュー
$(function () {
  $('.hamburger').click(function () {
    // メニューの開閉状態を切り替える
    $('.menu').toggleClass('open');

    // ハンバーガーボタンのアクティブクラスを切り替えて三本線をバツにする
    $(this).toggleClass('active');
  });

  // メニューのリンクをクリックしたら閉じる
  $('.menu a').click(function () {
    $('.menu').removeClass('open');
    $('.hamburger').removeClass('active'); // ハンバーガーボタンの状態もリセット
  });
});

// スクロールイン
$(function () {
  $(window).scroll(function () {
    var windowHeight = $(window).height(),
      scrollY = $(window).scrollTop();
    $('.scroll_fadeIn').each(function () {
      var thisPosition = $(this).offset().top;
      if (scrollY > thisPosition - windowHeight) {
        $(this).addClass('fadeIn_animation_start');
      }
    });
  });
});
