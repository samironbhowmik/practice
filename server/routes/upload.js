const postModel = require("../models/post")

const router = require("express").Router()

router.post("/post", async(req,res)=>{
    try {
        const {name, location} = req.body.data
        const {image} = req.body.file
        console.log(image);

        const user =  await postModel.create({
            name:name,
            location:location,
            image:image
        })
        res.json({
            status:"success",
            user
        })
    } catch (error) {
        res.json({
            status:"failed",
            message:error.message
        })
    }
})

router.get("/get", async(req,res)=>{
    try {
        const allPost = await postModel.find()
        res.json({
            status:"success",
            allPost
        })
    } catch (error) {
        res.json({
            status:"failed",
            message:error.message
        })
    }
})

module.exports = router