const redux = require('redux');
const thunkMiddleWare = require('redux-thunk').default;
const axios = require('axios');
const applyMiddleWare = redux.applyMiddleware;


const initialState = {
    loading: false,
    users: [],
    error: ''
}

const FETCH_USERS_REQUESTED = "FETCH_USERS_REQUESTED";
const FETCH_USERS_SUCCEEDED = "FETCH_USERS_SUCCEEDED";
const FETCH_USERS_FAILED = "FETCH_USERS_FAILED";

const fetchUserReq = ()=>{
    return{
        type: FETCH_USERS_REQUESTED,
    }
}
const fetchUserSuc = (users)=>{
    return{
        type: FETCH_USERS_SUCCEEDED,
        payload: users
    }
}
const fetchUserFail = (error)=>{
    return{
        type: FETCH_USERS_FAILED,
        payload: error
    }
}

const reducer = (state=initialState,action)=>{
    switch(action.type){
        case FETCH_USERS_REQUESTED: 
            return{
                ...state,
                loading: true
            }
        case FETCH_USERS_SUCCEEDED:
            return{
                loading: false,
                users: action.payload,
                error:''
            }    
        case FETCH_USERS_FAILED:
            return{
                loading: false,
                users:[],
                error:action.payload
            }    
    }
}

//action creator here is returning a function instead of a action which can do async task and also dispatch regular task
const fetchUsers = ()=>{
    return function(dispatch){
        dispatch(fetchUserReq())
        axios
            .get("https://jsonplaceholder.typicode.com/users")
            .then((response)=>{
                const users = response.data.map((users)=>users.id);
                dispatch(fetchUserSuc(users));
            })
            .catch((error)=>{
                dispatch(fetchUserFail(error.message))
            })
    }
}

const store = redux.createStore(reducer,applyMiddleWare(thunkMiddleWare));
store.subscribe(()=>{
    console.log(store.getState());
})
store.dispatch(fetchUsers());
