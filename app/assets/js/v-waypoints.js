var
  unstuckClass = "panel--is-unstuck";

function panelRestick($element, container) {
  if ($element.hasClass(unstuckClass)) {
    $element.css({top: container.offsetTop});
  }
}

var $sticky;

function veneoWaypoints() {
  // Sticky Add to Cart panel
  $sticky = $("[data-sticky]");

  if ($sticky.length > 0 && currentDevice == "desktop") {
    var
      stickyEnd = new Waypoint({
        element: document.getElementById("js-sticky-end"),
        handler: function(direction) {
          $sticky.toggleClass(unstuckClass, direction == "down");

          if (direction == "down") {
            $sticky.css({top: this.element.offsetTop});
          } else {
            $sticky.removeAttr("style");
          }
        },
        offset: "bottom-in-view"
      })
  }

  var headerObj = document.getElementById("js-header");

  // Header background-color waypoint
  // var headerFade = $body.waypoint({
  //   handler: function(direction) {
  //     $("[data-header]").toggleClass("header--not-top", direction == "down");
  //   },
  //   offset: function() {
  //     // Triger once scrolled past its height
  //     return -headerObj.clientHeight
  //   }
  // })
}
