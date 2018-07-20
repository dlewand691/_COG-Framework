// @codekit-prepend '../bower_components/jquery/dist/jquery.js'


// =============================================================================================
// ███████  ██████  ██    ██ ███    ██ ██████   █████  ████████ ██  ██████  ███    ██
// ██      ██    ██ ██    ██ ████   ██ ██   ██ ██   ██    ██    ██ ██    ██ ████   ██
// █████   ██    ██ ██    ██ ██ ██  ██ ██   ██ ███████    ██    ██ ██    ██ ██ ██  ██
// ██      ██    ██ ██    ██ ██  ██ ██ ██   ██ ██   ██    ██    ██ ██    ██ ██  ██ ██
// ██       ██████   ██████  ██   ████ ██████  ██   ██    ██    ██  ██████  ██   ████
// ███████  ██████ ██████  ██ ██████  ████████ ███████
// ██      ██      ██   ██ ██ ██   ██    ██    ██
// ███████ ██      ██████  ██ ██████     ██    ███████
//      ██ ██      ██   ██ ██ ██         ██         ██
// ███████  ██████ ██   ██ ██ ██         ██    ███████
// =============================================================================================


// =============================================================================================
// FOUNDATION UTILITY SCRIPTS
// =============================================================================================
// @codekit-prepend '../bower_components/foundation-sites/dist/js/plugins/foundation.core.js'
// @codekit-prepend '../bower_components/foundation-sites/dist/js/plugins/foundation.util.mediaQuery.js'
// @codekit-prepend '../bower_components/foundation-sites/dist/js/plugins/foundation.util.motion.js'
// @codekit-prepend '../bower_components/foundation-sites/dist/js/plugins/foundation.util.box.js'
// @codekit-prepend '../bower_components/foundation-sites/dist/js/plugins/foundation.util.triggers.js'
// @codekit-prepend '../bower_components/foundation-sites/dist/js/plugins/foundation.util.keyboard.js'
// @codekit-prepend '../bower_components/foundation-sites/dist/js/plugins/foundation.util.nest.js'
// @codekit-prepend '../bower_components/foundation-sites/dist/js/plugins/foundation.util.timerAndImageLoader.js'
// @codekit-prepend '../bower_components/foundation-sites/dist/js/plugins/foundation.util.touch.js'
// @codekit-prepend '../bower_components/foundation-sites/dist/js/plugins/foundation.zf.responsiveAccordionTabs.js'


// =============================================================================================
// FOUNDATION PLUGINS
// =============================================================================================
// @codekit-prepend '../bower_components/foundation-sites/dist/js/plugins/foundation.abide.js'
// @codekit-prepend '../bower_components/foundation-sites/dist/js/plugins/foundation.accordion.js'
// @codekit-prepend '../bower_components/foundation-sites/dist/js/plugins/foundation.accordionMenu.js'
// @codekit-prepend '../bower_components/foundation-sites/dist/js/plugins/foundation.drilldown.js'
// @codekit-prepend '../bower_components/foundation-sites/dist/js/plugins/foundation.dropdown.js'
// @codekit-prepend '../bower_components/foundation-sites/dist/js/plugins/foundation.dropdownMenu.js'
// @codekit-prepend '../bower_components/foundation-sites/dist/js/plugins/foundation.equalizer.js'
// @codekit-prepend '../bower_components/foundation-sites/dist/js/plugins/foundation.interchange.js'
// @codekit-prepend '../bower_components/foundation-sites/dist/js/plugins/foundation.magellan.js'
// @codekit-prepend '../bower_components/foundation-sites/dist/js/plugins/foundation.offcanvas.js'
// @codekit-prepend '../bower_components/foundation-sites/dist/js/plugins/foundation.responsiveMenu.js'
// @codekit-prepend '../bower_components/foundation-sites/dist/js/plugins/foundation.responsiveToggle.js'
// @codekit-prepend '../bower_components/foundation-sites/dist/js/plugins/foundation.reveal.js'
// @codekit-prepend '../bower_components/foundation-sites/dist/js/plugins/foundation.sticky.js'
// @codekit-prepend '../bower_components/foundation-sites/dist/js/plugins/foundation.tabs.js'
// @codekit-prepend '../bower_components/foundation-sites/dist/js/plugins/foundation.toggler.js'
// @codekit-prepend '../bower_components/foundation-sites/dist/js/plugins/foundation.zf.responsiveAccordionTabs.js'
// @codekit-prepend '../bower_components/motion-ui/motion-ui.js'


