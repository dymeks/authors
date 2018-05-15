var Schemas = require("../models/author.js");
var Author = Schemas.author;
var Quote = Schemas.quote;

module.exports = {
    getAllAuthors: function(req,res){
        res.json({response:"I got all users"});
    },
    createAuthor: function(req,res){
        res.json("I created all users");
    },
    getAuthor: function(req,res){
        res.json("I got an user");
    },
    editAuthor:function(req,res){
        res.json("I'm editing users");
    },
    updateAuthor:function(req,res){
        res.json("I'm updating users");
    },
    deleteAuthor:function(req,res){
        res.json({name:"I'm deleting users"});
    },
    

}