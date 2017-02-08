import models from "./../Models";
const InventoryController = {};

InventoryController.trade = (req, res) => {
	const {destSurvivorID, items_origin, items_dest} = req.body;
	const Survivor = models.Survivor;

	const originSurvivor = Survivor.findById(req.params.originId);
	const destSurvivor = Survivor.findById(destSurvivorID);

	var item_name, qty;
	var items_values_dest = 0;
	var items_values_origin = 0;


	// check if items has the same value
	items_origin.forEach(item => {
		switch(item.item_name){
			case "Water":
			items_values_origin += item.qty * 4;
			break;
			case "Food":
			items_values_origin += item.qty * 3;
			break;
			case "Ammunition":
			items_values_origin += item.qty * 1;
			break;
			case "Medication":
			items_values_origin += item.qty * 2;
			break;
		}
	});

	items_dest.forEach(item_dest => {
		switch(item_dest.item_name){
			case "Water":
			items_values_dest += item_dest.qty * 4;
			break;
			case "Food":
			items_values_dest += item_dest.qty * 3;
			break;
			case "Ammunition":
			items_values_dest += item_dest.qty * 1;
			break;
			case "Medication":
			items_values_dest += item_dest.qty * 2;
			break;
		}
	});

	if(items_values_dest === items_values_origin){
		originSurvivor.then(origin => {
			destSurvivor.then(dest => {
				if(origin.status === true || dest.status === true){
					res.status(500).json({
						"message": "One of them is a walker, trade is impossible"
					});
				}else{
					const originInventory = origin.inventory;
					const destInventory = dest.inventory;
					
					items_origin.forEach((originItems, i) => {
						item_name = originItems.item_name;
						qty = originItems.qty;	
						
						originInventory.forEach((originInv, i) => {
							if(originInv.item_name === item_name){
								originInv.qty -= qty;
							}
							if(originInv.qty === 0){
								originInventory.splice(i, 1);
							}
						});				

						destInventory.forEach((destinationInv) => {
							if(destinationInv.item_name != item_name){
							}else{
								destinationInv.qty += qty;
								items_origin.splice(i,1);
							}
						});

						destInventory.push(originItems);
					});

					items_dest.forEach((destinationItems, i) => {
						item_name = destinationItems.item_name;
						qty = destinationItems.qty;	

						destInventory.forEach((destInv, i) => {
							if(destInv.item_name === item_name){
								destInv.qty -= qty;
							}
							if(destInv.qty === 0){
								destInventory.splice(i, 1);
							}
						});				

						originInventory.forEach((originInv, i) => {
							if(originInv.item_name != item_name){

							}else{
								originInv.qty += qty;
								items_dest.splice(i,1);
							}
						});
						originInventory.push(destinationItems);
					});


					origin.save().then(originSaved => {
						dest.save().then(destSaved => {
							res.status(200).json({
								"message" : "trade successfully"
							});
						}).catch(errorSaving => {
							res.status(500).json({
								"message" : "error while trading, we couldnt save the destination inventory"				
							});
						});

					}).catch(errorSaving => {
						res.status(500).json({
							"message" : "error while trading, we couldnt save the origin inventory"				
						});
					});
				}	
			}).catch(error => {
				res.status(404).json({
					"message": "couldnt find the destination survivor"
				});
			});
		}).catch(error => {
			res.status(404).json({
				"message": "couldnt find the origin survivor"
			});
		});
	}else{
		res.status(500).json({
			"message": "the trade should have the same amount of point on either sides"
		});
	}
};
export default InventoryController;