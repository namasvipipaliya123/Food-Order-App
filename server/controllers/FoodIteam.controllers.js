const FoodItem = require('../models/FoodItem');

exports.createFoodItem = async (req, res) => {
    try {
        const foodItem = new FoodItem({ ...req.body, restaurantId: req.params.restaurantId });
        await foodItem.save();
        res.status(201).send(foodItem);
    } catch (error) {
        res.status(400).send(error);
    }
};

exports.getFoodItems = async (req, res) => {
    try {
        const foodItems = await FoodItem.find({ restaurantId: req.params.restaurantId });
        res.send(foodItems);
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.updateFoodItem = async (req, res) => {
    try {
        const foodItem = await FoodItem.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!foodItem) return res.status(404).send('Food item not found');
        res.send(foodItem);
    } catch (error) {
        res.status(400).send(error);
    }
};

exports.deleteFoodItem = async (req, res) => {
    try {
        const foodItem = await FoodItem.findByIdAndDelete(req.params.id);
        if (!foodItem) return res.status(404).send('Food item not found');
        res.send(foodItem);
    } catch (error) {
        res.status(500).send(error);
    }
};