import mongoose from 'mongoose';
const {Schema} = mongoose;
mongoose.Promise = global.Promise;

const SurvivorSchema = new Schema({
	_id: Number,
	name: String,
	age: Number,
	gender: String,
	lastLocation: [{
		lastLong: Number,
		lastLat: Number,
	}],
	status: Boolean,
	reports: Number,
	inventory: [{
		item_name: String,
		qty: Number
	}]
});

const Survivor = mongoose.model('Survivor', SurvivorSchema);
export default Survivor;