import React from 'react'
import axios from 'axios'
import {withRouter} from 'react-router'
const jwtDecode = require('jwt-decode');

class Carsrow extends React.Component {

  handleClick(id){
    const token=this.props.match.params.token;
    const user = jwtDecode(token) 
    axios.delete(`http://localhost:5000/api/users/carDelete/${user.id}/${id}`)
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
      window.location.reload();
  }

  render() {
    return(
        <div class="h-16 border-gray-400 border-b-2 pl-5">
          <div class="relative">
            <p class="absolute font-serif text-gray-500 text-sm pt-2">{this.props.car}</p>
            <p class="absolute font-serif text-gray-200 text-lg mt-6">{this.props.plates}</p>
          </div>
            <button class="font-serif text-xl text-white float-right mt-4 mr-10 outline none" onClick={()=>this.handleClick(this.props.id)}>X</button>
        </div>
    )
  }
}
export default withRouter(Carsrow)