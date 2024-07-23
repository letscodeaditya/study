console.warn('hi');
//to run on terminal - node ./first.js

//node is kinda old so it dont use same method for import like js
const nam = require('./for1/f1')
console.log(nam.z());


//filter it runs a loop by itself
let arr = [2,6,2,5,3,1,3];
//here i have all the element of array and we are passing it the this arrow function
let result = arr.filter((i)=>{
    return i == 3;
})
console.log(result);

