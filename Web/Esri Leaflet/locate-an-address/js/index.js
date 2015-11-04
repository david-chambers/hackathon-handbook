//Check out more Sample code and API reference at http://esri.github.io/esri-leaflet/examples/

//Adds the map control and sets the center point to Durham and zoom scale to 10. For more info on the Leaflet map control check out: http://leafletjs.com/reference.html#map-class
var map = L.map('map').setView([35.9886, -78.9072], 10); //35.9886° N, 78.9072° W

//Adds a basemap to the map.  To see all the available basemaps: http://esri.github.io/esri-leaflet/api-reference/layers/basemap-layer.html
L.esri.basemapLayer('Topographic').addTo(map);

var searchControl = L.esri.Geocoding.Controls.geosearch().addTo(map);

  var results = L.layerGroup().addTo(map);

  searchControl.on('results', function(data){
    results.clearLayers();
    for (var i = data.results.length - 1; i >= 0; i--) {
      results.addLayer(L.marker(data.results[i].latlng));
    }
  });