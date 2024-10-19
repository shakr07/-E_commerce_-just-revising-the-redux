const Product = require('../Models/Product.js');

// Create a product
const createProduct = async (req, res) => {
  try {
    console.log(req.body)
    var Data=await new Product(req.body);

   Data.save();
   res.send("item saved to database");
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
};

const saleProduct=async(req,res)=>{
try {
  const result= await Product.find({disCOunt:true}).sort({ timestamp: -1 }).limit(3);
  console.log(result)
  res.status(200).send(result);
} catch (error) {
  res.status(404).json({message:error.message});
}
  
}

const newArrival=async(req,res)=>{
try {
  const result=await Product.find({disCOunt:false}).sort({timestamp:-1}).limit(4);
  res.status(200).send(result);
} catch (error) {
  res.status(500).json({message:error.message});
}
}


module.exports = {createProduct,saleProduct,newArrival};  