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
