(function($, undefined) {
    var ajaxContent = false;

    $.nette.ext('ajaxContent', {
        start: function() {
            $.scrollupbar.destroy();
        },
        success: function (payload) {

            if (payload.snippets) {
                for (var i in payload.snippets) {
                    if(i == 'snippet--ajaxContent') {
                        ajaxContent = true;
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
            veneoProduct();
            veneoSelectSubmit();

            if (ajaxContent) {
                window.scroll({
                    top: 0,
                    behaviour: "smooth"
                });
            }

        }
    });

})(jQuery);
