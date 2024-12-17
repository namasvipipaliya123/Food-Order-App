const express = require('express');
const router = express.Router();
const foodItemController = require('../controllers/foodItemController');
const auth = require('../middleware/auth');
const authorize = require('../middleware/role');

router.post('/:restaurantId', auth, authorize('Admin'), foodItemController.createFoodItem);
router.get('/:restaurantId', auth, foodItemController.getFoodItems);
router.put('/:id', auth, authorize('Admin'), foodItemController.updateFoodItem);
router.delete('/:id', auth, authorize('Admin'), foodItemController.deleteFoodItem);

module.exports = router;