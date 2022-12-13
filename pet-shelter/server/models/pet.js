const mongoose = require('mongoose');

const PetSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [
            true,
            "Please enter a name"
        ],
        minlength: [
            3, 
            "Please enter a name of at least 3 characters"
        ]
    },

    type: {
        type: String,
        required: [
            true, 
            "Please enter pet type"
        ],
        minlength: [
            3,
            "Please enter a pet type of at least 3 characters"
        ]
    },

    description: {
        type: String,
        required: [
            true,
            "Please enter a description of pet"
        ],
        minlength: [
            4, 
            "Please enter at least 4 characters"
        ]
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