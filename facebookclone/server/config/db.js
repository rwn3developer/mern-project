const mongoose = require('mongoose')

const connectDB = async() => {
    try{
        const con = await mongoose.connect("mongodb+srv://rwnmilan:rwnmilan@cluster0.tr84nrb.mongodb.net/socialmedia") 
        console.log(`Connect Mongodb ${con.connection.host}`);
    }
    catch(err){
        console.log(`Error in Mongodb ${err}`);
        return false;
    }
}

module.exports = {
    connectDB
}