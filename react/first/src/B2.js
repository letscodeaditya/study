import {Fun,NEW,Js,Js1} from './B1';
import { Component, useState } from 'react';
import React from 'react';
import './App.css';

//states in function component

//states is like a container like var,let

//when we use let,var to declare a variable and try to change it later but js dont re-render that element even thought its changed 
//so we use state to declare a var , js always check and make active changes in var with state



//we need to import useState 

function Sf() {
  
  //old way this will not show change
  
  // let data = "aditya";
  // function nam(){
  //   data = "ayush";
  //   alert(data);
  // }

 
  const [data,setDate]=useState("aditya")
  function updateData()
  {
      setDate("ayush")
  }
  

  return (
    <div className="App">
   

    {/* click event we can also pass a anoynams arrow fun*/}
    {data} <br></br>
    {/* <button onClick={nam}>without state change</button> */}

    {/* with state */}
    <button onClick={updateData}>update function</button>

    </div>

  
  );
}

<br></br>


//state in class component

class Sc extends React.Component {
  constructor(){
    super();
    this.state={
      data:"aditya"
    }
  }
  change()
  {
    this.setState({data:"ayush"})
  }
  render()
  {
    return(
      <div className="App">
        <h1>{this.state.data}</h1>
        <button onClick={()=>this.change()} >update class</button>
      </div>
    )
  }
}

export {Sf,Sc};



