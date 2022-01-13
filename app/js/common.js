$('[name="phone"]').mask('+7(999) 999-99-99');

// mobile menu
$('.btn-burger').on('click', function () {
    $('.mobile-menu').fadeToggle();
});

$('.btn-close').on('click', function () {
    $('.mobile-menu').fadeOut();
});

$('.product-gallery-max').slick({
    slidesToShow: 1,
    fade: true,
    asNavFor: '.product-gallery-preview',
    arrows: false
});

$('.product-gallery-preview').slick({
    slidesToShow: 4,
    asNavFor: '.product-gallery-max',
    focusOnSelect: true,
    prevArrow: '<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>',
    responsive: [
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 420,
            settings: {
                slidesToShow: 2,
            }
        },


    ]
});

new WOW().init();

