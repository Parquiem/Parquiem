import React from 'react';
import {NavLink} from 'react-router-dom';
import Data from "./elements/modify_user/Data"

function Edit_user(){
    return(
<div className="relative h-screen">
    <header className="navBar bg-white rounded-b p-1 text-center top-0 border-b-2 border-gray-400 absolute w-full z-40">
        <img src="images/logob.png" className="App-logo content-center p-0 w-10 inline-block" alt="logo"/>
        <NavLink to="/"><div className="relative float-right mr-20 "><p className="text-parkblue font-serif cursor-pointer text-lg absolute pt-1">Logout</p></div></NavLink>
    </header>
    <div id="profile" className="pt-20 p-16 h-full bg-gray-900">
    <div id="profilesquare" className="border-2 border-white h-full pl-10 pt-5">
    <div id="pic" className="pb-5">
        <img src="images/default-user-300x300.png" className="rounded-full w-24" alt="imagen usuario"/>
    </div>
        <Data/>
    <div id="boton 2" class="text-center">
        <NavLink to="/Test2"><button class="outline-none border-white border-2 text-white pl-6 pr-6 pt-1 pb-1 rounded-full font-serif">Atrás</button></NavLink>
    </div>
    </div>
    </div>
</div>
    )
}

export default Edit_user;