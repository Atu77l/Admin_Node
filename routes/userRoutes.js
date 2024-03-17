// userRoutes.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Define user routes
router.get('/profile', userController.getUserProfile);
// Other user routes here

module.exports = router;
