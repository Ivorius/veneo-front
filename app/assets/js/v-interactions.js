var
  toggleActiveClass = "toggle--is-active",
  matActiveClass = "material--is-active",
  varActiveClass = "variant--is-active",
  catActiveClass = "category--is-active";

function veneoInteractions() {
  var
    $catLink = $("[data-cat-link]"),
    $pagesToggle = $("[data-pages]"),
    $searchToggle = $("[data-search]"),
    $toggle = $("[data-toggle]");

  $catLink.on("click", function(event) {
    $catLink.removeClass(catActiveClass);
    $(this).addClass(catActiveClass);

    return false;
  })

  $("[data-mats-item]").on("click", function(event) {
    event.preventDefault();

    $(this).siblings().removeClass(matActiveClass);
    $(this).addClass(matActiveClass);
  })

  $("[data-vars-item]").on("click", function(event) {
    event.preventDefault();

    $(this).siblings().removeClass(varActiveClass);
    $(this).addClass(varActiveClass);
  })

  $("[data-close]").on("click", function(event) {
    $html.removeClass("search--is-active pages--is-active");
    $toggle.removeClass(toggleActiveClass);
  })

  $pagesToggle.on("click", function(event) {
    $html.removeClass("search--is-active");
    $searchToggle.removeClass(toggleActiveClass);
  })

  $searchToggle.on("click", function(event) {
    if(!$(this).hasClass("toggle--is-active")) {
      setTimeout(function() {
        $(".o-spotlight__input").focus();
      }, 250);
    }

    $html.removeClass("pages--is-active");
    $pagesToggle.removeClass(toggleActiveClass);
  })
}
