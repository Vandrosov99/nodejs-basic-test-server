import Post from "../models/Post.js";

class PostController{
    async create(req,res){
        try{
            const {author,title,content,img}=req.body;
            const post = await Post.create({author, title, content, img});

            res.status(200).json(post)
        }catch (e){
            res.status(500).json(e)
        }
    }
}

export default new PostController();