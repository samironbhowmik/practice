const express = require("express")
const dotenv = require("dotenv")
const connectDB = require("./connect/connectDB")
const router = require("./routes/signin-signup")
const cors = require("cors")
const upload = require("./routes/upload")

const app = express()
dotenv.config()
app.use(express.json())
// app.use(express.urlencoded())

app.use(cors())

// app.use((req,res,next)=>{
//     console.log("HTTP Method - "+req.method+ ", URL - " + req.url);
//     next()
// })
app.use("/", router)
app.use("/",upload)

app.use(express.json({limit:"5mb"}))
app.use(express.static(__dirname + 'images'))

app.listen(process.env.PORT, async(req,res)=>{
    await connectDB()
    console.log(`App connected at port ${process.env.PORT}`);
})