// =============================================================================================
// ██████  ██      ██    ██  ██████  ██ ███    ██ ███████
// ██   ██ ██      ██    ██ ██       ██ ████   ██ ██
// ██████  ██      ██    ██ ██   ███ ██ ██ ██  ██ ███████
// ██      ██      ██    ██ ██    ██ ██ ██  ██ ██      ██
// ██      ███████  ██████   ██████  ██ ██   ████ ███████
// =============================================================================================

// @codekit-prepend '../bower_components/scrollup/dist/jquery.scrollUp.js'
// @codekit-prepend '../bower_components/lazysizes/lazysizes.js'
// @codekit-prepend '../bower_components/slick-carousel/slick/slick.min.js'
// @codekit-prepend '../bower_components/succinct/jQuery.succinct.js'

Foundation.Abide.defaults.patterns['dashes_only'] = /^[0-9-+]*$/;

$(document).foundation();

var $sticky = $('.sticky');

function fixScroll() {
    var topOffset = $(window).scrollTop();
    $sticky.css('transform', 'translate3d(0, ' + topOffset + 'px, 0)');
}

$('[data-off-canvas]').on('opened.zf.offcanvas', function() {
    fixScroll();
    $(window).on('scroll', fixScroll);
});

$('[data-off-canvas]').on('closed.zf.offcanvas', function() {
    $(window).off('scroll', fixScroll);
    $sticky.css('transform', 'translateY(0)');
});

// =============================================================================================
// FORM VALIDATION ON SUBMIT
// =============================================================================================

$("#contact-widget").bind("submit", function(e) {
    e.preventDefault();
    // console.log("submit intercepted");
    return false;
});
$("#contact-widget").bind("forminvalid.zf.abide", function(e, target) {
    // console.log("form is invalid");
    // $(this).find(".button").addClass("disabled");
});
$("#contact-widget").bind("formvalid.zf.abide", function(e, target) {
    // console.log("form is valid");
    // $(this).find(".button").removeClass("disabled");
    $('#thankYouOverlay').foundation('open');
});

// -----  End of FORM VALIDATION ON SUBMIT  ---------------------------------------------

// =============================================================================================
// LAZY LOADING
// =============================================================================================

window.lazySizesConfig = window.lazySizesConfig || {};
lazySizesConfig.loadMode = 3;
lazySizesConfig.expFactor = 4;
lazySizesConfig.expand = 500;
//add simple support for background images:
document.addEventListener('lazybeforeunveil', function(e) {
    var bg = e.target.getAttribute('data-bg');
    if (bg) {
        e.target.style.backgroundImage = 'url(' + bg + ')';
    }
});

// -----  End of LAZY LOADING  ---------------------------------------------

// =============================================================================================
// GRAY AND BLUE NAV BAR STICKY SOLUTION
// =============================================================================================

$('#navBarInPage .sticky').on('sticky.zf.stuckto:top', function() {
    // console.log($(this));
    $(this).css({
        marginTop: $('.sticky').height()
    });
});

// -----  End of GRAY AND BLUE NAV BAR STICKY SOLUTION  ---------------------------------------------



// =============================================================================================
//          ABIDE CHECKBOX GROUP VALIDATION
// =============================================================================================

Foundation.Abide.defaults.validators.checkbox_limit = function($el, notrequired, parent) {
    var group = parent.closest('.checkbox-group');
    var min = group.attr('data-abide-validator-min');
    var checked = group.find(':checked').length;
    if (checked >= min) {
        // clear label highlight
        group.find('label').each(function() {
            $(this).removeClass('is-invalid-label');
        });
        // clear checkbox error
        group.find(':checkbox').each(function() {
            $(this).removeClass('is-invalid-input').removeAttr('data-invalid');
        });
        group.find('small.form-error').hide();
        return true;
    } else {
        group.find('small.form-error').css({
            display: 'block'
        });
        return false;
    }
};

