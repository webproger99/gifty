const {
  $,
} = window;

$(".rm-form-group__title").click(function () {
  $(this)
  //        .toggleClass("opened")
    .next(".rm-form-group__items")
    .slideToggle();
});

$(".catalog__sort-select").change(function () {
  location.href = $(this).val();
});
