const mongoose =require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const mongoURI=process.env.MONGO_URI+"";
// const mongoURI="mongodb://localhost:27017/interview-creation-portal?readPreference=primary&appname=MongoDB%20Compass&ssl=false"

const connectToMongo =()=>{
   
    mongoose.connect(mongoURI,()=>{
        console.log("Connected to mongodb server");
    })
}
module.exports=connectToMongo;