import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import ErrorMessage from './components/ErrorMessage'
import FoodItems from './components/FoodItems'
import Container from './components/Container'
import FoodInput from './components/FoodInput'
import { useState } from 'react'

function App() {
  // let fooditems = ["sabzi","green veg","roti","salad","milk","ghee"];

  // let text = "food item without state(big problem solve in 3rd)"




  //managing state (we declare those item which change with time and need to reload)
  //states can be passed to child but not btw siblings


  let textState = useState("food item");//it return a array at which 0 conatin the actual value and 1 conatin the method to change it. here we can just pass the value to pos 0 using ""

  //accessing the 0 value to a var so we can read it
  let textToShow = textState[0];

  //defining a function to change the value
  let setText = textState[1];

  //in one line
  // let [textToShow, setText] = useState("food item");



  //making food items with state
  let [fooditems, setfooditems] = useState(["sabzi","green veg","roti"]);


  const handleKeyDownEvent = (event)=>{
   setText(event.target.value);

   //we have put keydown event in the input so it will give info of every last key press so we use "enter" key to make our input item to display
   if(event.key === "Enter"){

    //storing the whole typed input
    let newFoodItem = event.target.value;

    //this is to clean the input box as we pressed enter and value stored
    event.target.value = "";

    //here we are adding our prev fooditem array with our new input item and then storing it in this newitems  
    let newItems = [...fooditems, newFoodItem];

    //now the final work of updating the fooditem array with our new created newitems(old+new), this is important to manage the state and reload the changes
    setfooditems(newItems);
   }
    };

  return (
    <>
    <Container>
    <div className="container">
     <h1 className='food-heading'>healthy food</h1>
     {/* pasing event handle fun to child */}
     <FoodInput handleKeyDownEvent={handleKeyDownEvent} ></FoodInput>
     <p>{textState}</p>
     <ErrorMessage items = {fooditems}></ErrorMessage>
     <FoodItems food = {fooditems}></FoodItems>
    </div>
    </Container>
    <Container name={'aditya'}>
      <div>hello you can make custom card and put data inside it using this container (passing children) this container dont know what data is going to be passed</div>
    </Container>
    </>
  )
}

export default App
