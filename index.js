import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import posts from './routers/posts.js'
import mongoose from 'mongoose'

const URI = 'mongodb+srv://luonghuy0406:Luonghuy1998@cluster-mern-2.n0hukru.mongodb.net/?retryWrites=true&w=majority'

const app = express()
const PORT = process.env.port || 5000
//limit data submit from client is 30mb
app.use(bodyParser.json({limit:'30mb'}))
app.use(bodyParser.urlencoded({extended:true,limit:'30mb'}))
//
app.use(cors())
app.get('/',(req,res)=>{
    res.send("SUCCESS")
})
app.use('/posts',posts)

mongoose.connect(URI,{useNewUrlParser:true, useUnifiedTopology:true})
.then(()=>{
    console.log('connected to db')
    app.listen(PORT,()=>{
        console.log(`Server is running on port ${PORT}`)
    })
})
.catch((err)=>{
    console.log(err)
})
