// mv_slide

let index = 0;
const slides = document.querySelectorAll(".slide");

function showNextSlide() {
  slides[index].classList.remove("active"); // 現在のスライドを非表示にする
  index = (index + 1) % slides.length; // 次のスライドに進む（ループ）0余り１
  slides[index].classList.add("active"); // 新しいスライドを表示
}
setInterval(showNextSlide, 3000); // 3秒ごとにスライドを切り替える

// ハンバーガーメニュー
$(function () {
  $(".hamburger").click(function () {
    // メニューの開閉状態を切り替える
    $(".menu").toggleClass("open");

    // ハンバーガーボタンのアクティブクラスを切り替えて三本線をバツにする
    $(this).toggleClass("active");
  });
});
