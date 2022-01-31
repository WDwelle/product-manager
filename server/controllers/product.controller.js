const Product = require('../models/product.model')

//===CREATE===\\
module.exports.createNewProduct = (req, res) => {
    Product.create(req.body)
        .then(newlyCreatedProduct => res.json({message: "success", product: newlyCreatedProduct}))
        .catch(err => res.json({ message: "something went wrong", error: err}));
}

//===READ===\\
module.exports.findAllProducts = (req, res) => {//read all
    Product.find()
        .then(allDaProducts => res.json({message: "success", products: allDaProducts}))
        .catch(err => res.json({ message: "something went wrong", error: err}));
}

module.exports.findOneSingleProduct = (req, res) => {// read one
    Product.findOne({_id: req.params.id })
        .then(oneSingleProduct => res.json({message: "success", product : oneSingleProduct}))
        .catch(err => res.json({ message: "something went wrong", error: err}));
}

//===UPDATE===\\
module.exports.updateExistingProduct = (req, res) => {
    Product.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedProduct => res.json({message: "success", product: updatedProduct }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

//===DELETE===\\
module.exports.deleteAnExistingProduct = (req, res) => {
    Product.deleteOne({ _id: req.params.id })
        .then(result => res.json({message: "success", result: result }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}