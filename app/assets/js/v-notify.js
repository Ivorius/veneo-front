function notify(force, static) {
  $body.toggleClass("notification--is-active", !force);

  if (force) {
    $body.addClass("notification--is-closed");
  }

  if (static) {
    $body.addClass("notification-static--is-closed");
  }

  // setTimeout(function() {
  //   $body.removeClass("notification--is-active notification--is-closed");
  // }, 5000);
}
