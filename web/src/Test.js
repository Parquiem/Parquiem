import React from 'react';
import Map from './map/Map';
import credentials from './map/credentials';
import './css/Test.css';
import {NavLink} from 'react-router-dom'
import Users from './elements/admin/Users'

const mapURL = `https://maps.googleapis.com/maps/api/js?v=3.exp&key=${credentials.MapsKey}`;

function Test(){
    return(
    <div class="relative h-screen">
    <header class="navBar bg-white rounded-b p-1 text-center top-0 border-b-2 border-gray-400 absolute w-full z-40">
        <img src="images/logob.png" class="App-logo content-center p-0 w-10 inline-block" alt="logo"/>
        <NavLink to="/"><div class="relative float-right mr-20 "><p class="text-parkblue font-serif cursor-pointer text-lg absolute pt-1">Logout</p></div></NavLink>
    </header>
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