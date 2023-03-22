const userModel = require("../models/user")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const auth = require("../middlewear/auth")

const router = require("express").Router()

router.post("/signup", async(req,res)=>{
    try {
        const {email, password, confirmpassword} =req.body
        const existingUser = await userModel.findOne({email:email})
        if(existingUser)
        {
            return res.json({
                status:"failed",
                message:"user exits"
            })
        }

        const hashedPassword = await bcrypt.hash(password,10)
        const user = await userModel.create({
            email:email,
            password:hashedPassword,
            confirmpassword:password,
        })
        const token = await jwt.sign({email:user.email, id:user._id}, process.env.MY_JWT)
        res.json({
            status:"success",
            user,
            token
        })
    } catch (error) {
        res.json({
            status:"failed",
            message:error.message
        })
    }
})

router.post("/signin", async(req,res)=>{
    try {
        const{email,password} =req.body
        const existingUser = await userModel.findOne({email:email})
        if(!existingUser)
        {
            return res.json({
                status:"failed",
                message:"user not found"
            })
        }

        const matchPassword = await bcrypt.compare(password, existingUser.password)
        if(!matchPassword)
        {
            return res.json({
                status:"failed",
                message:"invalid credentials"
            })
        }

        const token = await jwt.sign({email:existingUser.email, id:existingUser._id}, process.env.MY_JWT)
        res.json({
            status:"success",
            existingUser,
            token
        })
    } catch (error) {
        res.json({
            status:"failed",
            message:error.message
        })
    }
})

router.post("/test", auth,(req,res)=>{
    console.log(req.userId);
})

module.exports = router