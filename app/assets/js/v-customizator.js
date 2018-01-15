function customizator() {

    $("[data-inputcheck]").on("click", function(event) {
        event.preventDefault();
        var
            $thisEl = $(this);

        if($($thisEl.attr("data-inputcheck")).is(':checked') === false) {
            $($thisEl.attr("data-inputcheck")).click();
        }

    });



    /* customize product*/
    $('input.customizator').on('change', function (e) {
        if ($(this).prop('checked')) {
            var a = $('a.customize-text');
            a.text(a.data('text'));
        } else {
            $('a.customize-text').text('');
            $('#customization_price').remove();
            chooseExpedition();
        }
    });



    $("select[name='switch[zapinani]']").on('change', function(e) {
        if($(this).val() == 'visaci' || $(this).val() == 'patent') {
            $('#switch label.hide').show();
        } else {
            $('#switch label.hide').hide();
        }
    }).change();

    $("input[name='stone[prirodni_kamen]']").on('change', function() {
        var helper = $(this).parents('div.m-modal__row').find('.m-modal__hint');
        if(this.checked) {
            helper.slideDown();
        } else {
            helper.slideUp();
        }
    }).change();



    var checkbox = $("input[name='switch[pojistka]']");
    if(checkbox.length &&  checkbox.is(':checked')) {
        customizatePrice(checkbox.data('price'));
    }

    var engrave = $("textarea[name='engrave[ryti_text]']");
    if(engrave.length && engrave.val() != '') {
        var text = engrave.val().replace(' ', '');
        customizatePrice(engrave.data('price') * text.length);
        customizateExpedition();
    } else {
        //pokud smaze ryti, smaz i expedicni dobu
        $('#customization_expedition').remove();
    }


}

function customizatePrice (price) {
    if($('#customization_price').length == 0) {
        $('#price_ins').after('<span id="customization_price">+' + price + '</span> ');
    } else {
        $('#customization_price').text('+' + price);
    }

}

function customizateExpedition() {
    var expedition = $('input.customizator').data('expedition');
    if($('#customization_expedition').length == 0) {
        $('<span id="customization_expedition">' + expedition + '</span>').insertAfter('#expedition').hide();
    }
    chooseExpedition();
}