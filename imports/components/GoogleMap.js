import React,{Component} from 'react'
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";


export default class Map extends Component {
/*map.setCenter(results[0].geometry.location);
var marker = new google.maps.Marker({
						map: map,
						position: results[0].geometry.location
				});
*/




	componentDidMount(){
		map = new google.maps.Map(this.refs.map,{
			center:{lat:48.873947,lng:2.295038},
			zoom: 10
		})
		var marker = new google.maps.Marker({
			position: {lat:48.873947,lng:2.295038},
			map: map,
			title: 'Hello World!'
		});
		var marker2 = new google.maps.Marker({
			position: {lat:48.875000,lng:2.506000},
			map: map,
			title: 'gregregre'
		});
		 geocoder = new google.maps.Geocoder();
		geocoder.geocode( { 'address': '3 Av. des Champs-Élysées, 75008 Paris-8E-Arrondissement, France'}, function handleResults(results, status) {
			if (status == 'OK') {
				console.log(results[0].geometry.location.lat())
				console.log(results[0].geometry.location.lng())

			} else {
				alert('Geocode was not successful for the following reason: ' + status);
			}
		});
		console.log(google.maps)
		var tours = new google.maps.LatLng(47.390273,0.688834);
		var lyon = new google.maps.LatLng(45.764859,4.835036);


		console.log("distance",google.maps.geometry.spherical.computeDistanceBetween(tours, lyon)/1000);

	}

	render() {

		const mapStyle = {
			width: 500,
			height: 400,
			border: '1px solid black'
		};

		return (
			<div ref="map" style={mapStyle}>I should be a map!</div>
		);
	}
}


