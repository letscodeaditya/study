// mongodb in node - npm install mongodb

// both are right way to import 

// const MongoClient = require('mongodb').MongoClient;
const {MongoClient} = require('mongodb');

//to specifi the db path
const url = 'mongodb://127.0.0.1:27017';
 
//to fetch data from your dbs 
const client = new MongoClient(url);


// async function getData(){
//     //this client will return a promise
//     let result = await client.connect();
//     let db = result.db('e-comm');
//     let collection = db.collection('product');
        //for specific find({name:'iphone12'})
//     let response = await collection.find({}).toArray();
//     console.log(response);
// }
//getData();






//making a seprate file for our connect here in the dbconnect() we didnt specify the opertion like find,update,delete etc so that we can put it in other file and just import the connect and write the querry/operation we want here


//import the below code (connection file) from mongo.js
const dbconnect = require('./mongo');


// async function dbconnect(){

//     let result = await client.connect();
//     let db = result.db('e-comm');
//     return db.collection('product');

// }


//writing the opertion we want----


// 2 ways of handling a promise ... in this we are getting 2 promise from the database thats why 2 .then and await

dbconnect().then((resp)=>{
    //here we use again .then bec toarray also return a promise
    resp.find({}).toArray().then((data)=>{
        console.log(data)
    })
})

//if we dont want to use .then we can use asyn function and await to handle promise

const main = async()=>{
    //this will start connection with database
    let data = await dbconnect();
    //here we are passing a querry/opertion with toarray to print the array 
    data = await data.find().toArray();
    console.log(data);
}
main();
