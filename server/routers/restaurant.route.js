const express = require('express');
const router = express.Router();
const restaurantController = require('../controllers/restaurantController');
const auth = require('../middleware/auth');
const authorize = require('../middleware/role');

router.post('/', auth, authorize('Superadmin'), restaurantController.createRestaurant);
router.get('/', auth, restaurantController.getRestaurants);
router.put('/:id', auth, authorize('Superadmin'), restaurantController.updateRestaurant);
router.delete('/:id', auth, authorize('Superadmin'), restaurantController.deleteRestaurant);

module.exports = router;