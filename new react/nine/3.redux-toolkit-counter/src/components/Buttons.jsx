import { useRef } from "react";
import {  privacyActions } from "../store/Privacy";
import {  counterActions } from "../store/Counter";
import { useDispatch } from "react-redux";



const Button = ()=>{

    const dispatch = useDispatch();
    const inputValue = useRef();

    const handleIncre = ()=>{
        dispatch(counterActions.increment());
    }

    const handledecre = ()=>{
        dispatch(counterActions.decrement());
    }

    const handleAdd =()=>{
        dispatch(counterActions.add(inputValue.current.value));
        inputValue.current.value ='';
    }

    const handleSub = ()=>{
        dispatch(counterActions.sub(inputValue.current.value));
        inputValue.current.value = '';
    }


    const handlePriv = ()=>{
        dispatch(privacyActions.toggle());
    }


    return(
        <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button onClick={handleIncre} type="button" class="btn btn-primary btn-lg px-4 gap-3">add +1</button>
        <button onClick={handledecre} type="button" class="btn btn-outline-secondary btn-lg px-4">Sub -1</button>
        <input type="number" ref={inputValue} placeholder="enter the no."/>
        <button onClick={handleAdd} type="button" class="btn btn-primary btn-lg px-4 gap-3">add</button>
        <button onClick={handleSub} type="button" class="btn btn-outline-secondary btn-lg px-4">Sub</button>
        <button onClick={handlePriv} type="button" class="btn btn-outline-secondary btn-lg px-4">privacy</button>
      </div>
    );
}
export default Button;