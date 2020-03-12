import React from 'react';
import Map from './map/Map';
import credentials from './map/credentials';
import './css/Test.css';
import Users from './elements/admin/Users'
import Navbar from './Unavigation'

const mapURL = `https://maps.googleapis.com/maps/api/js?v=3.exp&key=${credentials.MapsKey}`;

function Test(){
    return(
    <div class="relative h-screen">
    <Navbar/>
    <Users/>
    <div>
        <Map
        googleMapURL={mapURL}
        containerElement={<div class="h-screen z-0"/>}
        mapElement={<div class="h-full"/>}
        loadingElement={<p class="text-gray-600">Cargando...</p>}
        />
    </div>
</div>
        )
    }


export default Test;