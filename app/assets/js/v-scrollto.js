function veneoScroll() {
  // Scroll to anchor.
  $("[data-scrollto]").click(function(event) {
    event.preventDefault();

    $("html, body").animate({
      scrollTop: $($(this).attr("href")).offset().top
    }, 250);
  });
}
