"use strict"

// $(function () {
//     $(".carousel").slick({
//         dots: true,
//         infinite: true,
//         speed: 500,
//         fade: true,
//         cssEase: 'linear',
//         prevArrow: '<button type="button" class="slick-prev">&#60;</button>',
//         nextArrow: '<button type="button" class="slick-next">&#62;</button>',
//     });
// });

// $(document).ready(function () {
//     $('.multiple-items').slick({
//         infinite: true,
//         slidesToShow: 3,
//         slidesToScroll: 3
//     });
// });

$(document).ready(function(){
    $('.carousel').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
         prevArrow: '<button type="button" class="slick-prev">&#10094;</button>',
         nextArrow: '<button type="button" class="slick-next">&#10095;</button>',
    });
});

$(document).ready(function(){
    $('.carousel-mob').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
         prevArrow: '<button type="button" class="slick-prev">&#10094;</button>',
         nextArrow: '<button type="button" class="slick-next">&#10095;</button>',
    });
});