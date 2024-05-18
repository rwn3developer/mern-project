const express = require('express')

const routes = express.Router();

const cloudinary = require('../config/cloudinaryConfig')

const multer = require('multer')

const storage = multer.diskStorage({});

const upload = multer({ storage: storage }).single('image'); 

const PostModel = require('../models/PostModel')

const {verifyToken} = require('../config/verifyToken')


routes.post('/addPost',verifyToken,upload,async(req,res)=>{
    try{
            let imageUrl = await cloudinary.uploader.upload(req.file.path)
            const add = await PostModel.create({
            title : req.body.title,
            postimage : imageUrl.secure_url,
            public_id : imageUrl.public_id,
            userId : req.user.user._id
        })
        return res.status(200).send({
            success : true,
            message : 'Post successfully add',
            post : add
        })
    }catch(err){
        console.log(err);
        return false;
    }
})


routes.get('/viewPost',async(req,res)=>{
    try{
       let posts = await PostModel.find({}).populate("userId")
        return res.status(200).send({
            success : true,
            message : 'Post successfully fetch',
            posts
        })
    }catch(err){
        console.log(err);
        return false;
    }
})


module.exports = routes;