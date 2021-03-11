import {React,Component} from "react"
import {BrowserRouter, Link, Route, Switch} from "react-router-dom"
import Home from "./Home"

class Profile extends Component{
    constructor(){
        super();
        this.state=""
                                                                            //this.isMounted=false;
                                                                            //this.Controller = new AbortController();            
    };

    
    fun=function stateSetFunction(){
        if(!this.isMunted){
        console.log("Performing on unmounted Component" );
    }
        if(this.isMunted){
            this.setState({item:"HELLO CHAMPION"});
        }
    }
     
    componentDidMount(){
        console.log("Profile mounted");
        this.isMunted=true;
        this.timeOut=setTimeout(this.fun,5000);
    }

   componentWillUnmount(){
                                                                            //this.Controller.abort();
       this.isMunted=false;
       clearTimeout(this.timeOut);
       console.log("Profile unmounted");
   }


    render(){
    return(
        <div>
        <h1>This is profile component</h1>
        <div>{this.state.item}</div>
        <Link to ="/home">Click here to route to home</Link>
        </div>
          );
    }
}
export default Profile;