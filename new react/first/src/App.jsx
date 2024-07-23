
import './App.css'
import ErrorMessage from './components/ErrorMessage'
import FoodItems from './components/FoodItems'
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  let fooditems = ["sabzi","green veg","roti","salad","milk","ghee"];

  return (
    <>
    <div className="container">
     <h1 className='food-heading'>healthy food</h1>
     <ErrorMessage items = {fooditems}></ErrorMessage>
     <FoodItems food = {fooditems}></FoodItems>
    </div>
    </>
  )
}

export default App
