const store = require('./app/store')
const cakeAction = require('./features/cake/cakeSlice').cakeActions;
const iceCreamAction = require('./features/ice/iceCreamSlice').iceCreamActions;
const fetchUsers = require("./features/user/userSlice").fetchUsers;

// console.log('initial state', store.getState());

const unsub = store.subscribe(()=>{
    // console.log('updated sate',store.getState())
})


store.dispatch(cakeAction.ordered())
store.dispatch(cakeAction.ordered())
store.dispatch(cakeAction.ordered())
store.dispatch(cakeAction.restocked(3))

// store.dispatch(iceCreamAction.ordered())
// store.dispatch(iceCreamAction.ordered())
// store.dispatch(iceCreamAction.ordered())
// store.dispatch(iceCreamAction.restocked(20))

store.dispatch(fetchUsers())
unsub();