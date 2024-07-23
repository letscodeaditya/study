import { useContext, useState } from "react";
import style from "./Additem.module.css"
import { MdFormatListBulletedAdd } from "react-icons/md";
import { NewItems } from '../store/items-store'


function AddItem(){

    const addnew = useContext(NewItems);
   

    let[itemname,setItemName]=useState('');
    let[date,setDate]=useState('');

    const handleItem = (event)=>{
        setItemName(event.target.value);
    };

    const handleDate =(event)=>{
        setDate(event.target.value)
    };

    const handleButton = ()=>{
        addnew.handleAddItem(itemname,date);
        setItemName("");
        setDate("");
    };

    return(
     <div className={style.addcont}>
     <div className={style.inputitem}><input type="text" onChange={handleItem} value={itemname}/></div> 
     <div className={style.inputdate}><input type="date" onChange={handleDate} value={date}/></div>
     <div className={style.button}>
    <button className="btn btn-primary justify-content-center"
     onClick={handleButton}
     ><MdFormatListBulletedAdd /></button></div>
     </div>
    );
}

export default AddItem; 