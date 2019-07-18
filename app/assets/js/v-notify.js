function notify(force, static, cookie) {
  $body.toggleClass("notification--is-active", !force);

  if (force) {
    $body.addClass("notification--is-closed");
  }

  if (static) {
    $body.addClass("notification-static--is-closed");
  }

  if (cookie) {
    Cookies.set("notification-" + cookie, true);
  }

  // setTimeout(function() {
  //   $body.removeClass("notification--is-active notification--is-closed");
  // }, 5000);
}

function notifyCookie() {
  $("[data-notification]").each(function () {
    var $this = $(this);

    if (!Cookies.get("notification-" + $this.data("notification"))) {
      $this.show();
    }
  });
}
