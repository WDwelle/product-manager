const ProductController = require('../controllers/product.controller');
console.log("***", ProductController);
const {findAllProducts, findOneSingleProduct} = require('../controllers/product.controller');

module.exports = (app) => {
    app.get("/api/products", findAllProducts);
    app.get("/api/products/:id", findOneSingleProduct);
    app.put("/api/products/:id", ProductController.updateExistingProduct);
    app.post("/api/products", ProductController.createNewProduct);
    app.delete("/api/products/:id", ProductController.deleteAnExistingProduct);
}