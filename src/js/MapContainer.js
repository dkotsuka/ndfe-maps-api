import React from 'react'
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const MapComponent = withScriptjs(withGoogleMap((props) =>
  	<GoogleMap
      defaultZoom={17}
      defaultCenter={props.center}>
		{props.list.map((item) => <Marker key={item.id} position={item.position} /> )}
  	</GoogleMap>
))

function MapContainer(props) {
	const points = props.list.map((item) => item.position)
	const center = centerCalc(points)
	return (
		<MapComponent
			list = {props.list}
			center = {center}
        	googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
        	loadingElement={<div style={{ height: `100%` }} />}
        	containerElement={<div style={{ height: `100%` }} />}
        	mapElement={<div style={{ height: `100%` }} />}
        />
    )
}

function centerCalc(points) {
	const latArr = points.map((item) => item.lat)
	const lngArr = points.map((item) => item.lng)
	const lat = (Math.max(...latArr) + Math.min(...latArr))/2
	const lng = (Math.max(...lngArr) + Math.min(...lngArr))/2
	return {lat: lat, lng: lng}	
}

export default MapContainer