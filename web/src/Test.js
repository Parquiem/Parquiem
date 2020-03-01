import React from 'react';
import Map from './map/Map';
import credentials from './map/credentials';
import './css/Test.css';

function Test(){
    const mapURL = `https://maps.googleapis.com/maps/api/js?v=3.exp&key=${credentials.MapsKey}`
    return(
<div class="relative h-screen">
    <header class="navBar bg-white rounded-b p-1 text-center top-0 border-b-2 border-gray-400">
        <img src="images/logob.png" class="App-logo content-center p-0 w-10 inline-block" alt="logo"/>
    </header>
    <div id="info" class="float-left border-r-2 border-gray-400 w-1/4 h-screen overflow-scroll inline-block">
        <p>A</p>
        <p>A</p>
        <p>A</p>
        <p>A</p>
        <p>A</p>
        <p>A</p>
        <p>A</p>
        <p>A</p>
        <p>A</p>
        <p>A</p>
        <p>A</p>
        <p>A</p>
        <p>A</p>
        <p>A</p>
        <p>A</p>
        <p>A</p>
        <p>A</p>
        <p>A</p>
        <p>A</p>
        <p>A</p>
        <p>A</p>
        <p>A</p>
        <p>A</p>
        <p>A</p>
        <p>A</p>
        <p>A</p>
        <p>A</p>
        <p>A</p>
        <p>A</p>
        <p>A</p>
        <p>A</p>
        <p>A</p>
        <p>A</p>
        <p>A</p>
        <p>A</p>
        <p>A</p>
        <p>A</p>
        <p>A</p>
    </div>
    <div>
        <Map
        googleMapURL={mapURL}
        containerElement={<div class="h-screen"/>}
        mapElement={<div class="h-full"/>}
        loadingElement={<p class="text-gray-600">Cargando...</p>}
        />
    </div>
</div>
    )
    //Api key=AIzaSyBnO4w4NDiacEpUQnoBOFspClvHaS7G6_0
}

export default Test;