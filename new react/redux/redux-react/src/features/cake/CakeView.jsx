import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { ordered, restocked } from './cakeSlice';

export const CakeView = () => {
  
    const cake = useSelector((state) => state.cake.numOfCake);
    const dispatch = useDispatch();


  return (
    <div>
        <h1>number of cake {cake}</h1>
        <button onClick={()=>dispatch(ordered())}>order cake</button>
        <button onClick={()=>dispatch(restocked(1))}>restock cake</button>
    </div>
  )
}
