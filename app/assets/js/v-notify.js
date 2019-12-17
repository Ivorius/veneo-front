function notify(force, static, cookie, expires) {
  $body.toggleClass("notification--is-active", !force);

  if (force) {
    $body.addClass("notification--is-closed");
  }

  if (static) {
    $body.addClass("notification-static--is-closed");
  }

  if (cookie) {
    Cookies.set("notification-" + cookie, true, { expires: expires });
  }

  // setTimeout(function() {
  //   $body.removeClass("notification--is-active notification--is-closed");
  // }, 5000);
}

function notifyCookie() {
  $("[data-notification]").each(function () {
    var $this = $(this);
    var cookie = $this.data("notification");

    if (!Cookies.get("notification-" + cookie)) {
      var href = $this.find(".o-notification__content");
      var expires = $this.data("expire");

      $.colorbox({
        inline: true,
        href: href,
        opacity: 0.8,
        width: "400px",
        maxWidth: "90%"
      });

      Cookies.set("notification-" + cookie, true, { expires: expires });
    }
  });
}


