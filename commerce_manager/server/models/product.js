const mongoose = require('mongoose');

// const ProductSchema = new mongoose.Schema({
    
//     title: {
//         type: String,
//         required: [
//             true,
//             "Please enter a title"
//         ],
//         minlength: [
//             3,
//             "Please enter a title of at least 3 characters"
//         ] 
//     },
//     price: {
//         type: Number,
//         required: [
//             true,
//             "Please enter a price"
//         ],
//         min: [
//             1,
//             "Please enter a price of at least 1 dollar"
//         ]
//     },
    
//     image_url: {
//         type: String
//     }

// }, { timestamps: true });

// mongoose.model('Product', ProductSchema);

const Product1Schema = new mongoose.Schema({
    
    title: {
        type: String,
        required: [
            true,
            "Please enter a title"
        ],
        minlength: [
            3,
            "Please enter a title of at least 3 characters"
        ] 
    },
    price: {
        type: Number,
        required: [
            true,
            "Please enter a price"
        ],
        min: [
            0,
            "Please enter a price of at least 0 dollar"
        ]
    },
    qty: {
        type: Number,
        required: [
            true,
            "Please enter a quantity"
        ],
        min: [
            0,
            "Please enter a quantity of zero or greater"
        ]
    }
    
  
}, { timestamps: true });
mongoose.model('Product1', Product1Schema);        
    