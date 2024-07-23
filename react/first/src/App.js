import {Fun,NEW,Js,Js1} from './B1';
import { Sc,Sf } from './B2';
import Input from './B4';
import {Student,P,Pro} from './B3';
import React from 'react';
import './App.css';

function App() {

  return (
    <div className="App">
    <h1>below</h1>
    <Fun />
    <NEW />
    <Js />
    <Js1 />
    <br></br>
    <Sc />
    <Sf />
    <br></br>
    <h1>props in react</h1>
    <Student name={"aditya"} email="abc@gmail.com" other={{address:"patna",mobile:"000"}}/>
    <Student name={"ayush"} email="def@gmail.com" other={{address:"patna",mobile:"111"}}/>
    <Student name={"ryben"} email="ghi@gmail.com" other={{address:"patna",mobile:"222"}}/>
    <br></br>
    <P />
    <br></br>
    <Pro />
    <br></br>
    <Input />
    </div>

  
  );
}

<br></br>

export default App


