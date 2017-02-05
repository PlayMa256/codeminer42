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


ReportsController.losses = () => {
	// Points lost because of infected survivor.
};

// Average amount of each kind of resource by survivor (e.g. 5 waters per survivor)
ReportsController.averageMaterial = (req, res) => {
	

	// array with all the items

	//check all inventories

	//put ++ on the array with all the items.

	//return when everything is done.
		// THIS IS THE BIGGEST PROBLEM, BECAUSE I'M GONNA RUN EVERYTHING INSIDE A FUCKING PROMISE!!!!
		

};








export default ReportsController;