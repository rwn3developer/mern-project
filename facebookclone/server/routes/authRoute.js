const express = require('express')

const routes = express.Router();

const multer = require('multer')

const storage = multer.diskStorage({});

let upload = multer({storage:storage}).single('profilepic')

let cloudinary = require('../config/cloudinaryConfig');

const Register = require('../models/RegisterModel')

routes.post('/register',upload,async(req,res)=>{
    try{
        const {name,email,password,city,phone} = req.body;
        let imageUrl = await cloudinary.uploader.upload(req.file.path)
        let user = await Redister.create({
            name : name,
            email : email,
            password : password,
            city : city,
            phone : phone,
            profileimage : imageUrl.secure_url,
            public_id : imageUrl.public_id
        })
        return res.status(200).send({
            success : true,
            message : "User Successfully register",
            user
        })
    }catch(err){
        console.log(err);
        return false
    }
})

module.exports = routes;