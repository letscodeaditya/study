// //express

// const exp = require('express');
// const app = exp();

//here we are making a page on the go(html code) and sending it

// //get is a method to provide routes to make a page
// //here '' means root in url
// app.get('',(req,res)=>{
//     res.send(`<h1>hello thi is home page</h1>
//     <a href="/about">got to about page</a>
//     `);
// });
// //if any para send from browesr [in url /about?name=aditya]
// app.get('/about',(req,res)=>{
//     res.send(`hello thi is about page
//     <input type="text" placeholder="user name" value = "${req.query.name}" />
//     <button>click me</button>
//     <a href="/"> go to home page </a>
//     `);
// });

// app.listen(5000);






//make a seperate file for html pages here the file extension will also show in url
//all file are in public folder

// const express= require('express');
// const path =require('path');

// const app = express();
// //nav to the html pages path
// const publicpath = path.join(__dirname,'public');

// //static method is used to to static pages
// app.use(express.static(publicpath));

// app.listen(5000);







const exp = require('express');
const path = require('path');

const dirpath = path.join(__dirname,'public');
const app = exp();


app.get('',(req,res)=>{
    res.sendFile(`${dirpath}/index.html`)
});


//to create custom url and to hide .extension from url from above program
app.get('/a',(req,res)=>{
  res.sendFile(`${dirpath}/about.html`)
});


app.get('*',(req,res)=>{
  res.sendFile(`${dirpath}/help.html`)
});




app.listen(5000);