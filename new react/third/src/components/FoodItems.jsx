import { useState } from "react";
import Item from "./Items";

const FoodItems = ({food})=>{


    let [activeItems,setActiveItems] = useState([]);

    let onBuyButton = (event,e)=>{
        let newItems = [...activeItems, e];
        setActiveItems(newItems);
    }

    return (
        <ul className="list-group">
            {food.map((e)=>(
                <Item key={e} 
                Foods={e} 
                //this fun will get passed to child when button is clicked a event is generated and this onbuybutton fun is called with event and currentloop food item(e) which update the activeitem array 
                handleBuyButton={(event)=>onBuyButton(e,event)}
                //this will check if the clicked item is present in the activeitem array which is passed as a props to child (in starting this array will be empty so no item is active we can use this for many use like if active add remove button or if a item is pressed again then it will be already in the array so we can remove it )
                bought ={activeItems.includes(e)}>
                </Item>
            ))}
        </ul>
    );
};

export default FoodItems;