(function ($, undefined) {

    $.nette.ext('gtm', {
        success: function (payload) {
            if (payload.gtm) {
                dataLayer.push(payload.gtm);
            }
            if(payload.gtmEvent) {
                dataLayer.push(payload.gtmEvent);
            }
        }
    });

})(jQuery);
