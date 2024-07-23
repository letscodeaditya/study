//install a package multer - npm i multer

const express = require('express');
const multer = require('multer');
const app = express();


const upload = multer({
    storage: multer.diskStorage({
        //where to store file
        destination: function(req,file,cb){
            cb(null, 'uploads')
        }, 
        //file name for that
        filename: function(req, file, cb){
            cb(null, file.fieldname + "-" + Date.now() + ".jpeg")
        } 
    })
}).single('user_file');  //this is for input name from frontend

app.post('/upload', upload, (resp,req)=>{
    resp.send('file uploaded');
});

app.listen(5000);