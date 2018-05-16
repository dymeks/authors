var Schemas = require("../models/author.js");
var Author = Schemas.author;
var Quote = Schemas.quote;

module.exports = {

    //Gets all authors.
    getAllAuthors: function(req,res){
        Author.find({},function(err,authors){
            result = {}
            if(err){
                result['status'] = false;
                result['body'] = err;
            } else {
                result['status'] = true;
                result['authors'] = authors;
            }
            res.json(result);
        })
    },
    //Creates an Author.
    createAuthor: function(req,res){
        var author = new Author({
            name:req.body.name
        })

        author.save(function(err){
            var result = {};
            if(err){
                result['status']=false;
                result['body'] = err;
            } else {
                result['status'] = true;
                result['body'] = "success!";
            }
            res.json(result);
        })
    },
    //Get a single author.
    getAuthor: function(req,res){
       
        Author.findById(req.params.id,function(err,author){
            result = {};
            if(err){
                result['status']=false;
                result['body'] = err;
            } else {
                result['status'] = true;
                result['author'] = author;
            }
            res.json(result);
        });
        
    },
    updateAuthor:function(req,res){
        Author.findByIdAndUpdate(req.params.id,req.body,function(err,author){
            result = {};
            if(err){
                result['status']=false;
                result['body'] = err;
            } else {
                result['status'] = true;
                result['author'] = author;
            }
            res.json(result);
        })
    },
    //delete an author.
    deleteAuthor:function(req,res){
        Author.findByIdAndRemove(req.params.id,function(err,author){
            result = {};
            if(err){
                result['status']=false;
                result['body'] = err;
            } else {
                result['status'] = true;
                result['author'] = author; //returns the original author back.
            }
            res.json(result);
        });
    },
    

}