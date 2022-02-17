$(document).ready(function () {
  $(".header__burger").click(function (event) {
    $(".header__logo,.header__menu,.header__burger").toggleClass("active");
    $("body").toggleClass("lock");
  });
});
