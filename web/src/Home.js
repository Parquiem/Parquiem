import React from 'react';
import Navigation from './Navigation'
import Login from './Login';

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
      <img src="images/page1.png" class="md:w-1/2 lg:w-1/3 content-center ml-auto mr-auto block mt-1"></img>
    </div>
    {/* <div class="page2">
        <div class="container relative float-right">
        <div class="textcontain absolute">
        <p class="text-3xl font-serif text-right">Paga desde tu celular</p>
        <p class="text-xl text-xl font-serif text-right">Con la aplicación puedes pagar el parquímetro </p>
        <p class="text-xl text-xl font-serif text-right">que estas ocupando desde cualquier lugar</p>
        </div>
        </div>
        <img src="Vector5.png"></img>
      </div> */}
    </div>
  </div>
  );
}
export default Home;
