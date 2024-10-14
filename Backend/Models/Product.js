    const mongoose = require('mongoose');

    const productSchema = new mongoose.Schema({
        productName: { 
            type: String, 
            required: true 
        },
        brand:{
            type:String,
            required:true
        },
        content: { 
            type: String 
        },
        category: { 
            type: String, 
            ref: 'Category' 
        },
        price: { 
            type: Number, 
            required: true 
        },
        image: { 
            type: String 
        },
        color: { 
            type: String 
        },  
        likes: { 
            type: Number, default: 0 
        },
        rating: { 
            type: Number, 
            min: 0, max: 5 
        },
        quantitySold: { 
            type: Number, 
            min: 0
        }
        
    }, {
        timestamps: true 
        });

    module.exports = mongoose.model('Product', productSchema);
