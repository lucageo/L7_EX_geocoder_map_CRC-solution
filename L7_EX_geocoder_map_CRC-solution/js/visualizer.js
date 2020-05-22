var visualizer = {}
	
	//prepare the data for visualisation
	visualizer.sendDataToMap = function(jsonData) {
		var geocodedPt = [];
		geocodedPt["lat"] = jsonData.results[0].locations[0].latLng.lat;
		geocodedPt["lon"] = jsonData.results[0].locations[0].latLng.lng;
		
		//build the point
		var viewportPoint = "POINT(" 
			+ geocodedPt["lon"] + " " + geocodedPt["lat"] 
			+ ")";
		
		//construct a vector layer		
		wkt = new ol.format.WKT();
		var viewportPointGeometry = wkt.readFeature(viewportPoint,{
         	dataProjection: 'EPSG:4326',
         	featureProjection: 'EPSG:3857'
      	});
		
		//add vector layer to map
		featureLayer.clear();
		featureLayer.addFeature(viewportPointGeometry);
		
		//zoom to layer extent
		map.getView().setCenter(ol.proj.transform([geocodedPt["lon"], geocodedPt["lat"]], 'EPSG:4326', 'EPSG:3857'));
		map.getView().setZoom(15);
	}