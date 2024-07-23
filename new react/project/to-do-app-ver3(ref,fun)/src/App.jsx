import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import AppName from './components/AppName'
import AddItem from './components/AddItem'
import ToDoWork from './components/ToDoWork'
import ErrorMsg from './components/ErrorMsg'

function App() {
  // {work:'do homework',time:'1-1-24'},{work:'buy milk',time:'1-1-24'}

  //here items is immutable(cant change) unless we use setitem same for child cant edit props 
  let [items,setItem]=useState([]);
  

  //by this we are making sure that while combine lots of updates for item react only take the current value of item and not the prev value if any
  //this is important bec react is asycn and if one or more compnent value is depended upon each other while updateing it could  take the old value from other so to avoid use this
  function handleAddItem(itemName,itemDate){
    // const newItem = [...items, {work: itemName,time:itemDate}];
    setItem((currValue)=>[
      ...currValue, {work: itemName,time:itemDate}
    ]);
  }

  function handleDelete(todoWork){
    //in this filter function every item of items will go one by one and if that item.work is not equal to the todowork item then it will get inside this newitems array and if it is equal it will get filter out of that array (which means deleted from original items array) //filter only let those element inside the new array which satisfy the condition and here we wanted only those item in our new array which are not = todowork
    const newitems = items.filter((item)=>item.work !== todoWork)
    //now just update the original items array with removed items array
    setItem(newitems);
  }


  return (
    <>
    <div className='container'>
     <AppName></AppName>
     <AddItem handleAddItem={handleAddItem}></AddItem>
     {items.length === 0 ?<ErrorMsg></ErrorMsg>:<ToDoWork todoItems={items} handleDelete={handleDelete}></ToDoWork>}
     
    </div>
    </>
  )
}

export default App
