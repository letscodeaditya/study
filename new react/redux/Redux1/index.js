const redux = require("redux");
const createStore = redux.createStore;
const combineReducer = redux.combineReducers;

const CAKE_ORDERED = "CAKE ORDERED";
const CAKE_RESTOCK = "CAKE RESTOCK";
const ICECREAM_ORDERED = "ICECREAM ORDERED";
const ICECREAM_RESTOCK = "ICECREAM RESTOCK";

//state
const cakeState = {
  numOfCake: 10,
  another: 0,
};
const iceCreamState = {
  numOfIceCream: 5
}

//action
function orderCake() {
  return {
    type: CAKE_ORDERED,
    quantity: 1,
  };
}

function reStockCake(qty=1){
  return {
    type: CAKE_RESTOCK,
    payload: qty
  }
}
function orderIceCream() {
  return {
    type: ICECREAM_ORDERED,
    quantity: 1,
  };
}

function reStockIceCream(qty=1){
  return {
    type: ICECREAM_RESTOCK,
    payload: qty
  }
}


//reducer
const cakeReducer = (state = cakeState, action) => {
  switch (action.type) {
    case CAKE_ORDERED:
      return {
        ...state,
        numOfCake: state.numOfCake - 1,
      };
    case CAKE_RESTOCK:
      return{
        ...state,
        numOfCake: state.numOfCake + action.payload
      } 
    default:
      return state;
  }
}; 
  
const IceReducer = (state = iceCreamState, action) => {
  switch (action.type) {
    case ICECREAM_ORDERED:
      return {
        ...state,
        numOfIceCream: state.numOfIceCream - 1,
      };
    case ICECREAM_RESTOCK:
      return{
        ...state,
        numOfIceCream: state.numOfIceCream + action.payload
      } 
    default:
      return state;
  }
};


  const rootReducer = combineReducer({
    cake: cakeReducer,
    ice: IceReducer
  })

  const store = createStore(rootReducer)
  console.log("initial state :",store.getState());

  const unsub = store.subscribe(()=>{
    console.log('update state',  store.getState())
  })

  store.dispatch(orderCake())
  store.dispatch(orderCake())
  store.dispatch(reStockCake())

