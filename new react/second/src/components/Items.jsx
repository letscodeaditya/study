import style from "./Items.module.css";

const Item = ({Foods, handleBuyButton}) => {

    //for 1.

    // const handleEvent = (event)=>{
    //     console.log(event);
    //     console.log (`${Foods} being bought`)
    // }

    
    
    return (
        <li className={`${style['kg-item']} list-group`}>
            <span className={style['kg-span']}>{Foods}</span>
            <button 
            className={`${style.button} btn btn-info`}
            
            // whenever a event is call react create a SyntheticBaseEvent(object) containing all info, if we want to see this event we can call it
            

            //1.event handle function define in child itself

            //without calling event obj, just run some function 
            // onClick={handleEvent}
            // with calling event obj calling
            // onClick={(event)=>handleEvent(event)}



            //2.here the event function is define in parent and passed to child for event handle 
            onClick={handleBuyButton}

            >buy</button>
        </li>
    );
}

export default Item;