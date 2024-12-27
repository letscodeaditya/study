import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { ordered, restocked } from './iceCreamSlice';


export const IceCreamView = () => {
    const icecream = useSelector((state) => state.iceCream.numOfIceCreams);
    const dispatch = useDispatch();
  return (
    <div>
    <h1>number of icecream: {icecream}</h1>
    <button onClick={()=>dispatch(ordered())}>order icecream </button>
    <button onClick={()=>dispatch(restocked(1))}>restock icecream</button>
    </div>
  )
}
