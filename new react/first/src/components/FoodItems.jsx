import Item from "./Items";

const FoodItems = ({food})=>{
    return (
        <ul className="list-group">
            {food.map((e)=>(
                <Item key={e} Foods={e}></Item>
            ))}
        </ul>
    );
};

export default FoodItems;