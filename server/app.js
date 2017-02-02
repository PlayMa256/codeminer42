import express from 'express';
import router from './routes';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
const app = express();


app.use(bodyParser.json());

app.use("/api", router);

mongoose.connect("mongodb://localhost:27017/codeminer", () => {
	console.log('connected');
});

export default app;