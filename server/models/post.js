const mongoose = require("mongoose")

const postSchema = mongoose.Schema({
    name:String,
    location:String,
    image:String
})
const postModel = mongoose.model("postModel", postSchema)
module.exports = postModel