import TodoWorks from "./TodoWorks";
import style from "./ToDoWork.module.css";

const ToDoWork = (props) => {
    
    return(
        <div className={style.todowork}>
            <ol>
           {props.todoItems.map((item)=>(
                <TodoWorks key={item.work} todoWork={item.work} todoTime={item.time} handleDelete={props.handleDelete}></TodoWorks>
            ))}
            </ol>
        </div>
    );
}

export default ToDoWork;