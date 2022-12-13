const productsController = require('../controllers/products');

module.exports = function(app){
    app.get('/api/products', productsController.getAll); 
    app.post('/api/products', productsController.create); 
    app.delete('/api/products/:id', productsController.delete); 
    app.put('/api/products/:id', productsController.update); 
    app.get('/api/products/:id', productsController.getOne); 
}