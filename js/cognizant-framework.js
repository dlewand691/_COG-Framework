// @codekit-prepend '../bower_components/jquery/dist/jquery.js'
// @codekit-prepend '../bower_components/foundation-sites/dist/js/foundation.js'
// @codekit-prepend '../bower_components/motion-ui/motion-ui.js'
// @codekit-prepend '../bower_components/plyr/dist/plyr.js'
// @codekit-prepend '../bower_components/aos/dist/aos.js'
// @codekit-prepend '../bower_components/scrollup/dist/jquery.scrollUp.js'
// @codekit-prepend '../bower_components/select2/dist/js/select2.js'
// @codekit-prepend '../bower_components/slick-carousel/slick/slick.js'
// @codekit-prepend '../bower_components/lazysizes/lazysizes.js'
// @codekit-prepend '../bower_components/animsition/dist/js/animsition.js'

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
lazySizesConfig.expand = 1000;
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

$('#navBar-blue .sticky').on('sticky.zf.stuckto:top', function() {
    console.log($(this));
    $(this).css({
        marginTop: $('.sticky').height()
    });
});

// -----  End of GRAY AND BLUE NAV BAR STICKY SOLUTION  ---------------------------------------------

// =============================================================================================
// AOS- ANIMATE ON SCROLL
// =============================================================================================

AOS.init({
    // startEvent: 'load'
});

// -----  End of AOS- ANIMATE ON SCROLL  ---------------------------------------------

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
// $('.accordion-title').on('click', function(event, target) {
//     var t = $(target[0]);
//     $('html, body').animate({
//         scrollTop: t.offset().top - 60
//     }, 300);
// });
// $(".accordion li > a").click(function() {
//     $('html,body').animate({
//             scrollTop: $(".is-active").offset().top
//         },
//         'slow');
// });
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
// $('[data-accordion]').on('down.zf.accordion', function() {
//   // console.log('Accordion down!');
//   $('#magellan').foundation('calcPoints');
// });
// $('[data-accordion]').on('up.zf.accordion', function() {
//   // console.log('Accordion up!');
//   $('#magellan').foundation('calcPoints');
// });
$('.accordion').on('mutateme.zf.trigger', function() {
    $('#magellan').foundation('calcPoints');
});

// -----  End of MAGELLAN AND ACCORDION RESET  ---------------------------------------------

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


// ===========================================================================================
// =            SCROLLUP            =
// =============================================================================================
$(document).ready(function() {
    $.scrollUp({
        scrollName: 'scrollUp', // Element ID
        scrollDistance: 300, // Distance from top/bottom before showing element (px)
        animation: 'slide', // Fade, slide, none
        scrollText: 'BACK TO TOP', // Text for element, can contain HTML
        scrollImg: false,
    }); // Set true to use image
});

// $(document).ready(function() {
//     ScrollUp.init("#scrollUp", {
//         scrollEasing: 'easeInOutCube',
//         scrollDistance: 400
//     });
// });
// $(document).ready(function() {
//     ScrollUp.init("#scrollUpContactUs", {
//         scrollEasing: 'easeInOutCube',
//         scrollDistance: 400,
//         classes: {
//             show: "scrollUpContactUs--show"
//         }
//     });
// });

// -----  End of SCROLLUP  -----------------------------------------------------------------------

// /* =============================================================================================
// SELECT 2
// ============================================================================================= */

$(document).ready(function() {
    $(".select2").select2({
        minimumResultsForSearch: Infinity
    });

    $('.select2').on('select2:open', function(e) {
        var container = $(this).select('select2-container');
        var position = container.offset().top;
        var availableHeight = $(window).height() - position - container.outerHeight();
        var bottomPadding = 50; // Set as needed
        $('ul.select2-results__options').css('max-height', (availableHeight - bottomPadding) + 'px');
    });
});

/* -----  End of SELECT 2  --------------------------------------------- */

// =============================================================================================
// PLYR
// =============================================================================================

$(document).ready(function() {
    plyr.setup('.plyr');
});

// -----  End of PLYR  ---------------------------------------------

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

// =============================================================================================
// ANIMSITION
// =============================================================================================

$(document).ready(function() {
    $(".animsition").animsition({
        // onLoadEvent: false,
        // timeout: true,
        // timeoutCountdown: 1000
        // outDuration: 2000
    });
    // $('.isotope-item').on('animsition.inEnd', function() {
    //     $('.isotope-item').removeClass('animsition');
    // });
    // $('.isotope-item').click(function() {
    //     $('.isotope-item').addClass('animsition');
    // });
});

// -----  End of ANIMSITION  ---------------------------------------------

// =============================================================================================
// COLLAPSE/EXPAND SECTION, READ MORE
// =============================================================================================

/*
 * jQuery Shorten plugin 1.1.0
 *
 * Copyright (c) 2014 Viral Patel
 * http://viralpatel.net
 *
 * Licensed under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 */

/*
 ** updated by Jeff Richardson
 ** Updated to use strict,
 ** IE 7 has a "bug" It is returning undefined when trying to reference string characters in this format
 ** content[i]. IE 7 allows content.charAt(i) This works fine in all modern browsers.
 ** I've also added brackets where they weren't added just for readability (mostly for me).
 */

