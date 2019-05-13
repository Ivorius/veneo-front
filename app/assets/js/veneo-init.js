$(document).ready(function () {

    $.nette.init();

    $(".inlinebox").colorbox({inline: true});
    $(".colorbox").colorbox();
    $(".jqhidde").hide();


    $("#frm-filterForm select").on("change", function () {
        $(this).parents("form").find('#frm-filterForm-submit').click();
    });

    /* FORUM */
    //textcaptcha
    $('input[data-antitext]').each(function () {
        $(this).val($(this).data('antitext'));
    });
    // reply
    $('a.reply').click(function (e) {
        var reply = $(this).data('reply');
        $('form#kom_form input[name=re]').val(reply);
        e.preventDefault();
    });


    $('a.toggle').click(function (e) {
        e.preventDefault();
        var co = $(this).attr('href');
        $(co).toggle();
    });


    //ajax na úvodce
    // $('#hpCategory li a').click(function (e) {
    //     var $link = jQuery(this);
    //     jQuery.nette.ajax({
    //         url: $link.attr('data-catproducts-url')
    //     });
    //     e.preventDefault();
    // });


    $(".topSelector").change(function () {
        location.href = jQuery(this).find(':selected').data('url');
    })


    veneoProduct();
    veneoSelectSubmit();

});
