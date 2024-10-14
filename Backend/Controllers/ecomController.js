const Product = require('../Models/Product.js');

// Create a product
const createProduct = async (req, res) => {
  try {
    console.log(req.body)
    var Data=await new Product(req.body);

   Data.save();
   res.send("item saved to database");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = createProduct;  