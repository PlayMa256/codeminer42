import mongoose from 'mongoose';
const {Schema} = mongoose;
mongoose.Promise = global.Promise;

const SurvivorSchema = new Schema({
	name: String,
	age: Number,
	gender: String,
	lastLocation: [{
		lastLong: Number,
		lastLat: Number,
	}],
	status: Boolean,
	reports: Number,
	inventory: Schema.Types.ObjectId
});

const Survivor = mongoose.model('Survivor', SurvivorSchema);
export default Survivor;