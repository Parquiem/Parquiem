import React from 'react';
import {
    GoogleMap,
    withScriptjs,
    withGoogleMap,
    Marker
} from 'react-google-maps'

const Map= (props)=>{
    return(
        <GoogleMap 
        defaultZoom={18}
        defaultCenter={{lat: 28.639990, lng:-106.072882}}
        >
        <Marker position={{ lat: 28.639990, lng:-106.072882}}/>
        <Marker position={{ lat: 28.639167, lng:-106.078228}}/>
        </GoogleMap>
    );
};

export default withScriptjs(
    withGoogleMap(
        Map
    )
)