const authors = require("../controllers/authors.js");

module.exports = function(app){
    app.get('/authors',function(req,res){
        authors.getAllAuthors(req,res);
    })

    app.post('/authors',function(req,res){
        authors.createAuthor(req,res);
    })

    app.get('/authors/:id',function(req,res){
        authors.getAuthor(req,res);
    })

    app.put('/authors/:id',function(req,res){
        authors.updateAuthor(req,res);
    })

    app.delete('/authors/:id',function(req,res){
        authors.deleteAuthor(req,res);
    })
}