(function($) {
    $.fn.shorten = function(settings) {
        "use strict";

        var config = {
            showChars: 100,
            minHideChars: 10,
            ellipsesText: "...",
            moreText: "more",
            lessText: "less",
            onLess: function() {},
            onMore: function() {},
            errMsg: null,
            force: false,
        };

        if (settings) {
            $.extend(config, settings);
        }

        if ($(this).data('jquery.shorten') && !config.force) {
            return false;
        }
        $(this).data('jquery.shorten', true);

        $(document).off("click", '.morelink');

        $(document).on({
            click: function() {

                var $this = $(this);
                if ($this.hasClass('less')) {
                    $this.removeClass('less');
                    $this.html(config.moreText);
                    $this.parent().prev().animate({
                        'height': '0' + '%'
                    }, function() {
                        $this.parent().prev().prev().show();
                    }).hide(function() {
                        config.onLess();
                    });

                } else {
                    $this.addClass('less');
                    $this.html(config.lessText);
                    $this.parent().prev().animate({
                        'height': '100' + '%'
                    }, function() {
                        $this.parent().prev().prev().hide();
                    }).show(function() {
                        config.onMore();
                    });
                }
                return false;
            }
        }, '.morelink');

        return this.each(function() {
            var $this = $(this);

            var content = $this.html();
            var contentlen = $this.text().length;
            if (contentlen > config.showChars + config.minHideChars) {
                var c = content.substr(0, config.showChars);
                if (c.indexOf('<') >= 0) { // If there's HTML don't want to cut it
                    var
                        inTag = false; // I'm in a tag?
                    var
                        bag = ''; // Put the characters to be shown here
                    var
                        countChars = 0; // Current bag size
                    var
                        openTags = []; // Stack for opened tags, so I can close them later
                    var
                        tagName = null;
                    for (vari = 0, r = 0; r <= config.showChars; i++) {
                        if (content[i] == '<' && !inTag) {
                            inTag = true;

                            // This could be "tag" or "/tag"
                            tagName = content.substring(i + 1, content.indexOf('>', i));

                            // If its a closing tag
                            if (tagName[0] == '/') {
                                if (tagName != '/' + openTags[0]) {
                                    config.errMsg = 'ERROR en HTML: the top of the stack should be the tag that closes';
                                } else {
                                    openTags.shift(); // Pops the last tag from the open tag stack (the tag is closed in the retult HTML!)
                                }

                            } else {
                                // There are some nasty tags that don't have a close tag like <br/>
                                if (tagName.toLowerCase() != 'br') {
                                    openTags.unshift(tagName); // Add to start the name of the tag that opens
                                }
                            }
                        }
                        if (inTag && content[i] == '>') {
                            inTag = false;
                        }

                        if (inTag) {
                            bag += content.charAt(i // Add tag name chars to the result
                            );
                        } else {
                            r++;
                            if (countChars <= config.showChars) {
                                bag += content.charAt(i); // Fix to ie 7 not allowing you to reference string characters using the []
                                countChars++;
                            } else { // Now I have the characters needed
                                if (openTags.length > 0) { // I have unclosed tags
                                    //console.log('They were open tags');
                                    //console.log(openTags);
                                    for (j = 0; j < openTags.length; j++) {
                                        //console.log('Cierro tag ' + openTags[j]); bag +=
                                        '</' + openTags[j] + '>'; // Close all tags that were opened

                                        // You could shift the tag from the stack to check if you end with an empty stack, that means you have closed all open tags
                                    }
                                    break;
                                }
                            }
                        }
                    }
                    c =
                        $('<div/>').html(bag + '<span class="ellip">' + config.ellipsesText + '</span>').html();
                } else {
                    c += config.ellipsesText;
                }

                var html =
                    '<div class="shortcontent">' + c + '</div><div class="allcontent">' + content + '</div><span><a href="javascript://nop/" class="morelink">' + config.moreText + '</a></span>';
                $this.html(html);
                $this.find(".allcontent").hide(); // Hide all text$('.shortcontent p:last', $this). css('margin-bottom', 0); //Remove bottom margin on last paragraph as it's likely shortened
            }
        });

    };

})(jQuery);
$(".read-more").shorten({
    "showChars": 140,
    // "moreText": "See More",
    "moreText": "&#xe901;",
    // "lessText": "Less",
    "lessText": "&#xe901;"
});

// -----  End of COLLAPSE/EXPAND SECTION, READ MORE  ---------------------------------------------

// =============================================================================================
// HOVER TABS
// =============================================================================================

var
    target =
    document.getElementById("hover-g");
// var target = document.getElementsByClassName("hover-tabs"); varoptions =
{}; //Define options e.g. "option1" : "value1", etc.

varelem =
    new Foundation.Tabs($(target), options);
$('.tabs-title').on("mouseover", function() {
    //Find the associated panel id.varpanelId =
    $(this).find("a").attr("href").substring(1);
    var tabContents =
        document.getElementById(panelId);
    // console.log(panelId)
    //Use the "tabs" object to select the associated panel.elem.
    selectTab($(tabContents));
    //Show the tab contents.$(tabContents).show();
}).
on("mouseout", function() {
    varpanelId =
        $(this).find("a").attr("href").substring(1);
    $(this).find("a").attr("aria-selected", "false");
    var tabContents =
        document.getElementById(panelId);
    //Hide the tab contents. $(tabContents);
    // .hide();
});

// -----  End of HOVER TABS  ---------------------------------------------
