import { useRef } from "react";
import { useDispatch } from "react-redux";


const Button = ()=>{

    //to dispatch our action to the redux store
    const dispatch = useDispatch();
    const inputValue = useRef();

    const handleIncre = ()=>{
        dispatch({type: 'ADD'});
    }

    const handledecre = ()=>{
        dispatch({type:'SUB'});
    }

    const handleAdd =()=>{
        dispatch({
            type: 'ADD_NUMB',
            payload: {
                num : inputValue.current.value
            }
        })
        inputValue.current.value ='';
    }

    const handleSub = ()=>{
        dispatch({
            type: 'SUB_NUMB',
            payload: {
                num : inputValue.current.value
            }
        })
        inputValue.current.value = '';
    }


    const handlePriv = ()=>{
        dispatch({
            type: 'PRIVACY'
        })
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