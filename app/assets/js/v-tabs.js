var
  tabActiveClass = "tab--is-active",
  tabOpenClass = "tab--is-open";

function veneoTabs() {
  // Open the first item on load.
  $("[data-tabs]").each(function() {
    $(this).children("li").first().children("a").addClass(tabActiveClass).next().addClass(tabOpenClass);
  });

  $("[data-tabs]").on("click", "li > a, [data-tabs-link]", function(event) {
    event.preventDefault();

    var $tabItem = $(this);

    if (!$tabItem.hasClass(tabActiveClass)) {
      var $tabList = $tabItem.closest("[data-tabs]");
      $tabList.find(".tab--is-open").removeClass(tabOpenClass);

      $tabItem.next().toggleClass(tabOpenClass);
      $tabList.find(".tab--is-active").removeClass(tabActiveClass);
      $tabItem.addClass(tabActiveClass);
    }

    Waypoint.refreshAll();

    panelRestick($sticky, document.getElementById("js-sticky-end"));
  });

  $(".js-fake-tab").on("click", function(event) {
    event.preventDefault();

    $($(this).data("target")).trigger("click");
  });
}
