const express = require('express');
const router = express.Router();
const {createProduct,saleProduct,newArrival} = require('../Controllers/ecomController');  

router.post('/product_input', createProduct);
//router.post('/product_input', createProduct);

router.get('/sales_product',saleProduct);  

router.get('/newArrival',newArrival);  

module.exports = router;  
