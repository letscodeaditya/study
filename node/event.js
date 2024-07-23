const express = require('express');
// here event is a class
const EventEmitter = require('events');
const app = express();

//creating a object of that class
const event = new EventEmitter();

let count = 0;

//creating a event function whenever api is called by the get this will also be called as its name is given in emit
event.on('countapi',()=>{
    count++;
    console.log('event called',count)
})
event.on('countapi2',()=>{
    console.log('event called for update')
})



app.get('/',(resp,req)=>{
    resp.send('api called');
    //here a event is called or generated like in case of button we do onclick
    event.emit('countapi');
})

app.get('/search',(resp,req)=>{
    resp.send('search api called')
    event.emit('countapi');
})

app.get('/update',(resp,req)=>{
    resp.send('update api called')
    event.emit('countapi2');
})


app.listen(5000);