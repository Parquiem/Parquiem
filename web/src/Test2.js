import React from 'react';
import Data from "./elements/modify_user/Data"
import Navbar from './Unavigation'

function Test2(){
    return(
<div className="relative h-screen">
    <Navbar/>
    <div id="profile" className="pt-20 p-16 h-full bg-gray-900">
    <div id="profilesquare" className="border-2 border-white h-full pl-10 pt-5">
        <Data/>
    </div>
    </div>
</div>
    )
}

export default Test2;