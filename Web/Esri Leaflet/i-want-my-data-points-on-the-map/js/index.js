//Check out more Sample code and API reference at http://esri.github.io/esri-leaflet/examples/

//Adds the map control and sets the center point to Durham and zoom scale to 10. For more info on the Leaflet map control check out: http://leafletjs.com/reference.html#map-class
var map = L.map('map').setView([35.9886, -78.9072], 10); //35.9886° N, 78.9072° W

//Adds a basemap to the map.  To see all the available basemaps: http://esri.github.io/esri-leaflet/api-reference/layers/basemap-layer.html
L.esri.basemapLayer('Topographic').addTo(map);

//The following line of code adds a number of data points coming from a Esri rest endpoint.  The data is farmers markets in Wake County and from: http://data.ral.opendata.arcgis.com/datasets/953ff61e36bd468d8ae267437377fa9c_0.\ . The points are added as a feature layer which means you can see the points on the map and create a popup showing the information about the points.  To learn more about feature layers: http://esri.github.io/esri-leaflet/api-reference/layers/feature-layer.html

    var bikeIcon = L.icon({
      //Replace URL on the next line to point to your icon
    iconUrl: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/131702/icon_farmersMarket.png',
    iconSize: [40,30]
  });

var farmersMarkets = L.esri.featureLayer({
  //To add your own data point, replace the url on the next line..
  url: 'http://maps.wakegov.com/arcgis/rest/services/Health/FarmersMkts/MapServer/0',
    pointToLayer: function (geojson, latlng) {
      return L.marker(latlng, {
        icon: bikeIcon
      });
    },
 
}).addTo(map);

//The following code turns on popups, which display information about each data point.  Simple html is used to connect to the fields in the data.  Check out all the fields for the Farmers Market dataset at: http://maps.wakegov.com/arcgis/rest/services/Health/FarmersMkts/MapServer For more info on popups: http://leafletjs.com/reference.html#popup-options

farmersMarkets.bindPopup(function(feature) {
  //To show the fields in your data, replace the field names in the {} to match your data
  return L.Util.template('<p>{NAME}<br>{ADDRESS}<br>{MARKETDAY2}</p>', feature.properties);
});