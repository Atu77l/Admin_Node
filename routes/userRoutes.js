const express = require('express');
const router = express.Router();
const { signup, login } = require('../controllers/userController');

router.post('/signup', signup);
router.post('/login', login);
router.get('/productList',getProductList)
router.get('/product/:id',productItem)
router.get('orderList',orderList)
router.get('/order/:id',orderItem)

module.exports = router;
