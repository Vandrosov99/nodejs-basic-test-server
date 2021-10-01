import PostService from "../services/PostService.js";

class PostController {
	async createPost(req, res) {
		try {
			const post = await PostService.createPost(req.body)
			res.status(200).json(post)
		} catch (e) {
			res.status(500).json(e)
		}
	}

	async getAllPosts(req, res) {
		try {
			const posts = await PostService.getAllPosts();

			res.status(200).json(posts);
		} catch (e) {

			res.status(500).json(e)
		}
	}

	async getPostById(req, res) {
		try {
			const post = await PostService.getPostById(req.params.id)

			res.status(200).json(post);
		} catch (e) {

			res.status(500).json(e)
		}
	}

	async updatePost(req, res) {
		try {
			const updatedPost = await PostService.updatePost(req.body);

			res.status(200).json(updatedPost);
		} catch (e) {
			res.status(500).json(e.message)
		}
	}

	async deletePostById(req, res) {
		try {
			const post = await PostService.deletePostById(req.params.id);

			res.status(200).json(post);
		} catch (e) {

			res.status(500).json(e)
		}
	}
}

export default new PostController();