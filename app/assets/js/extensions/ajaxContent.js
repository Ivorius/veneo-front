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

    $.nette.ext('flashMessages', {
        success: function (payload) {

            if (payload.snippets) {
                for (var i in payload.snippets) {
                    if (i == 'snippet--flashMessages') {
                        setTimeout(function() {
                            notify(true);
                        }, 2000);
                    }
                }
            }

        }
    });

})(jQuery);
