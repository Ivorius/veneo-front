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

        }
    }, {
        bind: function (el) {
            //ajax form in modal colorbox
            el.find('form.modal-ajax').on('submit', function (e) {
                $(this).netteAjax(e, {}).done(function () {
                    $.fn.colorbox.close();
                });
            });
        },
        open: function (el) {
            var self = this;

            var content = el.children();
            if (!content.length) {
                return; // ignore empty modal
            }

            this.bind(el);

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