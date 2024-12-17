const mongoose = require('mongoose');

const FoodItemSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    description:{ type:String,required:true },
    restaurantId: { type: mongoose.Schema.Types.ObjectId, ref: 'Restaurant' },
    createdBy: ObjectId (Admin)
});

module.exports = mongoose.model('FoodItem', FoodItemSchema);