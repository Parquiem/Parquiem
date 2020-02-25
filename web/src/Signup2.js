import React from 'react';
import Navigation from './Navigation';

function Signup2(){
    const prueba=(prueba)=>{
      console.log("prueba",prueba.location.create)
    }
    return(
<div className="relative">
  <Navigation />
  <div class="page1">
      <div class="text text-center font-serif">
      <div class="title text-parkblue-dark text-4xl mt-16">Creando Cuenta</div>
      </div>
      <form class="relative">
        <div class="absolute left-half -ml-28">
        <input type="tel" id="tel" class="outline-none mt-20 font-serif text-xl text-parkblue-dark rounded-full border-parkblue-dark border-2 placeholder-parkblue-dark pl-4 p-1" name="tel" placeholder="Teléfono"></input>
        </div>
        <div class="absolute left-half ml-12 mt-52">
      <button id="nextBtn" class="outline-none bg-parkblue-dark text-white pl-6 pr-6 pt-1 pb-1 rounded-full font-serif">SIG</button>
        </div>
        <div class="absolute left-half -ml-28 mt-52">
        <button id="prevBtn" class="outline-none bg-parkblue-dark text-white pl-6 pr-6 pt-1 pb-1 rounded-full font-serif">ATRAS</button>
        </div>
      </form>
      <img src="images/road.png" class="w-screen mt-64 sm:mt-52 md:mt-40 lg:mt-12"></img>
  </div>
  </div>
    );
}

export default Signup2;