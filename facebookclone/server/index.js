const express = require('express');

const port = 8000;

const app = express()

//database
const {connectDB} = require('./config/db')

//database call function 
connectDB()

app.use(express.json())

const cors = require('cors')


app.use(cors())


app.use(express.urlencoded())

app.use('/posts',require('./routes/postRoute'));
app.use('/auth',require('./routes/authRoute'));


app.listen(port,(err)=>{
    if(err){
        console.log(err);
        return false;
    }
    console.log(`server is start on port :- ${port}`);
})