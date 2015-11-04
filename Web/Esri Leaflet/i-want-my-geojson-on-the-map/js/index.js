//Check out more Sample code and API reference at http://esri.github.io/esri-leaflet/examples/

//Adds the map control and sets the center point to Durham and zoom scale to 10. For more info on the Leaflet map control check out: http://leafletjs.com/reference.html#map-class
var map = L.map('map').setView([35.9886, -78.9072], 10); 

//Adds a basemap to the map.  To see all the available basemaps: http://esri.github.io/esri-leaflet/api-reference/layers/basemap-layer.html
L.esri.basemapLayer('NationalGeographic').addTo(map);

// load GeoJSON from an external file.  
//Replace URL below to point to your GeoJSON
$.getJSON("https://s3-us-west-2.amazonaws.com/s.cdpn.io/131702/north_carolina_bicycle_crash_data_heatmap__(1).geojson", function(data) {
  //Create bike icon to style points
    var bikeIcon = L.icon({
      //Replace URL on the next line to point to your icon
    iconUrl: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/131702/bikeCrash.png',
    iconSize: [60,50]
  });
  // add GeoJSON layer to the map once the file is loaded
   L.geoJson(data,{
 pointToLayer: function(feature,latlng){
   //Create Bike Icon Marker
  var marker = L.marker(latlng,{icon: bikeIcon});
    //To show the fields in your data, replace the field names in the {} to match your data
  marker.bindPopup(feature.properties.crash_date + '<br/>' + feature.properties.bike_sex + '<br/>' + feature.properties.crash_type);
  return marker;
}
     //add data layer containing bike crash data to the map
  }).addTo(map);
});