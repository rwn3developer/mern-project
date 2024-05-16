const mongoose = require('mongoose')

const registerschema = mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    },
    city : {
        type : String,
        required : true
    },
    phone : {
        type : String,
        required : true
    },
    profileimage : {
        type : String,
        required : true
    },
    public_id : {
        type : String,
        required : true
    }
})
const register = mongoose.model('user',registerschema);
module.exports = register