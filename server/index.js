import app from './app';
let server = app.listen(3000, () => {
	console.log("running on port 3000");
});

module.exports = server;