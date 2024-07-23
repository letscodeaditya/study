import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import ErrorMessage from './components/ErrorMessage'
import FoodItems from './components/FoodItems'
import Container from './components/Container'
import FoodInput from './components/FoodInput'

function App() {
  let fooditems = ["sabzi","green veg","roti","salad","milk","ghee"];

  let text = "food item without state(big problem solve in 3rd)"

      const handleEvent = (event)=>{
      console.log(event.target.value);
      //this will update the text but wont show on screen as react dont reload the whole thing and if it did it will take the initial value of text and not the value typed in input box
      text = event.target.value;
    };

  return (
    <>
    <Container>
    <div className="container">
     <h1 className='food-heading'>healthy food</h1>
     {/* pasing event handle fun to child */}
     <FoodInput handleEvent={handleEvent} ></FoodInput>
     <p>{text}</p>
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
