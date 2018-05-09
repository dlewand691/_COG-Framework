// ===========================================================================================
// =            SLICK CAROUSEL            =
// =============================================================================================
$(document).ready(function() {
    $('.slick-carousel').slick({
        // dots: true,
        // adaptiveHeight: true
    });

    $('.slick-home-banner').slick({
        autoplay: true,
        autoplaySpeed: 7500,
        arrows: true,
        dots: true,
        adaptiveHeight: true,
        slidesToShow: 1,
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    autoplay: false,
                    adaptiveHeight: false,
                },
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ],
    });

    $('.slick-latest-thinking').slick({
        autoplay: true,
        autoplaySpeed: 7500,
        arrows: true,
        dots: true,
        adaptiveHeight: true,
        slidesToShow: 1,
        responsive: [
            {
                breakpoint: 1250,
                settings: {
                    arrows: false
                },
            }, {
                breakpoint: 1024,
                settings: {
                    autoplay: false,
                    arrows: false,
                    dots: false,
                    draggable: false,
                    swipe: false,
                    touchMove: false,
                },
            },
        ],
    });

});
// -----  End of SLICK CAROUSEL  -----------------------------------------------------------------------
