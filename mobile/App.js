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
    isLoggedIn: false
  }

  render(){
    
    return(
      <>
        <Initial />
      </>
    );
  }

}

export default App;
