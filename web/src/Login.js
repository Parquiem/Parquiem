import React from 'react';
import Navigation from './Navigation';
import {NavLink} from 'react-router-dom';

function Login() {
  return (
    
<div className="relative">
  <Navigation />
  <div class="page1">
      <div class="text text-center font-serif">
      <div class="title text-parkblue-dark text-4xl mt-12">Iniciar Sesión</div>
      </div>
      <form class="relative" action="http://localhost:5000/api/users/login" method="post">
        <div class="absolute left-half -ml-28">
        <input type="email" id="email" class="outline-none mt-20 font-serif text-xl text-parkblue-dark rounded-full border-parkblue-dark border-2 placeholder-parkblue-dark pl-4 p-1" name="email" placeholder="Correo" required></input>
        <input type="password" id="pass" class="outline-none block mt-5 font-serif text-xl text-parkblue-dark rounded-full border-parkblue-dark border-2 placeholder-parkblue-dark pl-4 p-1" name="password" placeholder="Contraseña" required></input>
        </div>
        <div class="absolute left-half ml-8 mt-52">
        <button id="login" class="outline-none bg-parkblue-dark text-white pl-6 pr-6 pt-1 pb-1 rounded-full font-serif">Login</button>
        </div>
      </form>
      <NavLink to="/Signup"><div class="absolute left-half -ml-28 mt-52">
        <button id="crear_cuenta" class="outline-none bg-parkblue-dark text-white pl-6 pr-6 pt-1 pb-1 rounded-full font-serif">Crear cuenta</button>
        </div></NavLink>
      <img src="images/city.png" class="w-screen pl-5 pr-5 mt-64 sm:mt-52 md:mt-40 lg:mt-32" alt="imagen_fondo"></img>
  </div>
  </div>
  );
}
export default Login;
