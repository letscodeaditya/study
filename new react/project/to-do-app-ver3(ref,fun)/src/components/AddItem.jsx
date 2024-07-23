import { useRef, useState } from "react";
import style from "./Additem.module.css"
import { MdFormatListBulletedAdd } from "react-icons/md";


function AddItem({handleAddItem}){

    //to stop paint cycle/re-render bec of every typed input due to usestate


    //using usestate for storing local data and passing it to the handlebutton (but it will render whole component for every input typed before passing )
    // let[itemname,setItemName]=useState('');
    // let[date,setDate]=useState('');

    // const handleItem = (event)=>{
    //     setItemName(event.target.value);
    // };

    // const handleDate =(event)=>{
    //     setDate(event.target.value)
    // };



    //using useref for storing local data so that usestate is not used and it wont re-render every time we time anything in our input tag then we just pass the value to handlebutton. 
    //use ref to take value from input tag and storing in useref var which we can get value as .current.value

    const itemname = useRef();
    const date = useRef();

    const handleButton = ()=>{
        const addName = itemname.current.value;
        const addDate = date.current.value;
        itemname.current.value = "";
        date.current.value = "";
        handleAddItem(addName,addDate);
    };

    //we can also pass useref as a props to child as usestate
    
    return(
     <div className={style.addcont}>
     <div className={style.inputitem}><input type="text" ref={itemname}/></div> 
     <div className={style.inputdate}><input type="date" ref={date}/></div>
     <div className={style.button}>
    <button className="btn btn-primary justify-content-center"
     onClick={handleButton}
     ><MdFormatListBulletedAdd /></button></div>
     </div>
    );
}

export default AddItem; 