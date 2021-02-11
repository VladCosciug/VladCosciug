$(document).ready(function() {
    $('.feedback__slider').slick({
        speed: 600,
        autoplay: true,
        infinite: true,
        slidesToShow: 1,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/right.png"></button>'
    });

    $(window).scroll(function() {
        if ($(this).scrollTop() > 1300) {
            $('.pageup').fadeIn();
        } else {
            $('.pageup').fadeOut();
        }
    });

    new WOW().init();

});