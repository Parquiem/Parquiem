import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
 
import Home from './Home';
import Login from './Login';
import Signup from './Signup';
import Signup2 from './Signup2';
import Signup3 from './Signup3';
 
class App extends Component {
  render() {
    return (      
       <BrowserRouter>
        <div>
            <Switch>
             <Route path="/" component={Home} exact/>
             <Route path="/login" component={Login}/>
             <Route path="/signup" component={Signup}/>
             <Route path="/signup2" component={Signup2}/>
             <Route path="/signup3" component={Signup3}/>
           </Switch>
        </div> 
      </BrowserRouter>
    );
  }
}
 
export default App;