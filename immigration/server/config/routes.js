const applicantsController = require('../controllers/applicants');

module.exports = function(app){
    app.get('/api/applicants', applicantsController.getAll);
    app.post('/api/applicants/new', applicantsController.create);
    app.delete('/api/applicants/:id', applicantsController.delete); 
    app.put('/api/applicants/:id', applicantsController.update);
    app.get('/api/applicants/likes/:id', applicantsController.incrementLikes);
    app.get('/api/applicants/:id', applicantsController.getOne); 
}