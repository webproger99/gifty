// import "./header";
// import "./sticky-menu";
import "./owl";
import "./review";
// import "./filter";
// import "./rm-form-group";
// import "./plazma";

const { $ } = window;

$("[data-toggle-menu]").click(function () {
  $($(this).data("target")).slideToggle();
});

$("#sticky").stick_in_parent({
  offset_top: 20,
  offset_bottom: 30,
  inner_scrolling: true,
});
