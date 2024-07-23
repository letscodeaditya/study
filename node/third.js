// //creating basic api

// const http = require('http');
// //importing data from data.js
// const data = require('./data');

// http.createServer((req,resp)=>{
//     //200 is response status code like 404 is for error (getapi standard) and type of data we sending
//     resp.writeHead(200,{'content-Type':'application\json'});
//     resp.write(JSON.stringify(data));
//     resp.end();
// }).listen(5000);







//taking input from command line and creating a file using file system module fs

const fs = require('fs');

//process.argv is object and arvg is arrgument vector it have a array with first two is path name and others are the parameter we write at the time of excution ex- node third.js hello hi
const input = process.argv;

//here first para is for file name.ext and other is for data
// fs.writeFileSync(input[2],input[3])

//use node third.js app.txt 'hello'

if(input[2] == 'add'){
    fs.writeFileSync(input[3],input[4])
}else if(input[2] == 'remove')
{
    //to delete a file
    fs.unlinkSync(input[3])
}
else{
    console.log("invalid input")
}
//use node third.js add app.txt 'hello'






//to create multiple file in a loop

const fs = require('fs');
const path = require('path');
//to set the path where we want our file to be stored , path is a module and join is a function here __dirname gives cuurent path root and to add new file in which our item will be store ,'filename' 
const dirpath = path.join(__dirname, 'for3');

for(i=0;i<5;i++)
{
    fs.writeFileSync( `${dirpath}/hello ${i}.txt`, "a simple text")
}

//to get all item names in a file
fs.readdir(dirpath,(err,files)=>{
    //it returns a array with all item name
    //using foreach to break the array to get idiviual item name and not in array
    files.forEach((item)=>{
        console.log(item);
    })
})





//curd

const fs = require('fs');
const path = require('path');
const { dir } = require('console');
const { promises } = require('dns');
const dirp = path.join(__dirname,'for3');
const filepath = `${dirp}/apple.txt`

fs.writeFileSync(filepath,'this is a text')

//to read or see the content of file here utf8 is used for removing buffer(memory location for node to run)
fs.readFile(filepath,'utf8',(err,item)=>{
    console.log(item);
})

//to add extra content to the file
fs.appendFile(filepath,' and this is extra text',(err)=>{
    if(!err) console.log("file is updated")
})

//to change the file name
fs.rename(filepath,`${dirp}/fruit.txt`,(err)=>{
    if(!err) console.log("filename is updated")
})

//to delete 
fs.unlinkSync(`${dirp}/fruit.txt`);





//asynchronous data

// let a = 20;
// let b= 0;

// setTimeout(()=>{
//     b = 20;
// },2000)

// console.log(a+b)


let a = 20;
let b = 0;

let wait = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve(30)
    }, 2000);
})

wait.then((data)=>{
    b = data;
    console.log(a+b)
})

//node working flow vid no.-17