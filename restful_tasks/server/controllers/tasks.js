const mongoose = require('mongoose');

const Task = mongoose.model('Task');

module.exports = {
    index(_, res) {
        Task.find()
        .then(tasks=>res.json({tasks}))
        .catch(e=> res.json({errors:e}));
    },
    create(req, res){
        Task.create(req.body)
        .then(task => res.json({task}))
        .catch(e=> res.json({error: e}));
    },
    update(req, res){
        Task.update(
           {_id: req.params.id},
            req.body,
            {
                runValidators: true,
                new: true
            }
        )
            .then(task => res.json({ task }))
            .catch(e=> res.json({ error: e }));
    },
    getById(req, res) {
        Task.findById(req.params.id)
        .then(task => res.json({task}))
        .catch(e=> res.json({error: e}))
    },
    delete(req, res) {
        Task.findByIdAndDelete(req.params.id)
        .then(()=> res.json({status:'success'}))
        .catch(e => res.json({error: e})); 

    }
}