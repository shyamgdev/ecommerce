const express = require('express');
const UserController = require('../controllers/UserControllers');
const ProductController = require('../controllers/ProductController');
const OrderController = require('../controllers/OrderController');
const CategoryController = require('../controllers/CategoryController');
const checkAuth = require('../middleware/auth');
const PaymentController = require('../controllers/PaymentController');
// const checkAuth = require('../middleware/auth');
const router = express.Router();

// USERS
router.get('/getalluser', UserController.getAllUser);
router.get('/getUser', checkAuth, UserController.getUser);
router.post('/register', UserController.register);
router.post('/login', UserController.login);
router.post('/updateProfile', checkAuth, UserController.updateProfile);
// PRODUCTS
router.get('/getallproducts', ProductController.getAllProducts);
router.get('/getproductDetails/:id', ProductController.getProductDetails);
router.post('/productinsert', ProductController.productInsert);
router.post('/updateproduct/:id', ProductController.updateProduct);
router.post('/deleteproduct/:id', ProductController.deleteProduct);
// CATEGORIES
router.get('/getAllCategories', CategoryController.getAllCategories);
router.get('/getCategoryDetails/:id', CategoryController.getCategoryDetails);
router.post('/categoryInsert', CategoryController.categoryInsert);
router.post('/updateCategory/:id', CategoryController.updateCategory);
router.post('/deleteCategory/:id', CategoryController.deleteCategory);

// ADDRESS
router.post('/newAddress', checkAuth, UserController.newAddress);
router.get('/address', checkAuth, UserController.getAllAddress);

// ORDERS
router.post('/newOrder', checkAuth, OrderController.newOrder);
router.get('/orders', checkAuth, OrderController.orders);

router.post("/pay", checkAuth, PaymentController.makePayment);
router.post('/payment/process', checkAuth, PaymentController.processPayment);

module.exports = router;