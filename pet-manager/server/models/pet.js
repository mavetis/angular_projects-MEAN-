const mongoose = require('mongoose');

const PetSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [
            true,
            "Please enter a name for your pet"
        ],
        minlength: [
            3,
            "Pet name needs to be at least 3 characters"
        ]
    },
    type: {
        type: String,
        required: [
            true, 
            "Please enter type of pet"
        ],
        minlength: [
            3,
            "Pet type needs to be at least 3 characters"
        ]
    },
    description: {
        type: String,
        required: [
            true,
            "Please describe your pet"
        ],
        minlength: [
            3,
            "Description needs to be at least 3 characters"
        ]
    },
    image_url: {
        type: String
    },
    skill1: {
        type: String,
        required: [
            false
        ]
    },
    skill2: {
        type: String,
        required: [
            false
        ]
    },
    skill3: {
        type: String,
        required: [
            false
        ]
    },
    likes: {
        type: Number,
        required: [
            false
        ],
        default: 0    
    }

}, { timestamps: true });

mongoose.model('Pet', PetSchema); 