import React, { Component } from 'react';
import Userlist from './Userlist';

class Users extends Component{
    constructor(props){
        super(props)
        this.state={ usuario:[]}
    }
    componentWillMount(){
    fetch('http://localhost:5000/api/users/getUsers')
    .then((response)=>{
        return response.json();
    })
    .then((usuario)=>{
        this.setState({usuario: usuario})
        })
    }
    render(){
        if(this.state.usuario.length > 0){
            return(
                <div class="cuerpo">
                    <Userlist listado={this.state.usuario}/>
                </div>
                )
        } else {
        return <p className='cargando'>Cargando empleados...</p>
      }
        
    }
}

export default Users