import React from 'react';
import {NavLink,useParams} from 'react-router-dom';
import Cars from './elements/show_car/Cars';
import './css/Deletecar.css'
import Navbar from './Unavigation'

function Deletecar(){
    const id = useParams();
    return(
<div className="relative h-screen">
    <Navbar/>
    <div id="profile" className="pt-20 p-16 h-full bg-gray-900">
    <div id="profilesquare" className="h-full pl-5">
        <Cars/>
        <div id="boton 2" class="text-center pt-5">
        <NavLink to={`/User/${id.id}`}><button class="outline-none border-white border-2 text-white pl-6 pr-6 pt-1 pb-1 rounded-full font-serif">Atrás</button></NavLink>
        </div>
    </div>
    </div>
</div>
    )
}

export default Deletecar;