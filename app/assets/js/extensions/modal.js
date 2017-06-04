(function($, undefined) {

    $.nette.ext('modal', {
        init: function () {
            var self = this;

            this.ext('snippets', true).after($.proxy(function ($el) {
                if (!$el.is('.modal')) {
                    return;
                }
                self.open($el);
            }, this));

            $('.modal[id^="snippet-"]').each(function () {
                self.open($(this));
            });
        }
    }, {
        open: function (el) {
            var content = el.children();
            if (!content.length) {
                return; // ignore empty modal
            }

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