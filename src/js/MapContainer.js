/*global google*/
import React from 'react'
import { compose, withProps, withHandlers} from 'recompose'
import {markerIcon} from './data'
import mapStyles from './mapStyles'
const { withScriptjs, withGoogleMap, GoogleMap, Marker } = require("react-google-maps");


const myStyles = mapStyles;
const MapContainer = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyAuSYjXbRFN8jkYW6S1lv6ptf2rGxw92q4&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `100%` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withHandlers(() => {
    const refs = {
      map: undefined,
    }
    return {
      onMapMounted: () => ref => {
        refs.map = ref
        
        if (window.innerWidth >= 769){
        	refs.map.panBy(-160,0)
        }
      }
    }
  }),
  withScriptjs,
  withGoogleMap
)(props => 
  {
    return <GoogleMap
      defaultCenter={props.center}
      zoom={16}
      ref={props.onMapMounted}
      defaultOptions={{ styles: myStyles, streetViewControl: false }}
    >
    	{props.list.map((item,index) => 
        {
      		return <Marker
      		    position={item.position}
              animation= {google.maps.Animation.DROP}
              key={item.id}
              options={{icon: {url: markerIcon[item.code], 
                scaledSize: {width: 48, height: 48}}}}
              onClick={() => props.onMarkerClick(index)}
              title={item.title}
      		/>
        })}
    </GoogleMap>
  }
);

class MapComponent extends React.Component{
  render(){
    return <MapContainer 
            list={this.props.list} 
            center={this.props.center}
            onMarkerClick={this.props.onMarkerClick}/>
  }
}

export default MapComponent