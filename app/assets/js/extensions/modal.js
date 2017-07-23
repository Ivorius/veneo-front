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
                maxWidth: '95%',
                maxHeight: '95%',
                onOpen: function(){
                    el.fadeIn()
                },
                onComplete: function(){

                  el.find("select[name='switch[zapinani]']").on('change', function(e) {
                    if($(this).val() == 'visaci' || $(this).val() == 'patent') {
                        el.find('.hidden_checkbox').show();
                    } else {
                        el.find('.hidden_checkbox').hide();
                    }
                  }).change();

                  el.find("input[name='stone[prirodni_kamen]']").on('change', function() {
                      var helper = $(this).parents('div.form-check').next('span.help-block');
                     if(this.checked) {
                        helper.show();
                     } else {
                         helper.hide();
                     }
                  }).change();

                },
                onCleanup: function(){
                    el.hide();
                }
            });
        }
    });

})(jQuery);