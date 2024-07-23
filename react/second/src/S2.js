import React from "react";
import { Alert } from "react-bootstrap";

//pass func as a prop
//passing data from parent to child
function User(props){
    return(
        <div>
            <h1>user component</h1>
            <button onClick={props.data}>call data function</button>
        </div>
    )
}

//lifting state up
//passing data from child to parent
function Reverse(prop){
    
    const name="aditya"

    return(
        <div>
            <h2>user name:</h2>
            {/* here we are getting the parentalert function as a parameter in prop but in that function it takes another parameter "data" , which we are passing from child as item(name) we dont call the passed func with there original name but by the name defined while passing */}
            <button onClick={()=>prop.item(name)}>click me</button>
        </div>
    )
}


export {User,Reverse};
