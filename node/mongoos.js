//install npm i mongoose
//import it
const mongoose = require('mongoose');

//////important mongoose add 's' in every collection name/////

const main = async()=>{
    await mongoose.connect('mongodb://127.0.0.1:27017/e-comm');
    // schema is like putting some validation for ex user can only input name and price nothing more
    const proschema = new mongoose.Schema({
        name: String,
        price: Number
    });
    
    //models connect schema wiht database  here product is the colllection name
    const promodel = mongoose.model('products',proschema);
    
    let data = new promodel({name:'zenfone' , price : 50});
    
    let result = await data.save();
    
    console.log(result);
}

main();



/////crud with mongoose  statis////




mongoose.connect('mongodb://127.0.0.1:27017/e-comm');

const productschema = new mongoose.Schema({
    name:String,
    price:Number,
    brand:String,
    category:string
});

const saveindb = async()=>{
    const product = mongoose.model('products',productschema);
    let data = new product({name:'max 100',price:100,brand:'asus',category:mobile});
    const result = await data.save();
    console.log(result);
}




const updateindb = async()=>{
    const product = mongoose.model('products',productschema);
    let data = await product.updateOne({name: 'narzo'},{$set:{price:30 , name:'narzo 10'}})
    console.log(data);
}




const deleteindb = async()=>{
    const product = mongoose.model('products', productschema);
    let data = await product.deleteOne({name:'pixel'});
    console.log(data);
}


const findindb = async()=>{
    const product = mongoose.model('products',productschema);
    //this will print all
    let data = await product.find();
    //for specific
    let data1 = await product.find({name:'pixel'});
    console.log(data);
}

saveindb();
updateindb();
deleteindb();
findindb();