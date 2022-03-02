(function($, undefined) {
    $.nette.ext('ajaxContent', {
        start: function() {
            // $.scrollupbar.destroy();
            this.ajaxContent = false;
            $("#js-header").headroom('destroy');
        },
        success: function (payload) {

            if (payload.snippets) {
                for (var i in payload.snippets) {
                    if(i == 'snippet--ajaxContent') {
                        this.ajaxContent = true;
                        $("#js-header").removeClass('o-header--fade').addClass('o-header--stay');

                        veneoDropdown();
                        veneoScroll();
                        veneoInteractions();
                        veneoToggle();
                        veneoInit();
                        veneoFlickity();
                        veneoTabs();
                        veneoMap();
                        veneoWaypoints();
                        notifyCookie();
                    }


                }
            }

        },
        complete: function() {
            // $("[data-header]").scrollupbar();
            $("#js-header").headroom({
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
            if (this.ajaxContent) {
                window.scroll({
                    top: 0,
                    behaviour: "smooth"
                });
            }

        }
    });

})(jQuery);
