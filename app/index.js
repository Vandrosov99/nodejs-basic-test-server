import express from "express";
import mongoose from 'mongoose'
import * as serverInfoKeys from './const/serverInfo.js';
import router from './views/postRouter.js';

const app = express();

app.use(express.json())//аби можна було читати джейсон
app.use('/api',router);

const startApp = async() => {
    try{
        await mongoose.connect(serverInfoKeys.DB_URL);
        app.listen(serverInfoKeys.PORT,()=>{
            console.log("SERVER IS LISTENING ON PORTs:" +  serverInfoKeys.PORT)
        })
    }catch (e){
        console.log(e)
    }
}

startApp();
