import React, { Component } from 'react';
import Navigation from './Navigation';
import {NavLink, Redirect} from 'react-router-dom';
import axios from 'axios';
const qs = require('querystring');
const jwtDecode = require('jwt-decode');

class Login extends Component {
  constructor(props){
    super(props)
    this.state={pass:'',email:'',login:null,token:'',id:''}
}
  handleEmail = event => {
    this.setState({ email: event.target.value });
  }
  handlePass = event => {
    this.setState({ pass: event.target.value });
  }

  handleLogin = event => {
    event.preventDefault();
 
    const data = {
      email: this.state.email,
      password: this.state.pass
    };

    const config = {
      headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
          }
      }
 
    axios.post(`http://localhost:5000/api/users/login`, qs.stringify(data),config)
      .then(res => {
        if(res.data.success===true){
          this.setState({token:res.data.token})
          let deco=jwtDecode(this.state.token)
          this.setState({id:deco.id})
          this.setState({login:true})
        }
      }).catch(error =>{alert("Los datos del usuario no son correctos")})
  }
  
  render(){
    if(this.state.login){
      if(this.state.id==='5e69065bf3ffd02c73169100'){
        return <Redirect to = {`/Admin`} />
      }else{
      return <Redirect to = {`/User/${this.state.token}`} />
    }
    }

    return (  
<div className="relative">
  <Navigation />
  <div class="page1">
      <div class="text text-center font-serif">
      <div class="title text-parkblue-dark text-4xl mt-12">Iniciar Sesión</div>
      </div>
      <form class="relative" onSubmit={this.handleLogin}>
        <div class="absolute left-half -ml-28">
        <input type="email" id="email" class="outline-none block mt-20 font-serif text-xl text-parkblue-dark rounded-full border-parkblue-dark border-2 placeholder-parkblue-dark pl-4 p-1" name="email" placeholder="Correo" onChange={this.handleEmail} required></input>
        <input type="password" id="pass" class="outline-none block mt-5 font-serif text-xl text-parkblue-dark rounded-full border-parkblue-dark border-2 placeholder-parkblue-dark pl-4 p-1" name="password" placeholder="Contraseña" onChange={this.handlePass} required></input>
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
}
export default Login;
