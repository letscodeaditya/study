import { createContext,useReducer, useState } from "react";

//by this we will get auto fill while accessing the key of this context object
export const NewItems = createContext({
    items:[],
    handleAddItem: ()=>{},
    handleDelete: ()=>{}
});



//creating a pure function for performing actual task of reducer this function mostly created in another file (store) to separate logic from ui handle

//the curritem is the current value of items arr on which we want to perform our read write and delete
const itemReducer = (currItem,action)=>{ 
    //if nothing is changed we will just return curritem
    let newItems = currItem;
  
    if(action.type === "NEW_ITEM"){
      //add function here we are adding the array and putting the new value in newitems which we will return
      newItems = [...currItem, 
      {work: action.payload.itemName ,time: action.payload.itemDate}];
    } else if (action.type === "DELETE_ITEM"){
      newItems = currItem.filter((item)=>item.work !== action.payload.itemname)
    }
    return newItems;
  }




const TodoItemContextProvider = ({children})=> {

//using reducer instead of state as reducer is more adv
//(check pic) 

  const [items,dispatchitems] = useReducer(itemReducer,[]);


  const handleAddItem = (itemName,itemDate)=>{
    //create a action object conatining detail of what to perform and a payload containing the value, the actual add function will be define in reducer function
    const newItemAction = {
      type: "NEW_ITEM",
      payload: {
        itemName,
        itemDate
      },
    };
    // dispatcher takes this action object to the reducer 
    dispatchitems(newItemAction);
  }

  const handleDelete = (todoWork) => {
    const deleteAction = {
      type:"DELETE_ITEM",
      payload: {
        itemname : todoWork
      },
    };
    dispatchitems(deleteAction);
  }


  // {work:'do homework',time:'1-1-24'},{work:'buy milk',time:'1-1-24'}

  // let [items,setItem]=useState([]);
  

  // function handleAddItem(itemName,itemDate){
  //   const newItem = [...items, {work: itemName,time:itemDate}];
  //   setItem(newItem);
  // }

  // function handleDelete(todoWork){
  //   const newitems = items.filter((item)=>item.work !== todoWork)
  //   //now just update the original items array with removed items array
  //   setItem(newitems);
  // }

  return (
    <NewItems.Provider value={{
        items,
        handleAddItem,
        handleDelete
      }}>
        {children}
    </NewItems.Provider>    
  );
};

export default TodoItemContextProvider;