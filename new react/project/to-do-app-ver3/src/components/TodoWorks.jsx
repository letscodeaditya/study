import style from './TodoWorks.module.css';

function TodoWorks({todoWork,todoTime,handleDelete}){
    return(
        <div className={`${style.con}`}>
            <li>
            <div className="row kg-row">

               <div className="col-4">
                    {todoWork}
                </div>
               <div className="col-3">
                    {todoTime}
                </div> 
                <div className="col-2">
                    <button className='btn btn-danger' onClick={()=>{handleDelete(todoWork)}}>delete</button>
                </div>
                
            </div>
            </li>
        </div>
    );
}

export default TodoWorks;