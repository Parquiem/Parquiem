import React,{Component} from 'react';
import {confirm} from './signup-steps/confirm'
import Navigation from './Navigation';
import axios from 'axios';
const qs = require('querystring')

class Signup extends Component{
    constructor(props){
        super(props)
        this.state={username:'',email:'',tel:'',pass:'',pass2:''}
    }
    onChangeUser(value){
        this.setState({
             username: value
        });
    }
    onChangeEmail(value){
        this.setState({
             email: value
        });
    }

    onChangeTel(value){
        this.setState({
             tel: value
        });
    }
    onChangePass(value){
        confirm();
        this.setState({
             pass: value
        });
    }
    onChangePass2(value){
        this.setState({
             pass2: value
        });
    }

    sign = event => {
        event.preventDefault();
            const usuario = {
                name: this.state.username,
                phoneNumber:this.state.tel,
                password:this.state.pass,
                password2:this.state.pass2,
                email:this.state.email,
                };
            
            axios.post(`http://localhost:5000/api/users/register`, qs.stringify( usuario ))
              .then(res => {
                window.location.href=(`/User/${res.data.token}`)
              })
          }  
render(){
    return(
        <div>
            <Navigation/>
            <div class="text text-center font-serif">
            <div class="title text-parkblue-dark text-4xl mt-16">Creando Cuenta</div>
            </div>
            <form name="Form" class="relative" onSubmit={this.sign}>
            <div class="absolute left-half -ml-28">
            <input type="text" id="user" class="outline-none mt-12 font-serif text-xl text-parkblue-dark rounded-full border-parkblue-dark border-2 placeholder-parkblue-dark pl-4 p-1" name="name" placeholder="Usuario" onChange={e => this.onChangeUser(e.target.value)} required>
            </input>
            <input type="email" class="outline-none block mt-5 font-serif text-xl text-parkblue-dark rounded-full border-parkblue-dark border-2 placeholder-parkblue-dark pl-4 p-1" name="email" placeholder="Email" onChange={e => this.onChangeEmail(e.target.value)} required>
            </input>
            <input type="tel" id="tel" class="block outline-none mt-5 font-serif text-xl text-parkblue-dark rounded-full border-parkblue-dark border-2 placeholder-parkblue-dark pl-4 p-1" name="phoneNumber" placeholder="Teléfono" pattern="[+][0-9]{10}" required onChange={e => this.onChangeTel(e.target.value)} title="El formato no es el mismo e.g. +1234567890"> 
            </input>
            <input type="password" id="pass" class="block outline-none mt-5 font-serif text-xl text-parkblue-dark rounded-full border-parkblue-dark border-2 placeholder-parkblue-dark pl-4 p-1" name="password" placeholder="Contraseña" pattern=".{8,}" onChange={e => this.onChangePass(e.target.value)} required>  
            </input>
            <input type="password" id="con_pass" class="block outline-none mt-5 font-serif text-xl text-parkblue-dark rounded-full border-parkblue-dark border-2 placeholder-parkblue-dark pl-4 p-1" name="password2" placeholder="Confirmar Contraseña" onKeyUp={confirm} onChange={e => this.onChangePass2(e.target.value)} required>
            </input>
            <div class="absolute left-half -ml-6 mt-8">
            <button id="nextBtn" class="outline-none bg-parkblue-dark text-white pl-6 pr-6 pt-1 pb-1 rounded-full font-serif">Crear Cuenta</button>
            </div>
            </div>
            </form>
            <img src="images/road.png" class="w-screen mt-64 md:mt-52 lg:mt-40" alt="fondo"></img>
        </div>
    );
}
}

export default Signup;