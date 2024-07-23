import { useSelector } from "react-redux";

const Counter = ()=>{

    //to use counter slice we can use useselector hook to  get slice from the redux store
    //use selector will create a subcription and mangae it for us 
    const countObj = useSelector((store)=>store.counter);
    const count = countObj.counterVal;


    return (
        <p class="lead mb-4 ">counter value is: {count} </p>
    );
}

export default Counter;