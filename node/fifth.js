//template engine - ejs(npm install ejs)
//dynamic page


const exp = require('express');
const path = require('path');


const app = exp();

//setting ejs
//create a views file and keep all the html file there with .ejs
app.set('view engine','ejs');


//we can send data to our pages
app.get('/profile',(req,res)=>{
    const user = {
        name : 'aditya',
        email : 'abc@gmail.com',
        city : 'kolkata',
        skill : ['php','js','css','node']
    }
    res.render('profile',{user});
});


app.get('/login', (req,res)=>{
    res.render('login');
})



//middleware is function we use to access and modify req and res of routes ex - authentication etc
// types-- 
// application-level middlew (global applied)
// Router-level (can specify routes)
// error-handling
// built-in middleware
// third-party middleware



//middleware condtion-check if the input matchs the condition 
// we are giving input in url 5000/user?age=10
//this request filter will work on every /path or route(global)  ex- /log,/login,/profile etc
//here next will let the user pass to the page which he is loading if above condition is satisfyed
const reqFilter = (req,resp,next)=>{
    if(!req.query.age)
    {
        resp.send("please provide age")
    }
    else if (req.query.age<18){
        resp.send("you can not access")
    }
    else
    {next();}
}

//application level - this middleware is applyed to all the routes (global) on the page only [use below code for appl level only]
app.use(reqFilter)


//route level - in this we can specify on which route we want the condition 
app.get('/log', reqFilter,(res,req)=>{
    res.render('log')
});


//to use/import middleware condition from other file ex- see middleware.js
const reqfilter = require('./middleware')


//if we dont want to write reqfilter on the route we want to be filter then use this below
const route = express.router();
route.use(reqFilter);
route.get('/log',(res,req)=>{
    res.render('log')
});
app.use('/',route);


app.listen(5500);