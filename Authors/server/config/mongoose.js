const mongoose = require('mongoose');

const fs = require('fs');

mongoose.connect('mongodb://localhost/authors', {
    useFindAndModify: false,
    useUnifiedTopology: true,
    useNewUrlParser: true
});

// require('../models/author')
const modelsPath = __dirname + '/../models';

fs.readdirSync(modelsPath).forEach(function(file){
    if(file.indexOf('.js')> -1) {
        require(modelsPath + '/' + file);
    }
    
}); 


