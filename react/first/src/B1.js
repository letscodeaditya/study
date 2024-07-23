// component 
// 1.function
// 2.class

//import below for class component
import React,{Component, createElement} from "react";

//or directly use component from react 
class NEW extends  React.Component{
    render(){
        return(
            <h1>hello this is class</h1>
        )
    }
    
}

//function
function Fun() {
    return(
        <h1>this is fun</h1>
    );
}



//jsx
//with jsx we can use html and javascript together
function Js1(){
    return(
        <h1>{10+20}</h1>
    )
}




//creating withoutjsx
function Js()
{
    return React.createElement('div',null,"parent",React.createElement('h1',null,"child"))
}




export{Fun,NEW,Js,Js1}