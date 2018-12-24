import React, {Component} from 'react';
import {Map, Marker,InfoWindow, GoogleApiWrapper} from 'google-maps-react';

export class MapContainer extends Component {
	state = {
	    showingInfoWindow: false,
	    activeMarker: {},
	    selectedPlace: {},
	  };
	render(){
		const markers = this.props.visited;
		const bounds = {nw: null, se: null};

		markers.forEach((item) => {
			if (!bounds.nw && !bounds.se) {
				bounds.nw = {lat: item.position.lat, lng: item.position.lng};
				bounds.se = {lat: item.position.lat, lng: item.position.lng};
			} else {
				if (item.position.lat > bounds.nw.lat) {
					bounds.nw.lat = item.position.lat;
				}
				if (item.position.lat < bounds.se.lat) {
					bounds.se.lat = item.position.lat;
				}
				if (item.position.lng > bounds.se.lng) {
					bounds.se.lng = item.position.lng;
				}
				if (item.position.lng < bounds.nw.lng) {
					bounds.nw.lng = item.position.lng;
				}
			}
		});

		const mapCenter = {	lat: (bounds.nw.lat + bounds.se.lat) / 2,
							lng: (bounds.se.lng + bounds.nw.lng) / 2};


		return (
			<Map google={this.props.google}
				className={'map'}
				zoom={17}
				initialCenter={mapCenter}
	          	onClick={this.onMapClicked}>

	          	{markers.map((item, index) => (
	          		<Marker key={'id' + index}
	          			position = {item.position}
			            name={item.name}
			            title={item.title}
			            onClick={this.onMarkerClick}
		            />
	          	))}

	            <InfoWindow
		          	marker={this.state.activeMarker}
		          	visible={this.state.showingInfoWindow}>
		            	<div>
		              		<h1>{this.state.selectedPlace.name}</h1>
		            	</div>
		        </InfoWindow>
          	</Map>
		)
	}
	onMarkerClick = (props, marker, e) =>
    this.setState({
		selectedPlace: props,
		activeMarker: marker,
		showingInfoWindow: true
    });
 
	onMapClicked = (props) => {
		if (this.state.showingInfoWindow) {
			this.setState({
				showingInfoWindow: false,
				activeMarker: null
			})
		}
	};
}

const LoadingContainer = (props) => (
  <div>Fancy loading container!</div>
)
 
export default GoogleApiWrapper({
  apiKey: ("AIzaSyCWCOLpPcQVkWfmnpp5rpE21RIdRHa5WNM"),
  LoadingContainer: LoadingContainer
})(MapContainer)