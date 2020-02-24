import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import Login from './screens/Initial/Login';

class App extends Component{

  state = {
    isLoggedIn: false,
  }

  render(){
    let {isLoggedIn} = this.state;
    return(
      <>
      {!isLoggedIn ? (
        <Text>Hola mundo</Text>
        ) : (
          <Login />
        )
      }
      </>
    );
  }

}

export default App;
