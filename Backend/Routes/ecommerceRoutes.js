const express = require('express');
const router = express.Router();
const {createProduct,saleProduct} = require('../Controllers/ecomController');  

router.post('/product_input', createProduct);
//router.post('/product_input', createProduct);

router.get('/sales_product',saleProduct);  

module.exports = router;  
