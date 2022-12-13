const mongoose = require('mongoose');

const ApplicantSchema = new mongoose.Schema({
    
    name: {
        type: String,
        required: [
            true,
            "Please enter a name"
        ],
        minLength: [
            3, 
            "Please enter a name of at least 3 characters"
        ]
    },
    
    nationality: {
        type: String,
        required: [
            true, 
            "Please enter a nationality"
        ],
        minLength: [
            3,
            "Please enter a nationality of at least 3 characters"
        ]
    },

    education: {
        type: String,
        required: [
            true,
            "Please enter education background"
        ],
        minLength: [
            4, 
            "Please enter at least 4 characters"
        ]
    },

    job1: {
        type: String,
        required: [
            false
        ]
    },

    job2: {
        type: String,
        required: [
            false
        ]
    },

    job3: {
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

mongoose.model('Applicant', ApplicantSchema); 
