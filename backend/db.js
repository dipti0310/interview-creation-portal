const mongoose =require('mongoose');

const mongoURI="mongodb+srv://dipti0310:dipti0310@cluster0.kby62.mongodb.net/interview-creation-portal"
// const mongoURI="mongodb://localhost:27017/interview-creation-portal?readPreference=primary&appname=MongoDB%20Compass&ssl=false"

const connectToMongo =()=>{
    mongoose.connect(mongoURI,()=>{
        console.log("Connected to mongodb server");
    })
}
module.exports=connectToMongo;