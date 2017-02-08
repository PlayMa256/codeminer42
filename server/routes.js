import express from 'express';
//import controller
import SurvivorsController from './controllers/SurvivorsController';
import InventoryController from './controllers/InventoryController';
import ReportsController from './controllers/ReportsController';
const router = express();

router.post("/survivors/create", SurvivorsController.add);
router.put("/survivors/update/:id", SurvivorsController.update);
router.get("/survivors/flag/:id", SurvivorsController.flag);
router.post("/survivors/:originId", InventoryController.trade);
router.get("/survivors/who-are-you", SurvivorsController.whoAreYou);

router.get("/reports/infecteds", ReportsController.infecteds);
router.get("/reports/survivors", ReportsController.nonInfecteds);
router.get("/reports/averageMaterial", ReportsController.averageMaterial);
router.get("/reports/losses", ReportsController.losses);

router.get("/survivors/who-are-you")

export default router;