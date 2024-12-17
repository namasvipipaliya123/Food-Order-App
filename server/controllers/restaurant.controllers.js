const Restaurant = require('../models/Restaurant');

exports.createRestaurant = async (req, res) => {
    try {
        const restaurant = new Restaurant(req.body);
        await restaurant.save();
        res.status(201).send(restaurant);
    } catch (error) {
        res.status(400).send(error);
    }
};

exports.getRestaurants = async (req, res) => {
    try {
        const restaurants = await Restaurant.find();
        res.send(restaurants);
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.updateRestaurant = async (req, res) => {
    try {
        const restaurant = await Restaurant.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!restaurant) return res.status(404).send('Restaurant not found');
        res.send(restaurant);
    } catch (error) {
        res.status(400).send(error);
    }
};

exports.deleteRestaurant = async (req, res) => {
    try {
        const restaurant = await Restaurant.findByIdAndDelete(req.params.id);
        if (!restaurant) return res.status(404).send('Restaurant not found');
        res.send(restaurant);
    } catch (error) {
        res.status(500).send(error);
    }
};