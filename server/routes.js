import express from 'express';
//import controller
import SurvivorsController from './controllers/SurvivorsController';
import InventoryController from './controllers/SurvivorsController';
const router = express();

router.post("/survivors/create", SurvivorsController.add);
router.put("/survivors/update/:id", SurvivorsController.update);
router.get("/survivors/flag/:id", SurvivorsController.flag);
router.post("/survivors/:id/trade", InventoryController.trade);

export default router;