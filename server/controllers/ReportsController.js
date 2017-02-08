import models from "./../Models";
const ReportsController = {};

ReportsController.numberOfSurvivors = function(){
	const Survivor = models.Survivor;
	return Survivor.find({"status":false}).count();
};

ReportsController.numberOfWalkers = () =>{
	const Survivor = models.Survivor;
	return Survivor.find({"status":true}).count();
};

ReportsController.total = () => {
	const Survivor = models.Survivor;
	return Survivor.count();
};

ReportsController.infecteds = (req, res) => {
	const numberOfWalker = ReportsController.numberOfWalkers();
	const total = ReportsController.total();
	numberOfWalker.then((amountInfected) => {
		total.then(totalAmnt => {
			res.status(200).json({
				"message" : ((amountInfected/totalAmnt)* 100)+"%"
			});
		}).catch((error) => {
			res.status(500).json({
				message: "Error while getting the total"
			});
		});
	}).catch((error) => {
		res.status(500).json({
			message: "Error while getting number of walkers"
		});
	});
}

ReportsController.nonInfecteds = (req, res) => {
	// Percentage of non-infected survivors.
	const numberOfSurvivors = ReportsController.numberOfSurvivors();
	const total = ReportsController.total();
	numberOfSurvivors.then((amountAlive) => {
		total.then(totalAmnt => {
			res.status(200).json({
				"message" : ((amountAlive/totalAmnt)*100)+"%"
			});
		}).catch(errror => {
			res.status(500).json({
				message: "Error while getting the total"
			});
		});
	}).catch(error => {
		res.status(500).json({
			message: "Error while getting number of walkers"
		});
	});
};


ReportsController.losses = (req, res) => {
	// Points lost because of infected survivor.
	const Survivor = models.Survivor;
	Survivor.find({"status":true}).then(walkers => {
		let amountLost = 0;
		walkers.inventory.forEach(inv => {
			switch(inv.item_name){
				case "Water":
				amountLost += inv.qty * 4;
				break;
				case "Food":
				amountLost += inv.qty * 3;
				break;
				case "Ammunition":
				amountLost += inv.qty * 1;
				break;
				case "Medication":
				amountLost += inv.qty * 2;
				break;
			}
		});

		res.status(200).json({
			"amountLost": amountLost
		});
	}).catch(error => {
		res.status(404).json({
			"message": "We had a problem finding walkers"
		});
	});


};

// Average amount of each kind of resource by survivor (e.g. 5 waters per survivor)
ReportsController.averageMaterial = (req, res) => {
	const Survivor = models.Survivor;
	Survivor.find({"status":false}).then(survivors => {
		const numberOfSurvivors = ReportsController.numberOfSurvivors();
		numberOfSurvivors.then(total => {
			let allItems = [0,0,0,0];
			survivors.forEach(survivor => {
				survivor.inventory.forEach(item => {
					switch(item.item_name){
						case "Water":
						allItems[0] += item.qty;
						break;
						case "Food":
						allItems[1] += item.qty;
						break;
						case "Ammunition":
						allItems[2] += item.qty;
						break;
						case "Medication":
						allItems[3] += item.qty;
						break;
					}
				});
			});

			let allItemsTemp = [0,0,0,0];
			allItems.forEach(i => {
				if(i===0){
					allItemsTemp[allItems.indexOf(i)] = i;	
				}else{
					allItemsTemp[allItems.indexOf(i)] = Math.round(i/total);
				}	
			});

			res.status(200).json({
				"Water": allItemsTemp[0],
				"Food" : allItemsTemp[1],
				"Ammunition" : allItemsTemp[2],
				"Medication" : allItemsTemp[3],
			});

		}).catch(error => {
			res.status(404).json({
				"message" : "we couldnt find the number of survivors"
			});
		});
		
	}).catch(error => {
		res.status(404).json({
			"message" : "we couldnt find all the survivors"
		});
	});
};

export default ReportsController;