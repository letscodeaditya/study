//this is default fun it cant have any name while declaring it
//it can be use as a seter or getter for this file 
export default function(){
    console.log("default....");
}

//to use element of different file from same module
import {cook} from './user.js';


let account_no = 45632532;
let account_type = "saving";

export function withdraw(){
    console.log("amount deducted...");
}

export function deposit(){
    console.log("balance updated...");
}

export function money(){
    console.log("indian money..");
}