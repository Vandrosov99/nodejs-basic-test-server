import Post from "../models/Post.js";

class PostService {
	async createPost(post) {
		const createdPost = await Post.create(post);

		return createdPost;
	}

	async getAllPosts() {
		const posts = await Post.find();

		return posts;
	}

	async getPostById(id) {
		if (!id) {
			throw new Error("no ID specified by get");
		}

		const post = await Post.findById(id);

		return post;
	}

	async updatePost(post) {
		console.log(post)
		if (!post._id) {
			throw new Error(("No ID by update"))
		}
		const updatedPost = await Post.findByIdAndUpdate(post._id, post, {new: true});

		return updatedPost;
	}

	async deletePostById(id) {
		console.log(id)
		if (!id) {
			throw new Error(("No ID by delete"))
		}

		const post = await Post.findByIdAndDelete(id);

		return post;
	}
}

export default new PostService();