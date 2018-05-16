const authors = require("../controllers/authors.js");
const quotes = require("../controllers/quotes.js");

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
    app.get('/quotes',function(req,res){
        quotes.getAllQuotes(req,res);
    })

    app.post('/quotes/:authorId',function(req,res){
        quotes.createQuote(req,res);
    })

    app.put('/quotes/:authorId',function(req,res){
        quotes.updateQuote(req,res);
    })

    app.delete('/quotes/:authorId',function(req,res){
        quotes.deleteQuote(req,res);
    })
    
}