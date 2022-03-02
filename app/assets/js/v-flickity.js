function veneoFlickity() {
  $("[data-slider]").each(function(index, element) {
    $(element).imagesLoaded().done(function(instance) {
      var $sliderInstance = $(instance.elements).flickity({
        contain: true,
        draggable: true,
        prevNextButtons: false,
        pageDots: false
      })

      $sliderInstance.on("staticClick.flickity", function(event, pointer, cellElement, cellIndex) {
        if (typeof cellIndex == "number") {
          $sliderInstance.flickity("selectCell", cellIndex)
        }
      })
    })
  })

  var $gallery, galleryObj, $galleryPager;

  $("[data-gallery]").imagesLoaded().done(function(instance) {
    $gallery = $(instance.elements).flickity({
      draggable: true,
      prevNextButtons: false,
      pageDots: false
    });

    Waypoint.refreshAll();

    galleryObj = $gallery.data("flickity");

    $gallery.on("select.flickity", function() {
      $galleryPager.flickity("select", galleryObj.selectedIndex);
    });
  })

  $("[data-pager]").imagesLoaded().done(function(instance) {
    $galleryPager = $(instance.elements).flickity({
      contain: true,
      draggable: true,
      prevNextButtons: false,
      pageDots: false
    });

    Waypoint.refreshAll();
    
    $galleryPager.on("click", "[data-pager-item]", function(event) {
      var index = $(event.currentTarget).index();

      $gallery.flickity("select", index);
    });
  })
}
