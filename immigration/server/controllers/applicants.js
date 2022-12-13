const mongoose = require('mongoose');

const Applicant = mongoose.model('Applicant');

module.exports = {
    getAll(req, res) {
        Applicant.find()
        .then(applicants =>res.json({ applicants }))
        .catch(e => res.json ({ errors: e }));
    },

    create(req, res) {
        const applicant = new Applicant(req.body)
        applicant.save()
        .then(applicant => res.json ({ applicant }))
        .catch(e => {
            const errors =[];
            for(key in e.errors) {
                errors.push(e.errors[key].message);
            }
            res.json({ errors });
        });
    },

    delete(req, res) {
        Applicant.findByIdAndDelete(req.params.id)
        .then(() => res.json ({ status: 'success'}))
        .catch(e => res.json({ error: e }));
    },
    
    update(req, res) {
        Applicant.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        })
        .then(applicant => res.json ({ applicant }))
        .catch(e => {
            const errors =[];
            for(key in e.errors) {
                errors.push(e.errors[key].message);
            }
            res.json({ errors });
        });
    },
    getOne(req, res) {
        Applicant.findById(req.params.id)
        .then(applicant => res.json ({ applicant }))
        .catch(e => res.json ({ errors: e })); 
    },
    
    incrementLikes(req, res) {
        console.log("im triggered");
        Applicant.findById(req.params.id)
        .then(applicant => {
            applicant.likes += 1;
            return applicant.save(); 
        })
        .then(applicant => res.json(applicant))
        .catch(e => res.json(e));
    }

}