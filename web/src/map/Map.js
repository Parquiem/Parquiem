import React from 'react';
import {
    GoogleMap,
    withScriptjs,
    withGoogleMap
} from 'react-google-maps'

const Map= (props)=>{
    return(
        <GoogleMap 
        defaultZoom={18}
        defaultCenter={{lat: 28.639990, lng:-106.072882}}
        />

    );
};

export default withScriptjs(
    withGoogleMap(
        Map
    )
)