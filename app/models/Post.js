import mongoose from 'mongoose';
import * as modelsNames from './../const/modelNames.js'

const Post = new mongoose.Schema({
    author:{type:String,required:true},
    title:{type:String,required:true},
    content:{type:String,required:true},
    img:{type:String}
})

export default  mongoose.model(modelsNames.POST,Post);
