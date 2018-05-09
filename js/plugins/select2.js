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
