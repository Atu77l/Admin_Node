// adminRoutes.js
const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');

// Define admin routes
router.get('/admin', adminController);
// Other admin routes here

module.exports = router;
 