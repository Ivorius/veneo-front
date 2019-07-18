(function($, undefined) {
    var ajaxContent = false;

    $.nette.ext('ajaxContent', {
        start: function() {
            // $.scrollupbar.destroy();
            $("[data-headroom]").headroom('destroy');
        },
        success: function (payload) {

            if (payload.snippets) {
                for (var i in payload.snippets) {
                    if(i == 'snippet--ajaxContent') {
                        ajaxContent = true;
                        $("[data-headroom]").removeClass('o-header--fade').addClass('o-header--stay');

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
            // $("[data-header]").scrollupbar();
            $("[data-headroom]").headroom({
                classes : {
                    // when element is initialised
                    initial : "headroom",
                    // when scrolling up
                    pinned : "header--pinned",
                    // when scrolling down
                    unpinned : "header--unpinned",
                    // when above offset
                    top : "header--top",
                    // when below offset
                    notTop : "header--not-top",
                    // when at bottom of scoll area
                    bottom : "header--bottom",
                    // when not at bottom of scroll area
                    notBottom : "header--not-bottom"
                },
            });
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
