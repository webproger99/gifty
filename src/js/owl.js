const { $ } = window;

$('.owl-slider').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        }
    }
})
$('.category-tags').owlCarousel({
    loop:true,
    margin:15,
    nav: true,
    
//    center:true,
    responsive:{
        0:{
            items:2
        },
        440:{
            items:3
        },
        600:{
            items:4
        },
        1000:{
            items:7
        }
    }
})

$('.tovar__gallery').owlCarousel({
    loop:true,
    margin:40,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})
