(function($, undefined) {

    $.nette.ext('loadProducts', {
        success: function (payload) {
            if (payload.snippets) {
                materials();
            }
        }
    });

})(jQuery);