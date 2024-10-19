const express = require('express');
const mongoose = require('mongoose'); 
const cors = require('cors'); // Import CORS
const ecommerceRoutes = require('./Routes/ecommerceRoutes');

const app = express();

app.use(express.json());

app.use(cors()); 

const connectDB = async () => {
    const url = 'mongodb+srv://2020565265shashank:lumia540@cluster0.ffdquvp.mongodb.net/'; 
    try {
        await mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('MongoDB connection error:', error.message);
        process.exit(1); 
    }
};

// Call the MongoDB connection function
connectDB();

// Use ecommerce routes
app.use('/api/ecommerce', ecommerceRoutes);
app.use('/api/sales',ecommerceRoutes);
app.use('/api/new_Arrival',ecommerceRoutes);
const PORT =  8000;
app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`);
});
