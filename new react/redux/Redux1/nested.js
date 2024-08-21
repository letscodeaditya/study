const redux = require("redux");
const produce = require('immer').produce;
const reduxLogger = require('redux-logger');
const logger = reduxLogger.createLogger();
const applyMiddleWare = redux.applyMiddleware;


const initialState = {
    name: 'aditya',
    address: {
        sector: '4',
        area: 'salt lake',
        city: 'kolkata'
    }
}

const AREA_UPDATE = "AREA UPDATE";

const updateArea = (area)=>{
    return{
        type: AREA_UPDATE,
        payload: area,
    }
}

// const reducer = (state = initialState, action)=>{
//     switch(action.type){
//         case AREA_UPDATE: 
//             return{
//                 ...state,
//                 address:{
//                     ...state.address,
//                     area: action.payload
//                 }
//             }
//         default:{
//             return state
//         }    
//     }
// }

const reducer = (state = initialState, action)=>{
    switch(action.type){
        case AREA_UPDATE: 
            return produce(state,(draft)=>{
                draft.address.area = action.payload
            })
        default:{
            return state
        }    
    }
}

const store = redux.createStore(reducer,applyMiddleWare(logger));
console.log("initial state",store.getState())
const unsub = store.subscribe(()=>{
    console.log("update state",store.getState())
})
store.dispatch(updateArea("newtown"));
unsub();



