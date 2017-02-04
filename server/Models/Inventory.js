import mongoose from 'mongoose';
const {Schema} = mongoose;
mongoose.Promise = global.Promise;

const InventorySchema = new Schema({
	items : [{
		item_name: String,
		qty: Number
	}]
});

const Inventory = mongoose.model('Inventory', InventorySchema);
export default Inventory;