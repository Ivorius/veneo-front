function customizator() {


    $("[data-inputcheck]").on("click", function(event) {
        event.preventDefault();
        var el = $(this).attr("data-inputcheck");

        if($(el).is(':checked') === false) {
            $(el).click();
        }
    });



    /* customize product*/
    $('input.customizator').on('change', function (e) {
        chooseExpedition();
        customizatePrice();
        if ($(this).prop('checked') && $("[data-customized]").length != 0) {
            var a = $('a.customize-text');
            a.text(a.data('text'));
        } else {
            $('a.customize-text').text('');

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

}

function customizatePrice() {
    if ($('input.customizator').is(':checked')) {
        $('#customizationPrice').text($(this).data('price'));
    } else {
        $('#customizationPrice').text('');
    }
}
