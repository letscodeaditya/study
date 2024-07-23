import { S1,Verifi,Bvalidation } from './S1';
import { User,Reverse } from './S2';
import { Com } from './S3';
import Cssuse from './S5';
import Dif from './S6';
import Ta from './S7';
import {Reuse,Frag} from './S8';
import { Pure,UserP,Memo } from './S9';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'react-bootstrap';


function App() {
  //for s2
  function getdata(){
    alert("hello from app for s2")
  }

  function parentAlert(data)
  {
    alert(data);
  }
  
  const[show,setState]=React.useState(true);

  //for s8
  //here we are calling reuse fun and passing list as "item" here
  const user=[
    {name:"aditya",email:"abc@gmail.com",contact:999},
    {name:"ayush",email:"def@gmail.com",contact:666},
    {name:"ryben",email:"ghi@gmail.com",contact:777},
]


  //FOR S9
  class Ap extends React.Component{
    constructor(){
      super();
      this.state={
        count:2
      }
    }
    render(){
      return(
        <div>
          <UserP count={this.state.count}/>
          <button onClick={()=>this.setState({count:1})}>update count</button>
        </div>
      )
    }
  }


  return (
    <div className="App">
      <S1 />
      <Verifi />
      <br></br>
      <Bvalidation />

      <br></br>
      <User data={getdata}/>
      <br></br>
      <Reverse item={parentAlert}/>
      <br></br>
      
      {show? <Com />:<h1>child com removed</h1>}
      <Button variant="primary" onClick={()=>setState(false)}>toggle</Button>{''}
      <br></br>
      <Cssuse />
      <br></br>
      <Dif />
      <br></br>
      <Ta />

      <br></br>
      <h1>reuse component with list</h1>  
      {
        user.map((item,i)=>
        <Reuse data={item}/>
        )
      }
      
      <br></br>
      <Frag />

      {/* s9 */}
      <br></br>
      <Pure />
      <br></br>
      <Ap />
      <br></br>
      <Memo />
      
    </div>
  );
}

export default App;
