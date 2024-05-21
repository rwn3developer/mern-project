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
       let posts = await PostModel.find({}).sort( { _id: -1 } ).populate("userId")

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

routes.post('/likePost',verifyToken,async(req,res)=>{
    try{
        let likepost = await PostModel.findByIdAndUpdate(req.body.postId,{
            $push : {
                likes : req.user.user._id
            }
        })
        return res.status(200).send({
            success : true,
            message : "Like successfully",
            result : likepost
        })
    }catch(err){
        console.log(err);
        return false;
    }
})

routes.post('/dislikePost',verifyToken,async(req,res)=>{
    try{
        let dislikepost = await PostModel.findByIdAndUpdate(req.body.postId,{
            $pull : {
                likes : req.user.user._id
            }
        })
        return res.status(200).send({
            success : true,
            message : "Dislike successfully",
            result : dislikepost
        })
    }catch(err){
        console.log(err);
        return false;
    }
})


//add comment
routes.post('/addComment',verifyToken,async(req,res)=>{
    try{
        let comments = {
            comment : req.body.comment,
            userId : req.user.user._id
        }
        console.log(comments);
        let addcomment = await PostModel.findByIdAndUpdate(req.body.postId,{
            $push : { comments : comments }
        })
        return res.status(200).send({
            success : true,
            message : "Comment Successfully Add",
            result : addcomment
        })
    }catch(err){
        console.log(err);
        return false;
    }
})


module.exports = routes;