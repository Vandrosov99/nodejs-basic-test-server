import express from "express";
import mongoose from 'mongoose'
import * as serverInfoKeys from './const/serverInfo.js';
import Post from './models/Post.js';

const app = express();

app.use(express.json())//аби можна було читати джейсон

app.post('/',async (req,res)=>{
    try{
        console.log(req.body)
        const {author,title,content,img}=req.body;
        const post = await Post.create({author, title, content, img});

        res.status(200).json(post)
    }catch (e){
        res.status(500).json(e)
    }
})


const startApp = async() => {
    try{
        await mongoose.connect(serverInfoKeys.DB_URL);
        app.listen(serverInfoKeys.PORT,()=>{
            console.log("SERVER IS LISTENING")
        })
    }catch (e){
        console.log(e)
    }
}

startApp();
