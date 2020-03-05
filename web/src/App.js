import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
 
import Home from './Home';
import Login from './Login';
import Test from './Test';
import Test2 from './Test2';
import Signup from './Signup';
import Signup1 from './signup-steps/Signup1';
import Signup2 from './signup-steps/Signup2';
import Signup3 from './signup-steps/Signup3';
 
class App extends Component {
  render() {
    return (      
       <BrowserRouter>
        <div>
            <Switch>
             <Route path="/" component={Home} exact/>
             <Route path="/login" component={Login}/>
             <Route path="/test" component={Test}/>
             <Route path="/test2" component={Test2}/>
             <Route path="/signup" component={Signup}/>
             <Route path="/signup1" component={Signup1}/>
             <Route path="/signup2" component={Signup2}/>
             <Route path="/signup3" component={Signup3}/>
           </Switch>
        </div> 
      </BrowserRouter>
    );
  }
}
 
export default App;