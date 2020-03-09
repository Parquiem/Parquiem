import React, { Component } from 'react';
import Carslist from './Carslist';

class Cars extends Component{
    constructor(props){
        super(props)
        this.state={ car:[]}
    }
    componentWillMount(){
    fetch('http://localhost:5000/api/users/getUser/5e45b1c3c7f18755e6fa3e65')
    .then((response)=>{
        return response.json();
    })
    .then((usuario)=>{
        this.setState({car: usuario.car})
        })
    }
    render(){
        if(this.state.car.length > 0){
            return(
                <div class="cuerpo pt-16 pl-32 pr-32">
                    <Carslist listado={this.state.car}/>
                </div>
                )
        } else {
        return <p className='cargando font-serif text-white'>Estacionando carros...</p>
      }  
    }
}

export default Cars