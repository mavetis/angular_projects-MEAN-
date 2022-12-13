const mongoose = require('mongoose');

const Author = mongoose.model('Author');

module.exports = {
    index(req, res){
        Author.find()
        .then(authors => res.json({ authors }))
        .catch(e => res.json({errors: e}));
    },
    create(req, res){
        Author.create(req.body)
        .then(author => res.json({ authors }))
        .catch(e => {
            const errors=[];
            
            for(key in e.errors) {
                errors.push(e.errors[key].message);
            }    
            res.json({ errors });
        });
    },
    delete(req, res){
        Author.findByIdAndDelete(req.params.id)
        .then(() => res.json({status: 'success'}))
        .catch(e => res.json({error: e }));
    },
    update(req, res){
        Author.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        })
        .then(author => res.json({ author }))
        .catch(e => {
            const errors=[];
            
            for(key in e.errors) {
                errors.push(e.errors[key].message);
            }    
            res.json({ errors });
        });
    }, 
    
    getOne(req, res) {
        Author.findById( req.params.id)
        .then(author => res.json ({ author }))
        .catch(e => res.json({ errors: e })); 
    }
}