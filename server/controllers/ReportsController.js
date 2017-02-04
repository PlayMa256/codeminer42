import models from "./../Models";
const ReportsController = {};

ReportsController.numberOfSurvivors = () =>{
	const Survivor = models.Survivor;
	Survivor.find({"status":false}.count().then((amount) => {
		return amount;
	});
};

ReportsController.numberOfWalkers = () =>{
	const Survivor = models.Survivor;
	Survivor.find({"status":true}.count().then((amount) => {
		return amount;
	});
};

ReportsController.infecteds = () => {
	// Percentage of infected survivors.
	const numberOfSurvivors = this.numberOfSurvivors;
	const numberOfWalkers = this.number
};

ReportsController.nonInfecteds = (req, res) => {
	// Percentage of non-infected survivors.
};


ReportsController.losses = (req, res) => {
	// Points lost because of infected survivor.
};


ReportsController.averageMaterial = (req, res) => {
	// Average amount of each kind of resource by survivor (e.g. 5 waters per survivor)
};








export default ReportsController;