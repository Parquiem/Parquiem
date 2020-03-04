import React from 'react';
import {NavLink} from 'react-router-dom';

function Test2(){
    return(
<div class="relative h-screen">
    <header class="navBar bg-white rounded-b p-1 text-center top-0 border-b-2 border-gray-400 absolute w-full z-40">
        <img src="images/logob.png" class="App-logo content-center p-0 w-10 inline-block" alt="logo"/>
        <NavLink to="/"><div class="relative float-right mr-20 "><p class="text-parkblue font-serif cursor-pointer text-lg absolute pt-1">Logout</p></div></NavLink>
    </header>
    <div id="profile" class="p-20 h-full bg-gray-900">
    <div id="profilesquare" class="border-2 border-white h-full pl-10 pt-5">
    <div id="pic" class="pb-5">
        <img src="images/default-user-300x300.png" class="rounded-full w-24"/>
    </div>
    <div id="userName" class="mr-20 pb-2 relative">
        <p class="font-serif text-gray-600">Nombre de usuario</p>
        <input type="text" class="outline-none bg-gray-900 font-serif text-white border-b-2 w-full float-left" value="pslayer420" readOnly></input>
        <button class="border-none text-gray-500 absolute">Editar</button>
    </div>
    <div id="password" class="mr-20 pb-2 relative">
        <p class="font-serif text-gray-600">Contraseña</p>
        <input type="password" class="outline-none font-serif bg-gray-900 text-white border-b-2 w-full" value="contraseña123" readOnly></input>
        <button class="border-none text-gray-500 absolute">Editar</button>
    </div>
    <div id="tel" class="mr-20 pb-2 relative">
        <p class="font-serif text-gray-600">Teléfono</p>
        <input type="tel" class="outline-none font-serif text-white bg-gray-900 border-b-2 w-full" value="+6141234567" readOnly></input>
        <button class="border-none text-gray-500 absolute">Editar</button>
    </div>
    <div id="boton 1" class="pt-5 pb-5 text-center">
        <button class="outline-none border-white border-2 text-white pl-6 pr-6 pt-1 pb-1 rounded-full font-serif">Agregar vehiculo</button>
    </div>
    <div id="boton 2" class="pt-3 pb-5 text-center">
        <button class="outline-none border-white border-2 text-white pl-6 pr-6 pt-1 pb-1 rounded-full font-serif">Eliminar vehiculo</button>
    </div>
    </div>
    </div>
</div>
    )
}

export default Test2;