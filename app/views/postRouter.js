import Router from 'express';
import * as routerPaths from '../const/routerPaths.js';
import PostController  from "../controllers/PostController.js";
const router = new Router();

router.post(routerPaths.POSTS,PostController.create);
/*router.get(routerPaths.POSTS);
router.get(routerPaths.POSTS_ID);
router.put(routerPaths.POSTS);
router.delete(routerPaths.POSTS_ID);*/

export default router;