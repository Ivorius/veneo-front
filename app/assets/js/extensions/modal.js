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
                    var checkbox = el.find("input[name='switch[pojistka]']");
                    if(checkbox.length &&  checkbox.is(':checked')) {
                       self.customizatePrice(checkbox.data('price'));
                    }

                    var engrave = el.find("textarea[name='engrave[ryti_text]']");
                    if(engrave.length && engrave.val() != '') {
                        var text = engrave.val().replace(' ', '');
                        self.customizatePrice(engrave.data('price') * text.length);
                        self.customizateExpedition();
                    } else {
                        //pokud smaze ryti, smaz i expedicni dobu
                        $('#customization_expedition').remove();
                    }

                    el.hide();
                }
            });
        },
        customizatePrice: function(price) {
            if($('#customization_price').length == 0) {
                $('#price_ins').after('<span id="customization_price">+' + price + '</span> ');
            } else {
                $('#customization_price').text('+' + price);
            }

        },
        customizateExpedition: function() {
            var expedition = $('input.customizator').data('expedition');
            if($('#customization_expedition').length == 0) {
                $('<span id="customization_expedition">' + expedition + '</span>').insertAfter('#expedition').hide();
            }
            chooseExpedition();
        }
    });

})(jQuery);