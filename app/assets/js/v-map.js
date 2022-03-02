// Google Maps.
function veneoMap() {
  var mapIframe = document.getElementById("js-map");

  if (mapIframe !== null) {
    var mapOptions = {
      center: {lat: 49.4722996, lng: 17.1002256},
      zoom: 15,
      scrollwheel: false,
      draggable: currentDevice == "desktop"
    }

    var 
      map = new google.maps.Map(mapIframe, mapOptions),
      infoWindow = new google.maps.InfoWindow({
        content: "<div class='o-map__info'><h1>veneo</h1><p>Plumlovská 830/49<br>796 01, Prostějov</p></div>"
      }),
      mapMarker = new google.maps.Marker({
        position: mapOptions.center,
        map: map,
        animation: google.maps.Animation.DROP
      });

    google.maps.event.addListener(mapMarker, "click", function() {
      infoWindow.open(map, mapMarker);
    });
  }

}
