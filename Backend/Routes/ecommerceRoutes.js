const express = require('express');
const router = express.Router();
const createProduct = require('../Controllers/ecomController');  


router.post('/product_input', createProduct);
//router.post('/product_input', createProduct);  

module.exports = router;  
