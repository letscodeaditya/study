const express =  require('express');
require('./mongoosconfig');
//importing model with the schema 
const product = require('./product');

///file for this api - mongoosconfig.js (connection file) , product.js(contain the schema of product collection, different collection will have different file for there schema)

//use postman to check use http://127.0.0.1:5000/ and different method (posy,get etc) in body use raw-json

const app =express();

//to make the string into json
app.use(express.json());



//posting data in db and giving input from postman

app.post('/create',async(req,resp)=>{
    //here we are sending data from postman 
    let data =new product(req.body);
    let result = await data.save();
    console.log(result);
    resp.send(result);
});





//get data from db 

app.get('/list',async (req,resp)=>{
    let data = await product.find();
    resp.send(data);
})






//delete method

//here we can taking the id of deleting element
//we can also pass the id in the body of postman/frontend
//req_params return a object containing _id
app.get('/delete/:_id',async(resp,req)=>{
    let data = await product.deleteOne(req.params);
    resp.send(data);
})





//update method (put)

//we can also pass the id in the body of postman/frontend
app.put('/update/:_id', async (resp,req)=>{
    let data = await product.updateOne(
        req.params,    //this take id no. from url parameter
        {
            $set: req.body  //taking input from body(postman/frontend)  to update
        }
    )
    // let result = await data.save();
})






// search api (to find a specific data)

app.get('/search/:key', async (resp,req)=>{
    let data = await product.find(
        {
            "$or":[
                {name:{$regex : req.params.key}},
                {brand:{$regex : req.params.key}}
            ]
        }
    )
})


app.listen(5000);