const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    setup: String,
    punchline: String
});

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;