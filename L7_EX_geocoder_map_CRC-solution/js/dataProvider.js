var dataProvider = {
};

// sends AJAX request and forwards the returned data to the visualiser
dataProvider.requestJSON = function(requestParameters) {
	$.ajax({
		url: "http://www.mapquestapi.com/geocoding/v1/address?key=xIUXsioMg2DK2XcyA1gUVoAqkaA26IVe&outFormat=json&location=" + requestParameters,
		method: 'GET',

		success: function(response) {
			visualizer.sendDataToMap(response);
			document.getElementById("geo_location").innerHTML = response.results[0].locations[0].latLng.lat + " / " + response.results[0].locations[0].latLng.lng;
		},
		error: function(error) {
		}
	});
};
