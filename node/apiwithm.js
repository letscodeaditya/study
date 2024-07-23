const express = require('express');
const dbconnect = require('./mongo');
const app = express();

//use postman to check use http://127.0.0.1:5000/ and different method (posy,get etc) in body use raw-json




//get api - we cant send body with get method

app.get('/',async (req,resp)=>{
    let data = await dbconnect();
    data = await data.find().toArray();
    console.log(data)
    resp.send(data)
})






//post api
//to convert into a json
app.use(express.json());

// Middleware Concept:
// Middleware functions in Express.js are functions that have access to the request object (req), the response object (res), and the next function in the application's request-response cycle. They can perform various tasks, modify the request or response objects, or end the request-response cycle.

// express.json() Middleware:
// The express.json() middleware specifically deals with JSON data in the request payload. It is provided by the express framework and is part of a collection of middleware functions that handle common tasks.

// Request Parsing:
// When a client sends a request to your server with JSON data in the body (common for POST or PUT requests), the express.json() middleware checks the Content-Type header of the incoming request. If the content type is application/json, it assumes the request contains JSON data.

// Parsing JSON Data:
// The middleware then parses the JSON data in the request body into a JavaScript object. This parsed object is assigned to the req.body property. This makes it convenient for developers to work with JSON data in their route handlers.



app.post('/',async (req,resp)=>{
    let data = await dbconnect();
    //here req.body have the data which is sended/posted by the user
    let result = await data.insertOne(req.body);
    resp.send(result);
})







//put api - to update 
// (sending data from postman) to update price of the name pixel
// {
//     "name": "pixel",
//     "brand": "google",
//     "price": 300,
//     "category":"mobile"
// }

app.put('/', async (req,resp)=>{
    let data = await dbconnect();

    // both are same
    // let result = data.updateOne({name:'pixel'},{$set:req.body});
    let result = data.updateOne({name :req.body.name},{$set:req.body});

    //if the request is from url
    //add /:name in route
    // let result = data.updateOne({name : req.params.name},{$set: req.body})


    // resp.send({result:"update"})
})





//delete api


const mongodb = require('mongodb');

app.delete('/:id',async(req,resp)=>{
    const data = await dbconnect();
    //we can also use name 
    //to pass objectid we have to convert it in mongodb object using this 
    const  result = data.deleteOne({__id: new mongodb.objectId(req.params.id)});

})








app.listen(5500);