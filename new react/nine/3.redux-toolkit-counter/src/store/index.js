import {configureStore, createSlice} from "@reduxjs/toolkit"
import counterSlice from "./Counter";
import privacySlice from "./Privacy";


// const counterSlice = createSlice({
//     name: 'counter',
//     initialState : {counterVal:0},
//     reducers : {
//         increment : (state)=>{
//             state.counterVal++;
//         },
//         decrement : (state)=>{
//             state.counterVal--;
//         },
//         add : (state,action)=>{
//             state.counterVal += Number(action.payload);
//         },
//         sub : (state,action)=>{
//             state.counterVal -= Number(action.payload);
//         },
//     }
// })

// const privacySlice = createSlice({
//     name: 'privacy',
//     initialState: false,
//     reducers: {
//         toggle: (state)=>{
//            return state = !state;
//         }
//     }
// })


//to create a redux/toolkit store and it takes object of multiple reducer
const counterStore = configureStore({
    reducer:{
        counter: counterSlice.reducer,
        privacy: privacySlice.reducer
    }}
    );


// export const counterActions = counterSlice.actions;
// export const privacyActions = privacySlice.actions;
export default counterStore;