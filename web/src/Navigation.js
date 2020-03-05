import React from 'react';
import { NavLink } from 'react-router-dom';

function Navigation() {

  let login;
    if(window.location.href==='http://localhost:3000/'){
     login = <NavLink to="/Login"><div class="relative float-right mr-20 "><p class="text-white font-serif cursor-pointer text-lg absolute pt-1">Login</p></div></NavLink>;
    }else{
       login= '';
    }

  return (
<div className="relative">
  <header class="navBar bg-parkblue rounded-b p-1 text-center top-0">
    <NavLink to="/"><img src="images/logow.png" class="App-logo content-center p-0 w-10 inline-block cursor-pointer" alt="logo"/></NavLink>
    {login}
    <NavLink to="/Test"><div class="relative float-left ml-20 "><p class="text-white font-serif cursor-pointer text-lg absolute pt-1">Test</p></div></NavLink>
    <NavLink to="/Test2"><div class="relative float-left ml-40 "><p class="text-white font-serif cursor-pointer text-lg absolute pt-1">Test2</p></div></NavLink>
  </header>
  </div>
  );
}
export default Navigation;
