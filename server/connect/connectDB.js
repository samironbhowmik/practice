const mongoose = require("mongoose")

const connectDB = ()=>{
    mongoose.connect("mongodb://localhost:27017/fs").then(()=>{
        console.log("Database connected");
    })
}

module.exports = connectDB