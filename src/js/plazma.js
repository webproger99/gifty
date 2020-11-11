const { $ } = window;

$(document).ready(function () {
  $(".plazma-table__header").click(function () {
    $(this)
      .toggleClass("opened")
      .next(".plazma-table__body").slideToggle(300);
  });
});
