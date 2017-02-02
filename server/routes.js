import express from 'express';
//import controller
import SurvivorsController from './controllers/SurvivorsController';
const router = express();

router.post("/survivors/create", SurvivorsController.add);

export default router;