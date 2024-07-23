// mongodb in node - npm install mongodb

//////////////this is a connection file//////////////////

// both are right way to import 

// const MongoClient = require('mongodb').MongoClient;
const {MongoClient} = require('mongodb');

//to specifi the db path
const url = 'mongodb://127.0.0.1:27017';
 
//to fetch data from your dbs 
const client = new MongoClient(url);


//making a seprate file for our connect here in the dbconnect() we didnt specify the opertion like find,update,delete etc so that we can put it in other file and just import the connect and write the querry/operation we want

async function dbconnect(){

    let result = await client.connect();
    let db = result.db('e-comm');
    return db.collection('product');
    // let response = await collection.find({}).toArray();
    // console.log(response);
}

module.exports = dbconnect;