//global map variable
var map;
//AMD require statement to all in the classes that we be used from the API.  More info at: https://dojotoolkit.org/documentation/tutorials/1.10/modules/
require([
    "esri/map",
    "esri/dijit/Search",
    "dojo/parser",
    "dojo/domReady!"
  ],
  //The following are the class names that you will use when each object is created in the function.  The order of the class names must be in the same order as the require statements.  More info at: https://developers.arcgis.com/javascript/jshelp/intro_firstmap_amd.html#step3
  function(
    Map,
    Search,
    parser
  ) {
    // To parse out dijits: https://dojotoolkit.org/reference-guide/1.10/dojo/parser.html
    parser.parse();
    //Create a new map. To see all the map constructors go to: https://developers.arcgis.com/javascript/jsapi/map-amd.html#map1
    map = new Map("mapDiv", {
      //set basemap to topo.  All the ArcGIS basemap options: "streets" , "satellite" , "hybrid", "topo", "gray", "dark-gray", "oceans", "national-geographic", "terrain", "osm", "terrain" and "dark-gray".  
      basemap: "topo",
      //Center the map at a Lat Long coordinate.  To find a lat long, type in "<City Name of your choice> lat long" into a browser search.
      center: [-78.9072, 35.9886],
      //Zoom level to start at, based on the basemap.
      zoom: 10
    });
//The following code adds the Search Widget.  
//For more info check out: https://developers.arcgis.com/javascript/jshelp/intro_search_widget.html
//API Reference: https://developers.arcgis.com/javascript/jsapi/search-amd.html
//More infomation on Dojo Dijits at: https://dojotoolkit.org/reference-guide/1.10/dijit/
  //Create a new Search Widget
  var s = new Search({
    //Bind the Widget to the map
      map: map
    //Connect it to the "search" div that will contain the widget
    }, "search");
  //Startup the Widget
    s.startup();

  });