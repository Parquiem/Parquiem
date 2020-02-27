import React from 'react';
import Signup1 from './signup-steps/Signup1';
import Signup2 from './signup-steps/Signup2';
import Signup3 from './signup-steps/Signup3';
import Navigation from './Navigation';

function Signup (){

    return(
        <div>
            <Navigation/>
            <div class="text text-center font-serif">
            <div class="title text-parkblue-dark text-4xl mt-16">Creando Cuenta</div>
            </div>
            <form name="Form" class="relative" action="http://localhost:5050/api/users/register" method="post">
            <div class="absolute left-half -ml-28">
            <Signup1/> 
            <Signup2/> 
            <Signup3/> 
            <div class="absolute left-half -ml-6 mt-8">
            <button id="nextBtn" class="outline-none bg-parkblue-dark text-white pl-6 pr-6 pt-1 pb-1 rounded-full font-serif">Crear Cuenta</button>
            </div>
            </div>
            </form>
            <img src="images/road.png" class="w-screen mt-64 md:mt-52 lg:mt-40" alt="fondo"></img>
        </div>
    );
}

export default Signup;