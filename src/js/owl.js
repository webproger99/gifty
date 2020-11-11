const {$} = window;

$(".main-slider")
  .owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    responsive: {
      0: {
        items: 1,
      },
    },
  });

$(".review__carousel").owlCarousel({
  loop: true,
  nav: true,
  navText: ["", ""],
  items: 1,
  autoHeight: true,
});

$(".product-item__carousel").owlCarousel({
  loop: true,
  nav: true,
  navText: ["", ""],

  //    center:true,
  responsive: {
    0: {
      items: 1,
    },
    768: {
      items: 2,
      margin: 15,
    },
    1000: {
      items: 3,
      margin: 70,
    },
  },
});
//
// $(".tovar__gallery").owlCarousel({
//   loop: true,
//   margin: 40,
//   nav: true,
//   responsive: {
//     0: {
//       items: 1,
//     },
//     600: {
//       items: 2,
//     },
//     1000: {
//       items: 3,
//     },
//   },
// });
