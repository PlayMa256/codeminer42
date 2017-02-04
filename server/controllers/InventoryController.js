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
			
			var tempOriginItems = [];
			var tempDestItems = [];
			var temp;

			items.forEach((toTradeItem) =>{
				originItems.forEach((originItem) => {
					if(toTradeItem.item_name === originItem.item_name){
						/// APLICAR CONDIÇOSE
						// temp = originItem.qty - toTradeItem.qty;
						// if(temp <= 0){
						// 	originItems.splice(1, originItems.indexOf(originItem));
						// }else{

						// }
					}
				});

				destinationItems.forEach((destItem) => {

				});
			});

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