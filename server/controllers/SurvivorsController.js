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

};

SurvivorsController.flag = (req, res) => {
	const {survivorID} = req.body;
};

export default SurvivorsController;