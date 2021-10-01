import Post from "../models/Post.js";

class PostController {
	async createPost(req, res) {
		try {
			const {author, title, content, img} = req.body;
			const post = await Post.create({author, title, content, img});

			res.status(200).json(post)
		} catch (e) {
			res.status(500).json(e)
		}
	}

	async getAllPosts(req, res) {
		try {
			const posts = await Post.find();

			res.status(200).json(posts);
		} catch (e) {

			res.status(500).json(e)
		}
	}

	async getPostById(req, res) {
		try {
			const {id} = req.params;

			if(!id){
				res.status(400).json({message:"no ID specified by get"});
			}
			const post = await Post.findById(id);

			res.status(200).json(post);
		} catch (e) {

			res.status(500).json(e)
		}
	}

	async updatePost(req, res) {
		try {
			const post = req.body;

			if(!post._id){
				res.status(400).json({message:"no ID specified by update"});
				return null;
			}
			const updatedPost = await Post.findByIdAndUpdate(post._id,post,{new:true});

			res.status(200).json(updatedPost);
		} catch (e) {

			res.status(500).json(e)
		}
	}

	async deletePostById(req, res) {
		console.log("DELETE IS STARTED")
		try {
			const {id} = req.params;

			if(!id){
				res.status(400).json({message:"no ID specified by delete"});
			}
			const post = await Post.findByIdAndDelete(id);

			res.status(200).json(post);
		} catch (e) {

			res.status(500).json(e)
		}
	}
}

export default new PostController();