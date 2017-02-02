import express from 'express';
//import controller
import ZombiesController from './controllers/ZombiesController';
const router = express();

router.get("/a", ZombiesController.get);

export default router;