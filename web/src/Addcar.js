import React from 'react';
import {NavLink} from 'react-router-dom';

function Addcar(){
    return(
<div class="relative h-screen">
    <header class="navBar bg-white rounded-b p-1 text-center top-0 border-b-2 border-gray-400 absolute w-full z-40">
        <img src="images/logob.png" class="App-logo content-center p-0 w-10 inline-block" alt="logo"/>
        <NavLink to="/"><div class="relative float-right mr-20 "><p class="text-parkblue font-serif cursor-pointer text-lg absolute pt-1">Logout</p></div></NavLink>
    </header>
    <div id="profile" class="pt-20 p-16 h-full bg-gray-900">
    <div id="profilesquare" class="border-2 border-white h-full pl-10 pt-5">
    <div class="mr-20 pb-10 relative">
    <p class="font-serif text-white text-2xl text-center">Agregar carro</p>
    </div>
    <form id="addcar" action="http://localhost:5000/api/users/car/5e45b1c3c7f18755e6fa3e65" method="POST">
    <div id="model" class="mr-20 pb-10 relative">
        <p class="font-serif text-gray-600">Modelo de carro</p>
        <input type="text" class="outline-none bg-gray-900 font-serif text-white border-b-2 w-full float-left" required></input>
    </div>
    <div id="color" class="mr-20 pb-10 relative">
        <p class="font-serif text-gray-600">Color de carro</p>
        <input type="text" class="outline-none bg-gray-900 font-serif text-white border-b-2 w-full float-left" required></input>
    </div>
    <div id="placa" class="mr-20 pb-10 relative">
        <p class="font-serif text-gray-600">Placas</p>
        <input type="text" class="outline-none bg-gray-900 font-serif text-white border-b-2 w-full float-left" pattern="[A-Z0-9]{3}[-][A-Z0-9]{3}[-][A-Z0-9]{1}" required title="El formato no es el mismo e.g. A0A-A0A-0"></input>
    </div>
    <div id="boton 1" class="pt-10 pb-5 text-center">
        <button class="outline-none border-white border-2 text-white pl-6 pr-6 pt-1 pb-1 rounded-full font-serif">Agregar vehiculo</button>
    </div>
    </form>
    <div id="boton 2" class="text-center">
        <NavLink to="/Test2"><button class="outline-none border-white border-2 text-white pl-6 pr-6 pt-1 pb-1 rounded-full font-serif">Atrás</button></NavLink>
    </div>
    </div>
    </div>
</div>
    )
}

export default Addcar;