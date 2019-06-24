(function($, undefined) {

    $.nette.ext('modal', {
        init: function () {
            var self = this;

            this.ext('snippets', true).after($.proxy(function ($el) {
                if (!$el.is('.snippetmodal')) {
                    return;
                }
                self.open($el);
            }, this));

            $('.snippetmodal[id^="snippet-"]').each(function () {
                self.open($(this));
            });
        }, success: function(payload) {

            //classic modal
            if (payload.modal == 'close') {
                $('html').removeClass('modal--is-open');
                $('.m-modal.active').removeClass('active');
                customizator();
            }

            //colorbox
            if(payload.close === "modal") {
                $.fn.colorbox.close();
            }

        }
    }, {
        open: function (el) {
            var self = this;

            var content = el.children();
            if (!content.length) {
                return; // ignore empty modal
            }

            $.colorbox({
                href: el,
                inline: true,
                maxWidth: '95%',
                maxHeight: '95%',
                onOpen: function(){
                    el.fadeIn()
                },
                onComplete: function(){


                },
                onCleanup: function(){
                    el.hide();
                }
            });
        }
    });

})(jQuery);
