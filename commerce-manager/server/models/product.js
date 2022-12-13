const mongoose = require('mongoose'); 

const ProductSchema = new mongoose.Schema({
   
    name: {
        type: String,
        required: [
            true,
            "Please enter name of product"
        ],
        minlength: [
            3, 
            "Please enter name of at least 3 characters"
        ]
    },

    qty: {
        type: Number,
        required: [
            true,
            "Please enter a quantity"
        ],
        min: [
            1,
            "Please enter a quantity greater than 1"
        ]
    },

    price: {
        type: Number,
        required: [
            true,
            "Please enter a price"
        ],
        min: [
            1,
            "Please enter a price greater than 1"
        ]
    }
}, { timestamps: true});

mongoose.model('Product', ProductSchema); 