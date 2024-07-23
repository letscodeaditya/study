const FoodInput = (props)=>{

    // const handleEvent = (event)=>{
    //     console.log(event.target.value);
    // };


    //this event.target.value will show every input as we typed inside the input box
    return (<input type="text" 
    placeholder="enter food item" 

    // onChange={(event)=> console.log(event.target.value)}
    
    //getting handle event function from parent
    onChange={props.handleEvent}
    />);
};

export default FoodInput;