//to import core module http - it handles server respons and request
const http = require('http');


//4500 is port no. here
//createserver is a function take a fun as a para
//we use resp to send client respon and we have to end it as well

http.createServer((req,resp)=>{
    resp.write("hi");
    resp.end();
}).listen(4500);

//or

function datac(req,resp){
        resp.write("hi");
        resp.end();
}      


http.createServer(datac).listen(4500);





//package.json contain all the detail about the code like dependency, version, commands, etc
//to create type 'npm init' in terminal
//to install any modules or package copy the code from the page

//package.json conatin the dependency details of the module or package we install so that if we send our code to other it will directly install all those dependc with correct version use "npm install"
//package-lock.json conatin furtur detail of package.json 



//npm i colors - is a node package

//using the install module
const col = require('colors')
//it will show in red
console.log("hihi".red)


//dont push node_module bec its big and kinda useless as everything is mention in packa so make a .gitignore and add name ex - /node_modules



//nodemon package helps use to not run our code again and again manualy install it globaly not just for one file use "npm i nodemon -g" here -g is for global
//run your code with "nodemon .\filename"



