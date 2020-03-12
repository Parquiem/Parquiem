import React, { Component } from 'react';   
import {confirm} from '../../signup-steps/confirm'


// http://localhost:5000/api/users/update/5e45b1c3c7f18755e6fa3e65

class Data extends Component{
    constructor(props){
        super(props)
        this.state={name:[],tel:[],pass:[],id:[]}
    }
    componentDidMount(){
    fetch('http://localhost:5000/api/users/getUser/5e45b1c3c7f18755e6fa3e65')
    .then((response)=>response.json())
    .then((data)=>{        
        this.setState({name: data.name})
        this.setState({tel: data.phoneNumber})
        this.setState({pass: data.password})
        this.setState({id: data._id})
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

    changeProfile() {
        const formData = new FormData();
        formData.append('name', this.state.name);
        formData.append('phoneNumber', this.state.tel);
        formData.append('password', this.state.pass);
    
        return fetch('http://localhost:5000/api/users/update/5e45b1c3c7f18755e6fa3e65', {
            method: 'PUT',
            body: formData
        }).then(response => response.json())
    }

    render(){
        if(window.location.href==='http://localhost:3000/Test2'){
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
                <div id="password" class="mr-20 pb-2 relative">
                <p class="font-serif text-gray-600">Contraseña</p>
                <input type="password" class="outline-none font-serif bg-gray-900 text-white border-b-2 w-full" value={this.state.pass} readOnly></input>
                </div>
                </div>
                )     
        }else{
            return(
                <form className="form_data" onSubmit={this.changeProfile}>
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
                <input type="password" id="pass" name="password" class="outline-none font-serif bg-gray-900 text-white border-b-2 w-full" value={this.state.pass} onChange={confirm} pattern=".{8,}" onChange={e => this.onChangePass(e.target.value)} required></input>      
                </div>
                <div id="password" class="mr-20 pb-2 relative">
                <p class="font-serif text-gray-600">Confirmar Contraseña</p>
                <input type="password" id="con_pass" class="outline-none font-serif bg-gray-900 text-white border-b-2 w-full" onKeyUp={confirm} required></input>      
                </div>
                <div id="boton 1" className="pt-5 pb-5 text-center">
                <button class="outline-none border-white border-2 text-white pl-6 pr-6 pt-1 pb-1 rounded-full font-serif">Aceptar Cambios</button>
                </div>
                </form>
        )
        }       
    }
}

export default Data