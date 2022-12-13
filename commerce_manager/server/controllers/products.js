const mongoose = require('mongoose');

const Product = mongoose.model('Product1');

module.exports = {
    getAll(req, res) {
        Product.find()
        .then(products => res.json({ products }))
        .catch(e => res.json ({ errors: e })); 
    },

    create(req, res) {
        const product = new Product(req.body)
        product.save()
        // console.log(req.body)
        // Product.create(req.body)
        .then(product => res.json ({ product }))
        .catch(e => {
            const errors =[];
            for(key in e.errors) {
                errors.push(e.errors[key].message);
            }
            res.json({ errors });
        });
    },

    delete(req, res) {
        Product.findByIdAndDelete(req.params.id)
        .then(() => res.json({ status: 'success'}))
        .catch(e => res.json({ error: e }));
    },

    update(req, res){
        Product.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        })
        .then(product => res.json ({ product }))
        .catch(e => {
            const errors =[];
            for(key in e.errors) {
                errors.push(e.errors[key].message);
            }
            res.json({ errors });
        });
    },

    getOne(req, res) {
        Product.findById(req.params.id)
        .then(product => res.json ({ product }))
        .catch(e => res.json ({ errors: e }));
    }
}      