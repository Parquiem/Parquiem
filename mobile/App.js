import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import Initial from './screens/Initial';

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
          <Initial />
        )
      }
      </>
    );
  }

}

export default App;
