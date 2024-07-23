import TodoWorks from "./TodoWorks";
import style from "./ToDoWork.module.css";
import { NewItems } from "../store/items-store";
import { useContext } from "react";

const ToDoWork = () => {
    
    const {items,handleDelete} = useContext(NewItems);
    

    return(
        <div className={style.todowork}>
            <ol>
           {items.map((item)=>(
                <TodoWorks key={item.work} todoWork={item.work} todoTime={item.time} handleDelete={handleDelete}></TodoWorks>
            ))}
            </ol>
        </div>
    );
}

export default ToDoWork;