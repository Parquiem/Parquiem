import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
 
import Home from './Home';
import Login from './Login';
import Test from './Test';
import Test2 from './Test2';
import Signup from './Signup';
import Addcar from './Addcar';
import Deletecar from './Deletecar';
import Edit_user from './Edit_user';

class App extends Component {
  render() {
    return (      
        <div>
            <Switch>
             <Route path="/" component={Home} exact/>
             <Route path="/login" component={Login}/>
             <Route path="/admin" component={Test}/>
             <Route path="/user/:token/" component={Test2}/>
             <Route path="/signup" component={Signup}/>
             <Route path="/userAddCar/:token" component={Addcar}/>
             <Route path="/user_edit/:token" component={Edit_user}/>
             <Route path="/userDeleteCar/:token" component={Deletecar}/>
           </Switch>
        </div> 
    );
  }
}
 
export default App;