(function($, undefined) {

    $.nette.ext('ajaxContent', {
        success: function (payload) {
            if (payload.snippets) {
                for (var i in payload.snippets) {
                    if(i == 'snippet--ajaxContent') {
                        recall();
                    }
                }
            }
        }
    });

})(jQuery);