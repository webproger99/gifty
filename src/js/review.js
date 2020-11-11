const {$} = window;

$(".review--show").click(function (e) {
  $(".review_hidden").slideDown(300);
  $(this).parents(".row").slideUp(200);
  e.preventDefault();
});
