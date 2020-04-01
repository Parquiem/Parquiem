import React from 'react';
import Navigation from './Navigation'
import './css/home.css';
import {NavLink} from 'react-router-dom';
function Home() {

  return (
<div className="relative">
  <Navigation />
  <div class="body">
    <div class="page1">
      <div class="text text-center font-serif">
      <div class="title text-6xl mt-1" >Parquiem</div>
      <div class="description text-3xl">La app que te guía</div>
      </div>
      <img src="images/page1.png" class="md:w-1/2 lg:w-1/3 content-center ml-auto mr-auto block mt-1" alt="imagen parquiem"></img>
    </div>
    <div class="page2">
      <img src="images/data.png" class="w-screen h-auto" alt="data"></img>
    </div>
    <div class="page3 bg-cover w-full text-center" id="rectangulo">
      <p class="align-center font-serif text-white text-3xl pt-24">Crea tu cuenta</p>
      <p class="align-center font-serif text-white text-xl pt-5 pb-20">Se parte del futuro de los parquimetros</p>
      <NavLink to="/Signup"><button class="outline-none border-white border-2 text-2xl text-white bg-transparent pl-10 pr-10 pt-2 pb-2 rounded-full font-serif">Inscribete</button></NavLink>
      </div>
      <div class="bg-gray-900 w-full flex justify-center items-center" id="footer">
        <p class="font-serif font-hairline text-gray-600 text-sm text-center align-middle">Designed by Parquiem Team in Chihuahua</p>
      </div>
    </div>
    </div>
  );
}
export default Home;
