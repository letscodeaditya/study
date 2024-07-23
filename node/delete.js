const dbconnect = require('./mongo');

const deldata = async () =>{
    let data = await dbconnect();

    //if there many same name record that you want to delete then use deletemany
    let result = await data.deleteOne(
        {name:'max1'}
    );


    //in this result it have a deletecounter if its 0 means nothing is deleted (no match data found to deleted)
    if(result.acknowledged){
        console.log('delete')
    }else{
        console.log("error")
    }
}

deldata();
