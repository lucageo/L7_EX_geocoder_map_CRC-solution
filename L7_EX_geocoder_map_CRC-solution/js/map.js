var OpenLayers = ol;
var featureLayer;
var map;

// initialises the Open Layers Map
function init() {  
  
  map = new OpenLayers.Map({
	  target: "map",
	  view: new ol.View({
	      center: ol.proj.transform([13.03,47.8], 'EPSG:4326', 'EPSG:3857'),
		  zoom: 3
	  })
  });
  
  var mapnik = new ol.layer.Tile({source: new ol.source.OSM()});
  map.addLayer(mapnik);
  
  featureLayer = new ol.source.Vector({});
  featuresVector = new OpenLayers.layer.Vector({
	  source: featureLayer
  });
  map.addLayer(featuresVector);
}
