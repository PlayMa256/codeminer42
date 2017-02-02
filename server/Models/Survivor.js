import mongoose from 'mongoose';
const {Schema} = mongoose;
mongoose.Promise = global.Promise;

const Survivor = new Schema({
	name: String,
	age: Number,
	gender: String,
	lastLocation: [{
		lastLong: Number,
		lastLong: Number,
	}],
	status: Boolean,
	reports: Number,
	inventory: [Schema.Types.ObjectId]
});

export default Survivor;