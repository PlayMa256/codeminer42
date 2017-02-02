import express from 'express';
import routes from './routes';
import bodyParser from 'body-parser'
import mongoose from 'mongoose';
const app = express();

app.use("/api", routes);
app.use(bodyParser.json());
mongoose.connect("mongodb://localhost:port/database", () => {
	console.log('connected');
});

export default app;