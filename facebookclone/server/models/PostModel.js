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
    },
    userId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'user'
    },
    likes : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : "user"
        }
    ],
    comments : [{
        comment : {
            type : String,
            required : true
        },
        userId : {
            type : mongoose.Schema.Types.ObjectId,
            ref : "user"
        }
        

    }]
})

const post = mongoose.model('post',postschema);
module.exports = post