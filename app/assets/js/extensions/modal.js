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
        }
    }, {
        bind: function (el) {
            //ajax form in modal
            el.find('form.modal-ajax').on('submit', function (e) {
                $(this).netteAjax(e, {}).done(function () {
                    $.fn.colorbox.close();
                });
            });
        },
        open: function (el) {
            var content = el.children();
            if (!content.length) {
                return; // ignore empty modal
            }

            this.bind(el);

            $.colorbox({
                href: el,
                inline: true,
                onOpen: function(){
                    el.fadeIn()
                },
                onCleanup: function(){
                    el.hide();
                }
            });
        }
    });

})(jQuery);