/*global google*/
import React from 'react'
import { compose, withProps} from 'recompose'
import {markerIcon} from './data/data'
import mapStyles from './data/mapStyles'
const { withScriptjs, withGoogleMap, GoogleMap, Marker } = require("react-google-maps");


const myStyles = mapStyles;
const MapContainer = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyAuSYjXbRFN8jkYW6S1lv6ptf2rGxw92q4&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `100%` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)(props => 
  {
    return <div className={`map-container ${props.isDetailsVisible ? 'details' : 'only-map'}`}>
        <GoogleMap
          center={props.center}
          zoom={16}
          ref={props.onMapMounted()}
          defaultOptions={{ styles: myStyles, streetViewControl: false, mapTypeControl: false, fullscreenControl: false}}
        >
        	{props.list.map((item,index) => 
            {
          		return <Marker
          		    position={item.position}
                  animation= {props.isDetailsVisible ? google.maps.Animation.BOUNCE : google.maps.Animation.DROP}
                  key={item.id}
                  options={{icon: {url: markerIcon[item.code], 
                    scaledSize: {width: 48, height: 48}}}}
                  onClick={() => {
                    props.placeSelection(index)
                  }}
                  title={item.title}
          		/>
            })}
        </GoogleMap>
    </div>
  }
);

export default MapContainer