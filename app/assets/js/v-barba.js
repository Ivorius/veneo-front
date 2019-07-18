/* On page load */
// $("[data-header]").scrollupbar();
$("[data-headroom]").headroom({
    classes : {
        // when element is initialised
        initial : "headroom",
        // when scrolling up
        pinned : "header--pinned",
        // when scrolling down
        unpinned : "header--unpinned",
        // when above offset
        top : "header--top",
        // when below offset
        notTop : "header--not-top",
        // when at bottom of scoll area
        bottom : "header--bottom",
        // when not at bottom of scroll area
        notBottom : "header--not-bottom"
    },
});
veneoInit();
veneoDropdown();
veneoScroll();
veneoInteractions();
veneoToggle();

veneoFlickity();
veneoTabs();
veneoWaypoints();

// /* Barba.js */
// Barba.Pjax.init();
// Barba.Prefetch.init();
//
// var barbaClicked = false;
//
// /* On AJAX-enabled link click */
// Barba.Dispatcher.on('linkClicked', function(element, event) {
//   barbaClicked = true;
//   $.scrollupbar.destroy();
// });
//
// addEventListener('popstate', function (event) {
//   barbaClicked = false;
// });
//
// /* Event based here */
// Barba.Dispatcher.on('newPageReady', function() {
//   veneoDropdown();
//   veneoScroll();
//   veneoInteractions();
//   veneoToggle();
// });
//
// /* Direct DOM manupulation here */
// Barba.Dispatcher.on('transitionCompleted', function() {
//   $("[data-header]").scrollupbar();
//   veneoInit();
//   veneoFlickity();
//   veneoTabs();
//   veneoMap();
//   veneoWaypoints();
//
//   /* Don't change scroll position if back button pressed */
//   if (barbaClicked) {
//     window.scroll({
//       top: 0,
//       behaviour: "smooth"
//     });
//   }
// });
