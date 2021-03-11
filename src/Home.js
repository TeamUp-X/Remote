import {Component,React} from 'react'
import {BrowserRouter, Switch ,Route ,Link} from 'react-router-dom'
import Profile from "./Profile"

class Home extends Component{
    Constructor(){

    }
    render(){
    return(
        <div>
        <h1>This is Home Component</h1>
        <Link to="/profile">Click me to route to Profile page </Link>
        </div>
       );
    }
}
export default Home;