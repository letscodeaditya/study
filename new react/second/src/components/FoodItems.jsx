import Item from "./Items";

const FoodItems = ({food})=>{
    return (
        <ul className="list-group">
            {food.map((e)=>(
                <Item key={e} Foods={e} 
                //passing event handle function to child
                handleBuyButton={()=>console.log(`${Item} brought`)}></Item>
            ))}
        </ul>
    );
};

export default FoodItems;