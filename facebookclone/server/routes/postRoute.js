const express = require('express')

const routes = express.Router();

const multer = require('multer')

const storage = multer.diskStorage({});

const upload = multer({ storage: storage }).single('image'); 


routes.post('/addPost',upload,async(req,res)=>{
    try{
        console.log(req.file);
    }catch(err){
        console.log(err);
        return false;
    }
})


module.exports = routes;