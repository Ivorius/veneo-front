(function($, undefined) {

    $.nette.ext('loadProducts', {
        success: function (payload) {
            if (payload.snippets) {
                for (var i in payload.snippets) {
                    if(i == 'snippet--productDetail') {
                        materials();
                    }
                }
            }
        }
    });

})(jQuery);