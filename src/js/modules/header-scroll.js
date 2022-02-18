// $(window).on("scroll", function () {
//   $(".header").toggleClass("active", $(this).scrollTop() > $(window).height());
// });

let headerScroll;
window.onscroll = function () {
  headerScroll = window.pageYOffset || document.documentElement.scrollTop;
  if (headerScroll > 50) {
    $(".header").css({ "background": "rgba(238, 238, 238, 0.9)" })
  }
  if (50 > headerScroll) {
    $(".header").css({ "background": "none" })
  }
}
