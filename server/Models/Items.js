import mongoose from 'mongoose';
const {Schema} = mongoose;
mongoose.Promise = global.Promise;

const Inventory = new Schema({
	item_name: String,
	amount: Number
});

export default Inventory;