const express = require('express')

const routes = express.Router();

const cloudinary = require('../config/cloudinaryConfig')

const multer = require('multer')

const storage = multer.diskStorage({});

const upload = multer({ storage: storage }).single('image');

const PostModel = require('../models/PostModel')

const { verifyToken } = require('../config/verifyToken')

//user add post
routes.post('/addPost', verifyToken, upload, async (req, res) => {
    try {
        let imageUrl = await cloudinary.uploader.upload(req.file.path)
        const add = await PostModel.create({
            title: req.body.title,
            postimage: imageUrl.secure_url,
            public_id: imageUrl.public_id,
            userId: req.user.user._id
        })
        return res.status(200).send({
            success: true,
            message: 'Post successfully add',
            post: add
        })
    } catch (err) {
        console.log(err);
        return false;
    }
})

//user view post
routes.get('/viewPost', async (req, res) => {
    try {
        let posts = await PostModel.find({}).sort({ _id: -1 }).populate("userId")

        return res.status(200).send({
            success: true,
            message: 'Post successfully fetch',
            posts
        })
    } catch (err) {
        console.log(err);
        return false;
    }
})

//delete post
routes.delete('/deletePost', verifyToken, async (req, res) => {
    try {
        let postId = req.query.id;
        const imageUrl = await PostModel.findById(postId);
        await cloudinary.uploader.destroy(imageUrl.public_id)
        let posts = await PostModel.findByIdAndDelete(postId)
        return res.status(200).send({
            success: true,
            message: 'Post successfully delete',
            posts
        })
    } catch (err) {
        console.log(err);
        return false;
    }
})

//userwise editpost
routes.get('/editPost', verifyToken, async (req, res) => {
    try {
        let postId = req.query.postid;
        let posts = await PostModel.findById(postId)
        return res.status(200).send({
            success: true,
            message: 'Post successfully fetch',
            posts
        })
    } catch (err) {
        console.log(err);
        return false;
    }
})

//post update
routes.put('/updatePost', verifyToken, upload, async (req, res) => { 
    try {
        let postId = req.query.postid;
        let title = req.body.title;
        if (req.file) {
            let imageUrl = await PostModel.findById(postId);
            //remove image in cloudinary
            await cloudinary.uploader.destroy(imageUrl.public_id);
            let addimage = await cloudinary.uploader.upload(req.file.path);
            await PostModel.findByIdAndUpdate(postId, {
                title: req.body.title,
                postimage: addimage.secure_url,
                public_id: addimage.public_id,
            })
            return res.status(200).send({
                success : true,
                message : 'Post successfully update'
            })
        } else {
            let imageUrl = await PostModel.findById(postId);
            await PostModel.findByIdAndUpdate(postId, {
                title: req.body.title,
                postimage: imageUrl.secure_url,
                public_id: imageUrl.public_id,
            })
            return res.status(200).send({
                success : true,
                message : 'Post successfully update'
            })
        }

    } catch (err) {
        console.log(err);
        return false;
    }
})

//user like post
routes.post('/likePost', verifyToken, async (req, res) => {
    try {
        let likepost = await PostModel.findByIdAndUpdate(req.body.postId, {
            $push: {
                likes: req.user.user._id
            }
        })
        return res.status(200).send({
            success: true,
            message: "Like successfully",
            result: likepost
        })
    } catch (err) {
        console.log(err);
        return false;
    }
})

//user dislike post
routes.post('/dislikePost', verifyToken, async (req, res) => {
    try {
        let dislikepost = await PostModel.findByIdAndUpdate(req.body.postId, {
            $pull: {
                likes: req.user.user._id
            }
        })
        return res.status(200).send({
            success: true,
            message: "Dislike successfully",
            result: dislikepost
        })
    } catch (err) {
        console.log(err);
        return false;
    }
})


//add comment
routes.put('/addComment', verifyToken, async (req, res) => {
    try {
        let comments = {
            comment: req.body.comment,
            userId: req.user.user._id
        }
        let addcomment = await PostModel.findByIdAndUpdate(req.body.postId, {
            $push: { comments: comments }
        })
        return res.status(200).send({
            success: true,
            message: "Comment Successfully Add",
            result: addcomment
        })
    } catch (err) {
        console.log(err);
        return false;
    }
})

//postwise like and comment view
routes.get('/postwiseLikeCommentView', verifyToken, async (req, res) => {
    try {
        let postid = req.query.postid;
        let record = await PostModel.findById(postid).populate("likes", "name , profileimage").populate("comments.userId", "name , profileimage");

        return res.status(200).send({
            success: true,
            message: "Record successfully fetch",
            record
        })
    } catch (err) {
        console.log(err);
        return false;
    }
})


module.exports = routes;