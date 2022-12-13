const petsController = require('../controllers/pets');

module.exports = function(app){
    app.get('/api/pets', petsController.getAll);
    app.post('/api/pets/new', petsController.create);
    app.delete('/api/pets/:id', petsController.delete); 
    app.put('/api/pets/:id', petsController.update);
    app.get('/api/pets/likes/:id', petsController.incrementLikes);
    app.get('/api/pets/:id', petsController.getOne); 
}
