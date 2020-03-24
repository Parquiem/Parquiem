import React from 'react';
import {
    GoogleMap,
    withScriptjs,
    withGoogleMap,
    Marker
} from 'react-google-maps'

const Map= (props)=>{
    const red="red-dot"
    const green="green-dot"
    return(
        <GoogleMap 
        defaultZoom={18}
        defaultCenter={{lat: 28.639990, lng:-106.072882}}
        >
        <Marker position={{ lat: 28.640220, lng:-106.072882}} icon={`http://maps.google.com/mapfiles/ms/icons/${red}.png`}/>
        <Marker position={{ lat: 28.640280, lng:-106.072782}} icon={`http://maps.google.com/mapfiles/ms/icons/${red}.png`}/>
        <Marker position={{ lat: 28.640280, lng:-106.072582}} icon={`http://maps.google.com/mapfiles/ms/icons/${green}.png`}/>
        <Marker position={{ lat: 28.640100, lng:-106.072982}} icon={`http://maps.google.com/mapfiles/ms/icons/${green}.png`}/>
        <Marker position={{ lat: 28.640050, lng:-106.073022}} icon={`http://maps.google.com/mapfiles/ms/icons/${red}.png`}/>
        <Marker position={{ lat: 28.639982, lng:-106.072102}} icon={`http://maps.google.com/mapfiles/ms/icons/${green}.png`}/>
        </GoogleMap>
    );
};

export default withScriptjs(
    withGoogleMap(
        Map
    )
)