// -----  End of ABIDE CHECKBOX GROUP VALIDATION  ---------------------------------------------

// ===========================================================================================
// =            ACCORDION BACKGROUND COLORS            =
// =============================================================================================
$(document).ready(function() {
    $(".accordion-gradient").each(function() {
        var length = $(this).children().length;
        $(this).find(".accordion-item").each(function(index) {
            var colorClass = "accordion-gradient-" + Math.round((index / (length - 1)) * 100);
            // $(this).html(colorClass);
            $(this).addClass(colorClass);
        });
    });
});
// -----  End of ACCORDION BACKGROUND COLORS  --------------------------------------------------------------------

// =============================================================================================
// BACKGROUND GRADIENT STEPS
// =============================================================================================

$(".tabs.bg-steps-blue-green").each(function() {
    var length = $(this).children().length;
    $(this).find(".tabs-title").each(function(index) {
        var colorClass = "bg-steps-blue-green-" + Math.round((index / (length - 1)) * 100);
        $(this).addClass(colorClass);
    });
});

$(".tabs.bg-steps-blue").each(function() {
    var length = $(this).children().length;
    $(this).find(".tabs-title").each(function(index) {
        var colorClass = "bg-steps-blue-" + Math.round((index / (length - 1)) * 100);
        $(this).addClass(colorClass);
    });
});

$(".tabs.bg-steps-green").each(function() {
    var length = $(this).children().length;
    $(this).find(".tabs-title").each(function(index) {
        var colorClass = "bg-steps-green-" + Math.round((index / (length - 1)) * 100);
        $(this).addClass(colorClass);
    });
});

// -----  End of BACKGROUND GRADIENT STEPS  ---------------------------------------------

// ===========================================================================================
// =            ACCORDION SCROLL TO TOP            =
// =============================================================================================

$(".accordion-title").click(function() {
    setTimeout(function() {
        $('html,body').animate({
            // scrollTop: $('.is-active').offset().top - 84
        });
    }, 300);
});

// -----  End of ACCORDION SCROLL TO TOP  -----------------------------------------------------------------------

// =============================================================================================
// MAGELLAN AND ACCORDION RESET
// =============================================================================================

$('.accordion').on('mutateme.zf.trigger', function() {
    $('#magellan').foundation('calcPoints');
});

// -----  End of MAGELLAN AND ACCORDION RESET  ---------------------------------------------




// ===========================================================================================
// =            SCROLLUP            =
// =============================================================================================
$(document).ready(function() {
    $.scrollUp({
        scrollName: 'scrollUp', // Element ID
        scrollDistance: 300, // Distance from top/bottom before showing element (px)
        animation: 'slide', // Fade, slide, none
        scrollText: 'BACK TO TOP', // Text for element, can contain HTML
        scrollImg: false // Set true to use image
    });
});

// -----  End of SCROLLUP  -----------------------------------------------------------------------


// =============================================================================================
// HAMBURGER ICON ANIMATION
// =============================================================================================

$(document).ready(function() {
    $(".hamburger").click(function() {
        $(this).toggleClass('is-active');
    });
    $(".js-off-canvas-overlay").click(function() {
        $(".hamburger").removeClass("is-active");
    });
});
// -----  End of HAMBURGER ICON ANIMATION  ---------------------------------------------


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



// =============================================================================================
// SUCCINCT - LINE CLAMP/TRUNCATE
// =============================================================================================

$(function() {
    $('.truncate-40').succinct({
        size: 40
    });
    $('.truncate-50').succinct({
        size: 50
    });
    $('.truncate-60').succinct({
        size: 60
    });
    $('.truncate-70').succinct({
        size: 70
    });
    $('.truncate-75').succinct({
        size: 75
    });
    $('.truncate-80').succinct({
        size: 80
    });
    $('.truncate-100').succinct({
        size: 100
    });
    $('.truncate-110').succinct({
        size: 110
    });
    $('.truncate-120').succinct({
        size: 120
    });
    $('.truncate-130').succinct({
        size: 130
    });
    $('.truncate-140').succinct({
        size: 140
    });
    $('.truncate-150').succinct({
        size: 150
    });
});


// -----  End of SUCCINCT - LINE CLAMP/TRUNCATE  ---------------------------------------------
