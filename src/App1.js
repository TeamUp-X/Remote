import React from "react"
import {BrowserRouter as Router,Switch,Route} from "react-router-dom"
import Home from "./Home"
import Profile from "./Profile"

export default function App(){
    console.log("Running App 1");
return(
    <Router>
    <Switch>
         
                <Route path="/" component={Home} exact/>
                      
                <Route path="/home" component={Home}/>
                
                <Route path="/profile" component={Profile}/>       
    
    </Switch>
    </Router>
);
}