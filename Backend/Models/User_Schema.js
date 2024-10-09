const mongoose=require("mongoose");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    address: {
        street: { type: String },
        city: { type: String },
        state: { type: String },
        zip: { type: String },
        country: { type: String }
    },
    phone: {
        type: String
    },
    cart: [{
        productId: { 
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'Product' 
        },
        quantity: { type: Number, default: 1 }
    }],
    orders: [{
        orderId: { 
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'Order' 
        },
        orderDate: { type: Date, default: Date.now },
        status: { type: String, default: 'Pending' }
    }],
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    }
}, {
    timestamps: true
});

module.exports=mongoose.model('user',userSchema);