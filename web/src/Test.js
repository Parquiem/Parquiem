import React,{ Component } from 'react';
import credentials from './map/credentials';
import './css/Test.css';
import Users from './elements/admin/Users'
import Navbar from './Unavigation'
import { GoogleMap, LoadScript,Marker } from '@react-google-maps/api'

class Test extends Component{
    constructor(props){
        super(props)
        this.state={color:''}
    }

    componentDidMount(){
        this.setState({color:'red-dot'})
        const interval = setInterval(() => {
            if(this.state.color==='red-dot'){
                this.setState({color:'green-dot'})
            }else if(this.state.color==='green-dot'){
                this.setState({color:'red-dot'})
            }
          },20000);
          return () => clearInterval(interval);
    }

    timetochange=()=>{
        if(this.state.color==='red-dot'){
            this.setState({color:'green-dot'})
            console.log(this.state.color)
        }else if(this.state.color==='green-dot'){
            this.setState({color:'red-dot'})
            console.log(this.state.color)
        }
    }



    render(){
    return(
    <div class="relative h-screen">
    <Navbar/>
    {/* <Users/> */}
    <div id="info" class="float-left border-r-2 border-gray-400 w-1/5 h-screen overflow-scroll inline-block pt-12 pb-5">
    <div class="h-24 border-gray-400 border-b-2">
          <div class="relative">
            <img src="images/default-user-300x300.png" class="rounded-full absolute w-16 ml-4 mt-4" alt="imagen usuario"/>
            </div>
            <p class="font-serif text-gray-500 text-sm pl-24 pt-6">Pedro</p>
            <p class="font-serif text-gray-800 text-lg pl-24">EFE-420-69</p>
            <p class="font-serif text-gray-900 text-xs pl-56 ">14:28</p>
            </div>
            </div>
    <div>
        <LoadScript
        id="script-loader"
        googleMapsApiKey={credentials.MapsKey}
      >
        <GoogleMap
            id='example-map'
            zoom={18}
            center={{lat: 28.639990, lng:-106.072882}}
            mapContainerClassName={"h-screen z-0"}
        >          
        <Marker
        position={{lat: 28.639990, lng:-106.072882}} icon={`http://maps.google.com/mapfiles/ms/icons/${this.state.color}.png`} clickable onClick={this.timetochange}
        />
        </GoogleMap>
      </LoadScript>
      
    </div>
</div>
        )
    }
    }


export default Test;