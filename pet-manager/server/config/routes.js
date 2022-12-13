const petsController = require('../controllers/pets');

module.exports = function(app){
    app.get('/api/pets', petsController.getAllPets);
    app.post('/api/pets/new',petsController.createPet);
    app.delete('/api/pets/:id', petsController.deletePet);
    app.put('/api/pets/:id', petsController.updatePet);
    app.get('/api/pets/likes/:id', petsController.incrementLikes);
    app.get('/api/pets/:id', petsController.getOnePet);
}