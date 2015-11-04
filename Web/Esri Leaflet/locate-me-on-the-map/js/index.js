		//Check out more Sample code and API reference at http://esri.github.io/esri-leaflet/examples/

//Adds the map control and sets the center point to Durham and zoom scale to 10. For more info on the Leaflet map control check out: http://leafletjs.com/reference.html#map-class
var map = L.map('map').setView([35.9886, -78.9072], 10); //35.9886° N, 78.9072° W

//Adds a basemap to the map.  To see all the available basemaps: http://esri.github.io/esri-leaflet/api-reference/layers/basemap-layer.html
L.esri.basemapLayer('Topographic').addTo(map);

		function onLocationFound(e) {
			var radius = e.accuracy / 2;
      
//Create pop-up to display location accuracy.  Location is coming from IP location or GPS receiver in mobile device
			L.marker(e.latlng).addTo(map)
				.bindPopup("You are within " + radius + " meters from this point").openPopup();

//Create circle to graphically represent location accuracy
			L.circle(e.latlng, radius).addTo(map);
		}

//Code for handling any errors that come up
		function onLocationError(e) {
			alert(e.message);
		}

		map.on('locationfound', onLocationFound);
		map.on('locationerror', onLocationError);

//Locate point and zoom to that location with a zoom level of 16
		map.locate({setView: true, maxZoom: 16});