import models from "./../Models";

const SurvivorsController = {};

SurvivorsController.add = (req, res) => {
	const {name, age, gender, lastLocation} = req.body;
	console.log(lastLocation);
	var Survivor = new models.Survivor({name, age, gender, lastLocation});

	Survivor.save()
	.then((newUser) => {
		res.status(200).json({
			success: true
		});
	}).catch((error) => {
		res.status(500).json({
			message: error
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
	const {survivorID} = req.body;
};

export default SurvivorsController;