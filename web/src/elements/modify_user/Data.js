import React, { Component } from 'react';   
import {confirm} from '../../signup-steps/confirm';
import {withRouter} from 'react-router'
import {NavLink} from 'react-router-dom'
import axios from 'axios';
const qs = require('querystring')

class Data extends Component{
    constructor(props){
        super(props)
        this.state={name:'',tel:'',pass:'',pass2:'',id:'',email:''}
    }
    
    componentDidMount(){
    const id = this.props.match.params.id;
    fetch(`http://localhost:5000/api/users/getUser/${id}`)
    .then((response)=>response.json())
    .then((data)=>{        
        this.setState({name: data.name})
        this.setState({tel: data.phoneNumber})
        this.setState({pass: data.password})
        this.setState({id: data._id})
        this.setState({email: data.email})
        })

    }

    onChangeName(value){
        this.setState({
             name: value
        });
        
    }
    onChangeTel(value){
        this.setState({
             tel: value
        });
    }

    onChangePass(value){
        this.setState({
             pass: value
        });
    }
    onChangePass2(value){
        this.setState({
             pass2: value
        });
    }

    changeProfile = event => {
        event.preventDefault();
        const usuario = {
            name: this.state.name,
            phoneNumber:this.state.tel,
            password:this.state.pass,
            password2:this.state.pass2,
            email:this.state.email,
            };

        const config = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
                }
            }

        axios.put(`http://localhost:5000/api/users/update/${this.state.id}`, qs.stringify( usuario ),config)
          .then(res => {
            window.location.href=(`/User/${this.state.id}`)
          })
      }     

    render(){
        if(window.location.href===`http://localhost:3000/User/${this.state.id}`){
            return(
                <div className="form_data">
                <div id="userName" class="mr-20 pb-2 relative">
                <p class="font-serif text-gray-600">Nombre de usuario</p>
                   <input type="text" class="outline-none bg-gray-900 font-serif text-white border-b-2 w-full float-left" value={this.state.name} readOnly></input>
                </div>
                <div id="tel" class="mr-20 pb-2 relative">
                <p class="font-serif text-gray-600">Teléfono</p>
                <input type="tel" class="outline-none font-serif text-white bg-gray-900 border-b-2 w-full" value={this.state.tel} readOnly></input>
                </div>
                <div id="email" class="mr-20 pb-2 relative">
                <p class="font-serif text-gray-600">Correo</p>
                <input type="text" class="outline-none font-serif bg-gray-900 text-white border-b-2 w-full" value={this.state.email} readOnly></input>
                </div>
                <div className="pt-2 text-center">
                <NavLink to={`/User_Edit/${this.state.id}`}><button class="border-none text-gray-500 font-serif">Editar</button></NavLink>
                </div>
                <div id="boton 1" className="pt-5 pb-5 text-center">
                <NavLink to={`/UserAddcar/${this.state.id}`}><button class="outline-none border-white border-2 text-white pl-6 pr-6 pt-1 pb-1 rounded-full font-serif">Agregar vehiculo</button></NavLink>
                </div>
                <div id="boton 2" className="pt-3 pb-5 text-center">
                <NavLink to={`/UserDeletecar/${this.state.id}`}><button className="outline-none border-white border-2 text-white pl-6 pr-6 pt-1 pb-1 rounded-full font-serif">Eliminar vehiculo</button></NavLink>
                </div>
                </div>
                )     
        }else{
            return(
                <div>
                <form className="form_data">
                <div id="userName" class="mr-20 pb-2 relative">
                <p class="font-serif text-gray-600">Nombre de usuario</p>
                <input type="text" name="name" class="outline-none bg-gray-900 font-serif text-white border-b-2 w-full float-left" value={this.state.name} ref="nombre" onChange={e => this.onChangeName(e.target.value)} required></input>
                </div>
                <div class="mr-20 pb-2 relative">
                <p class="font-serif text-gray-600">Teléfono</p>
                <input type="tel" name="phoneNumber" class="outline-none font-serif text-white bg-gray-900 border-b-2 w-full" value={this.state.tel} onChange={e => this.onChangeTel(e.target.value)} pattern="[+][0-9]{10}" required title="El formato no es el mismo e.g. +1234567890"></input>
                </div>
                <div id="password" class="mr-20 pb-2 relative">
                <p class="font-serif text-gray-600">Contraseña</p>
                <input type="password" id="pass" name="password" class="outline-none font-serif bg-gray-900 text-white border-b-2 w-full" placeholder="Nueva contraseña o escribe la anterior" onChange={confirm} pattern=".{8,}" onChange={e => this.onChangePass(e.target.value)} required></input>
                </div>
                <div id="password" class="mr-20 pb-2 relative">
                <p class="font-serif text-gray-600">Confirmar Contraseña</p>
                <input type="password" id="con_pass" class="outline-none font-serif bg-gray-900 text-white border-b-2 w-full" onKeyUp={confirm} name="password2" onChange={e => this.onChangePass2(e.target.value)} required></input>      
                </div>
                <div id="email">
                <input type="hidden" id="email" class="outline-none font-serif bg-gray-900 text-white border-b-2 w-full" name="email"></input>      
                </div>
                <div id="boton 1" className="pt-5 pb-5 text-center">
                <button class="outline-none border-white border-2 text-white pl-6 pr-6 pt-1 pb-1 rounded-full font-serif" onClick={this.changeProfile}>Aceptar Cambios</button>
                </div>
                </form>
                <div id="boton 2" class="text-center">
                <NavLink to={`/User/${this.state.id}`}><button class="outline-none border-white border-2 text-white pl-6 pr-6 pt-1 pb-1 rounded-full font-serif">Atrás</button></NavLink>
                </div>
                </div>
        )
        }       
    }
}

export default withRouter(Data);