//props in react is same as parameter we pass in a function
//here we can get props as an object 
import React from "react";
import { useState } from "react";



//PROPS IN FUNCTION

function Student(props){
    //to change the value write this only in app.js
    let [nam,setName] = useState("aditya")
    return(
        <div style={{backgroundColor:"red"}}>
            <h1>Hello {props.name}</h1>
            <h2>email : {props.email}</h2>
            <h3>address : {props.other.address}</h3>
        </div>
        
    )
}


//PROPS IN CLASS




class P extends React.Component {
    constructor()
    {
        super();
        this.state={
            name:"aditya"
        }
    }
    render(){
        return(
            <div>
                <h1>props</h1>

                <Pro name="ryben" email="gaga@gmail.com"></Pro>

                <Pro name="eminem" email="eminem@gmail.com"></Pro>

                <Pro name={this.state.name} email="abcc@gmail.com"></Pro>

                <button onClick={()=>this.setState({name:"ayush"})} >update name</button>
            </div>
        )
    }
}

class Pro extends React.Component {

    render(){
        return(
            <div>
                <h1>hello {this.props.name}</h1>
                <h2>{this.props.email}</h2>
            </div>
        )
    }
}


export {Student,P,Pro};