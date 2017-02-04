import models from "./../Models";

const SurvivorsController = {};

SurvivorsController.add = (req, res) => {
	const {name, age, gender, lastLocation, inventory} = req.body;

	var Inventory = new models.Inventory({items: inventory});
	var Survivor = new models.Survivor({name, age, gender, lastLocation, status: false, reports: 0});

	Inventory.save()
	.then((inventory) => {
		Survivor.inventory = inventory;
		Survivor.save()
		.then((newUser) => {
			res.status(200).json({
				success: true,
				data: inventory,
				data2: newUser
			});
		}).catch((error) => {
			res.status(500).json({
				message: "Cannot create survivor"
			});
		});
	}).catch((error) => {
		res.status(500).json({
			message: "Cannot create inventory"
		});
	});
	
};

SurvivorsController.update = (req, res) => {
	const survivorID = req.params.id;
	const lastLocation = req.body.lastLocation;
	var Survivor = models.Survivor;

	Survivor.findById(survivorID)
	.then((survivor) => {
		survivor.lastLocation = lastLocation;
		survivor.save().then((saved) => {
			res.status(200).json({
				message: "updated successfully"
			});
		}).catch((error) => {
			res.status(500).json({
				message: error
			})
		});
	}).catch((error) => {
		res.status(500).json({
			message: "Cannot find a Survivor with this ID"
		});
	});


};

SurvivorsController.flag = (req, res) => {
	const survivorID = req.params.id;
	var Survivor = models.Survivor;

	Survivor.findById(survivorID)
	.then((survivor) => {
		if(survivor.reports === undefined){
			survivor.reports = 0;
		}
		survivor.reports++;
		if(survivor.reports === 3 && survivor.status !== undefined && survivor.status !== true){
			survivor.status = true;
		}else if(survivor.status === true){
			res.status(200).json({
				message: "survivor is already contaminated! He is a walker!!"
			});
		}
		survivor.save()
		.then((saved) => {
			res.status(200).json({
				message: "survivor flaged successfully"
			});
		})
		.catch((errorSaved) => {
			res.status(500).json({
				message: "Survivor couldnt be flagged",
				error: errorSaved
			});
		});

	}).catch((error) => {
		res.status(500).json({
			message: "Cannot find survivor"
		});
	});
};


export default SurvivorsController;