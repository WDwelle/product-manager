const authorController = require('../controllers/author.controller');
console.log("***", authorController);
const {findAllAuthors, findOneSingleAuthor} = require('../controllers/author.controller');

module.exports = (app) => {
    app.get("/api/authors", findAllAuthors);
    app.get("/api/authors/:id", findOneSingleAuthor);
    app.put("/api/authors/:id", authorController.updateExistingAuthor);
    app.post("/api/authors", authorController.createNewAuthor);
    app.delete("/api/authors/:id", authorController.deleteAnExistingAuthor);
}