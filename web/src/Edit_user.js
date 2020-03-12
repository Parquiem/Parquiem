import React from 'react';
import Data from "./elements/modify_user/Data"
import Navbar from './Unavigation'

function Edit_user(){
    return(
<div className="relative h-screen">
        <Navbar/>
    <div id="profile" className="pt-20 p-16 h-full bg-gray-900">
    <div id="profilesquare" className="border-2 border-white h-full pl-10 pt-5">
    <div id="pic" className="pb-5">
        <img src="http://localhost:3000/images/default-user-300x300.png" className="rounded-full w-24" alt="imagen usuario"/>
    </div>
        <Data/>
    </div>
    </div>
</div>
    )
}

export default Edit_user;