import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import {withRouter} from 'react-router'
import Navbar from './Unavigation'
import axios from 'axios';
const qs = require('querystring')


class Addcar extends Component{
    constructor(props){
        super(props)
        this.state={model:'',color:'',plate:'',id:this.props.match.params.id}
    }

    onChangeModel(value){
        this.setState({
             model: value
        });
    }
    onChangeColor(value){
        this.setState({
             color: value
        });
    }

    onChangePlate(value){
        this.setState({
             plate: value
        });
    }

    addCar = event => {
        event.preventDefault();
            const carro = {
                carModel:this.state.model,
                color:this.state.color,
                plates:this.state.plate
                };
            
            axios.post(`http://localhost:5000/api/users/car/${this.state.id}`, qs.stringify( carro ))
              .then(res => {
                window.location.href=(`/User/${this.state.id}`)
              })
          }     

          render(){
    return(
    <div class="relative h-screen">
    <Navbar/>
    <div id="profile" class="pt-20 p-16 h-full bg-gray-900">
    <div id="profilesquare" class="border-2 border-white h-full pl-10 pt-5">
    <div class="mr-20 pb-10 relative">
    <p class="font-serif text-white text-2xl text-center">Agregar carro</p>
    </div>
    <form id="addcar">
    <div id="model" class="mr-20 pb-10 relative">
        <p class="font-serif text-gray-600">Modelo de carro</p>
        <input type="text" class="outline-none bg-gray-900 font-serif text-white border-b-2 w-full float-left" name="carModel" required onChange={e => this.onChangeModel(e.target.value)}></input>
    </div>
    <div id="color" class="mr-20 pb-10 relative">
        <p class="font-serif text-gray-600">Color de carro</p>
        <input type="text" class="outline-none bg-gray-900 font-serif text-white border-b-2 w-full float-left" name="color" required onChange={e => this.onChangeColor(e.target.value)}></input>
    </div>
    <div id="placa" class="mr-20 pb-10 relative">
        <p class="font-serif text-gray-600">Placas</p>
        <input type="text" class="outline-none bg-gray-900 font-serif text-white border-b-2 w-full float-left" pattern="[A-Z0-9]{3}[-][A-Z0-9]{2}[-][A-Z0-9]{2}" required title="El formato no es el mismo e.g. A0A-A0-A0" name="plates" onChange={e => this.onChangePlate(e.target.value)}></input>
    </div>
    <div id="boton 1" class="pt-10 pb-5 text-center">
        <button class="outline-none border-white border-2 text-white pl-6 pr-6 pt-1 pb-1 rounded-full font-serif" onClick={this.addCar}>Agregar vehiculo</button>
    </div>
    </form>
    <div id="boton 2" class="text-center">
        <NavLink to={`/User/${this.state.id}`}><button class="outline-none border-white border-2 text-white pl-6 pr-6 pt-1 pb-1 rounded-full font-serif">Atrás</button></NavLink>
    </div>
    </div>
    </div>
    </div>
    )
    }
}

export default withRouter(Addcar);