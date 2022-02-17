$(document).ready(function () {
  $(".header__burger").click(function (event) {
    $(".header,.header__menu,.header__authorization,.header__burger").toggleClass("active");
    $("body").toggleClass("lock");
  });
});
