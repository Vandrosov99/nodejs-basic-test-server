import Router from 'express';
import * as routerPaths from '../const/routerPaths.js';
import PostController  from "../controllers/PostController.js";
const router = new Router();

router.post(routerPaths.POSTS,PostController.createPost);
router.get(routerPaths.POSTS_ID,PostController.getPostById);
router.get(routerPaths.POSTS,PostController.getAllPosts);
router.put(routerPaths.POSTS,PostController.updatePost);
router.delete(routerPaths.POSTS_ID,PostController.deletePostById);

export default router;