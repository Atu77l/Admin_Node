const express = require('express');
const router = express.Router();
const { getOrderList,getUserList,getProductList,
postOrderList,postUserList,postProductList,patchOrderItem,
patchUserItem,patchProductItem,deleteOrder,deleteUser,deleteProduct } = require('../controllers/userController');

router.get('/orderList', getOrderList);
router.gett('/userList', getUserList);
router.get('/productList', getProductList);
router.post('/orderList', postOrderList);
router.post('/userList', postUserList);
router.post('/product/:id', postProductList);
router.patch('/order/:id', patchOrderItem);
router.patch('/user/:id', patchUserItem);
router.patch('/productList', patchProductItem);
router.delete('/order/:id', deleteOrder);
router.delete('/user/:id', deleteUser);
router.delete('/product/:id', deleteProduct);
module.exports = router;
