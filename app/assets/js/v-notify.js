function notify(force) {
  $body.toggleClass("notification--is-active", !force);

  if (force) {
    $body.addClass("notification--is-closed");
  }

  // setTimeout(function() {
  //   $body.removeClass("notification--is-active notification--is-closed");
  // }, 5000);
}
