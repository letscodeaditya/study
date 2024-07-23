const dbconnect = require('./mongo');

//to insert data in db

const insert = async () =>{
    const db = await dbconnect();
    const result = await db.insertMany(
        [
            {name:'max1', brand:'vivo',price:45,category:'mobile'},
            {name:'note 11', brand:'redmi',price:50,category:'mobile'},
            {name:'iphone14', brand:'apple',price:45,category:'mobile'},
        ]
    );

    //result return 3 thing acknowledge(true or false),insertedcount,inertedid

    if(result.acknowledged){
        console.log('data inserted')
    }else{
        console.log('error')
    }

}

insert();