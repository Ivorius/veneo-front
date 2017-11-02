(function($, undefined) {

    $.nette.ext('ajaxContent', {
        start: function() {
            $.scrollupbar.destroy();
        },
        success: function (payload) {

            if (payload.snippets) {
                for (var i in payload.snippets) {
                    if(i == 'snippet--ajaxContent') {
                        recall();
                        $("[data-header]").removeClass('o-header--fade').addClass('o-header--stay');

                        veneoDropdown();
                        veneoScroll();
                        veneoInteractions();
                        veneoToggle();
                        veneoInit();
                        veneoFlickity();
                        veneoTabs();
                        veneoMap();
                        veneoWaypoints();
                    }
                }
            }

        },
        complete: function() {
            $("[data-header]").scrollupbar();
        }
    });

})(jQuery);