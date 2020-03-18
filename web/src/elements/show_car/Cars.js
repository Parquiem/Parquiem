import React, { Component } from 'react';
import Carslist from './Carslist';
import {withRouter} from 'react-router';
const jwtDecode = require('jwt-decode');

class Cars extends Component{
    constructor(props){
        super(props)
        this.state={ car:[],token:this.props.match.params.token}
    }
    componentDidMount(){
    const decode=jwtDecode(this.state.token);
    fetch(`http://localhost:5000/api/users/getUser/${decode.id}`)
    .then((response)=>{
        return response.json();
    })
    .then((usuario)=>{
        this.setState({car: usuario.car})
        console.log(this.state.car)
        })
    }
    render(){
        if(this.state.car.length > 0){
            return(
                <div class="cuerpo pt-4 pl-32 pr-32 h-full">
                    <Carslist listado={this.state.car}/>
                </div>
                )
        } else {
        return <p className='cargando font-serif text-white'>Estacionando carros...</p>
      }  
    }
}

export default withRouter(Cars)