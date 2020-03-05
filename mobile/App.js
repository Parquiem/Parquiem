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
    users: []
  }

  componentDidMount(){
    return fetch('https://us-central1-directed-will-245201.cloudfunctions.net/function-2/users')
          .then(res => res.json())
          .then(data => this.setState({users: data}))
          .catch(err => console.log(err));
  }

  render(){
    let {isLoggedIn, users} = this.state;
    return(
      <>
      {!isLoggedIn ? (
          users.map(item => (
            <Text>{item.firstName}</Text>
          ))
        ) : (
          <Initial />
        )
      }
      </>
    );
  }

}

export default App;
