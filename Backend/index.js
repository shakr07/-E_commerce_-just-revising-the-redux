const express = require('express');
const mongoose = require('mongoose'); 
const ecommerceRoutes = require('./Routes/ecommerceRoutes');

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Mongodb connection function
const connectDB = async () => {
    const url = 'mongodb+srv://2020565265shashank:lumia540@cluster0.ffdquvp.mongodb.net/'; 
    try {
        await mongoose.connect(url);
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('MongoDB connection error:', error.message);
        process.exit(1); 
    }
};

// Call the monogdb connection function
connectDB();

// Use ecommerce routes
app.use('/api/ecommerce', ecommerceRoutes);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`);
});
