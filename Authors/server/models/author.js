const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema({
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
    age: {
        type: Number,
        required: [
            true,
            "Please enter the age"
        ],
        min: [
           10, 
            "Please enter an age of at least 10"
        ]
    }
}, { timestamps: true });

mongoose.model('Author', AuthorSchema);