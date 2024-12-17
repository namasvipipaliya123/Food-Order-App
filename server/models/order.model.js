const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    name: { type: String, required: true },
    totalAmount: { type: Number, required: true },
    foodItems: [{ foodId: ObjectId, quantity: Number }],
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'Restaurant' },
    restaurantId: { type: mongoose.Schema.Types.ObjectId, ref: 'Restaurant' },
    status: { type: String, enum: ['pending', 'completed'], default: 'pending' }
});

module.exports = mongoose.model('FoodItem', OrderSchema );






  