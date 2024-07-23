const dbconnect = require('./mongo');

const updata = async ()=>{
    let data = await dbconnect();
    //this will update only one if there are 2 same then the first one will be updated
    let result = await data.updateOne(
        {name:'m40'},{$set:{name:'vision8'}}
    );

    // let result = await data.updateMany(
    // {name:'m40'},{$set:{name:'vision8',price:100}}
    // );


    //result return 3 thing acknowledge(true or false),insertedcount,inertedid
    if(result.acknowledged){
        console.log('updated')
    }else{
        console.log("error")
    }

}

updata();