import React from 'react'
import {NavLink} from 'react-router-dom';

function Unavigation(){
return(
<header className="navBar bg-white rounded-b p-1 text-center top-0 border-b-2 border-gray-400 absolute w-full z-40">
        <img src="http://localhost:3000/images/logob.png" className="App-logo content-center p-0 w-10 inline-block" alt="logo"/>
        <NavLink to="/"><div className="relative float-right mr-20 "><p className="text-parkblue font-serif cursor-pointer text-lg absolute pt-1">Logout</p></div></NavLink>
    </header>
)
}

export default Unavigation