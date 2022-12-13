const mongoose = require('mongoose');

const fs = require('fs');

mongoose.connect('mongodb://localhost/applicants', {
    useFindAndModify: false,
    useUnifiedTopology: true,
    useNewUrlParser: true
}); 


const modelsPath = __dirname + '/../models';

fs.readdirSync(modelsPath).forEach(function(file){
    if(file.indexOf('.js')> -1) {
        require(modelsPath +'/' + file); 
    }
});