function veneoToggle() {
  $("[data-toggle]").on("click", function(event) {
    event.preventDefault();
    event.stopImmediatePropagation();

    var
      $thisEl = $(this);

    $html
      .toggleClass($thisEl.attr("data-toggle"));

    $thisEl
      .toggleClass("toggle--is-active");
  });

  $("[data-remove]").on("click", function(event) {
    event.preventDefault();

    var
      $thisEl = $(this);

    $html
      .removeClass($thisEl.attr("data-remove"));
  });

  var checkObj = document.querySelectorAll("[data-check]");

  for (var i = 0; i < checkObj.length; i++) {
    checkObj[i].addEventListener("click", function(event) {
      if(this.checked) {
        $('.' + this.dataset.check).addClass('activated');
      }
    });
  }




    $("[data-activate]").on("click", function(event) {
        event.preventDefault();
        var
            $thisEl = $(this);

        $('.' + $thisEl.attr("data-activate")).addClass('activated');
    });


    $("[data-deactivate]").on("click", function(event) {
        event.preventDefault();
        var
            $thisEl = $(this);

        $('.' + $thisEl.attr("data-deactivate")).removeClass('activated');
    });

}
