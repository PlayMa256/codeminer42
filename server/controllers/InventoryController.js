import models from "./../Models";
const InventoryController = {};

InventoryController.trade = (req, res) => {
	const {destSurvivorID, items} = req.body;
	const Inventory = models.Inventory;
	const Survivor = models.Survivor;

	const originSurvivorInventory = Inventory.findById(req.params.id);
	const destSurvivorInventory = Inventory.FindById(destSurvivorID);

	originSurvivorInventory.then((origin) => {
		destSurvivorInventory.then((destination) => {
			var originItems = origin.items;
			var destinationItems = destination.items;
			
		}).catch((error) => {

		});
	}).catch((error) => {

	});


	// Inventory.findById(originID)
	// .then((originInventory) => {
	// 	Inventory.findById(destID)
	// 	.then((destInventory) => {

	// 	});
	// });
	
};


export default InventoryController;