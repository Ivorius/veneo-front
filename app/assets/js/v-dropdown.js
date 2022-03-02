function veneoDropdown() {
  $("[data-dropdown]").on("click", function(event) {
    var $parent = $(this).closest("[data-parent]");

    event.stopPropagation();
    
    $("[data-parent]").not($parent).removeClass("dropdown--is-active");
    $parent.toggleClass("dropdown--is-active");
  });

  $(document).click(function() {
    $("[data-parent]").removeClass("dropdown--is-active");
  })
}
