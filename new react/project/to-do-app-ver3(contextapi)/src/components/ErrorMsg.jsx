import style from "./ErrorMsg.module.css";
import { NewItems } from "../store/items-store";
import { useContext } from "react";


function ErrorMsg(){
    const {items} = useContext(NewItems);

    return(
        items.length===0 && <h2 className={style.heading}>ADD NEW ITEM</h2>
    );
};

export default ErrorMsg;