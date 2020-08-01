// import dependencies and initialize the express router
import { Router } from 'express';
import { PostController } from '../controllers/PostController';

const appRoutes = Router();
const postController = new PostController();

appRoutes.get('', postController.index);

export { appRoutes };
