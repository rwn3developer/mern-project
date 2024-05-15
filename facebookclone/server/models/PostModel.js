const mongoose = require('mongoose')

const postschema = mongoose.Schema({
    title : {
        type : String,
        required : true
    },
    postimage : {
        type : String,
        required : true
    },
    public_id : {
        type : String,
        required : true
    }
})

const post = mongoose.model('post',postschema);
module.exports = post