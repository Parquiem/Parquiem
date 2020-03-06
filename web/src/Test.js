import React from 'react';
import Map from './map/Map';
import credentials from './map/credentials';
import './css/Test.css';
import {NavLink} from 'react-router-dom'
// import Users from './elements/Users'

function Test(){
    const mapURL = `https://maps.googleapis.com/maps/api/js?v=3.exp&key=${credentials.MapsKey}`;
    let requestURL= 'http://localhost:5000/api/users/getUsers';
    var request=new XMLHttpRequest();
    request.open('GET',requestURL);
    request.responseType = 'json';
    request.send();
    request.onload=function(){
        console.log(request.response)
    }
    return(
<div class="relative h-screen">
    <header class="navBar bg-white rounded-b p-1 text-center top-0 border-b-2 border-gray-400 absolute w-full z-40">
        <img src="images/logob.png" class="App-logo content-center p-0 w-10 inline-block" alt="logo"/>
        <NavLink to="/"><div class="relative float-right mr-20 "><p class="text-parkblue font-serif cursor-pointer text-lg absolute pt-1">Logout</p></div></NavLink>
    </header>
    <div id="info" class="float-left border-r-2 border-gray-400 w-1/4 h-screen overflow-scroll inline-block pt-16 pb-5">
        
    </div>
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