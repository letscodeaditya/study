const FoodInput = ({handleKeyDownEvent})=>{

    // const handleEvent = (event)=>{
    //     console.log(event.target.value);
    // };


    //this event.target.value will show every input as we typed inside the input box
    return (<input type="text" 
    placeholder="enter food item" 

    // onChange={(event)=> console.log(event.target.value)}
    
    //this gives info as any key is pressed then call this event
    onKeyDown={handleKeyDownEvent}
    />);
};

export default FoodInput;