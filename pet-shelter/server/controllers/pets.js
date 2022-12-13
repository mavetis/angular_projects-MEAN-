const mongoose = require('mongoose');

const Pet = mongoose.model('Pet');

module.exports = {
    getAll(req, res) {
        Pet.find()
        .then(pets =>res.json({ pets }))
        .catch(e => res.json ({ errors: e }));
    },

    create(req, res) {
        const pet = new Pet(req.body)
        pet.save()
        .then(pet => res.json ({ pet }))
        .catch(e => {
            const errors =[];
            for(key in e.errors) {
                errors.push(e.errors[key].message);
            }
            res.json({ errors });
        });
    },

    delete(req, res) {
        Pet.findByIdAndDelete(req.params.id)
        .then(() => res.json ({ status: 'success'}))
        .catch(e => res.json({ error: e }));
    },
    
    update(req, res) {
        Pet.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        })
        .then(pet => res.json ({ pet }))
        .catch(e => {
            const errors =[];
            for(key in e.errors) {
                errors.push(e.errors[key].message);
            }
            res.json({ errors });
        });
    },
    getOne(req, res) {
        Pet.findById(req.params.id)
        .then(pet => res.json ({ pet }))
        .catch(e => res.json ({ errors: e })); 
    },
    
    incrementLikes(req, res) {
        console.log("im triggered");
        Pet.findById(req.params.id)
        .then(pet => {
            pet.likes += 1;
            return pet.save(); 
        })
        .then(pet => res.json(pet))
        .catch(e => res.json(e));
    }

}