import {createStore} from "redux";

const INITIAL_VALUE = {
    counter:0,
    privacy: false
}

const counterReducer = (store = INITIAL_VALUE,action)=>{
    if (action.type === "ADD"){
        //we have to also sending the rest store value even though it is not changed it will send every value of store and the changed value from store also
        //this ...store will bring all the keys of the object here but as we know only one same key name be allowed so the new one will stay and old will get replaced, here it is counter
        return {...store,counter : store.counter+1};
    }else if (action.type === 'SUB'){
        return {...store,counter : store.counter-1}
    }else if(action.type === 'ADD_NUMB'){
        return{...store,counter : store.counter + Number(action.payload.num)}
    }else if(action.type === 'SUB_NUMB'){
        return{...store,counter : store.counter - Number(action.payload.num)}
    }else if(action.type === 'PRIVACY'){
        return{...store,privacy : !store.privacy}
    }
    return store;
}

//to create a redux store and it takes a reducer
const counterStore = createStore(counterReducer);


export default counterStore;