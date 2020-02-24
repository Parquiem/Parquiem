import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
 
import Home from './Home';
import Login from './Login';
 
class App extends Component {
  render() {
    return (      
       <BrowserRouter>
        <div>
            <Switch>
             <Route path="/" component={Home} exact/>
             <Route path="/login" component={Login}/>
           </Switch>
        </div> 
      </BrowserRouter>
    );
  }
}
 
export default App;