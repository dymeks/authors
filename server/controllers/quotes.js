var Quote = require("../models/author.js")['quote'];
var Author = require("../models/author.js")['author'];

module.exports = {
    //Get all quotes
    getAllQuotes: function(req,res){
        Quote.find({},function(err,quotes){
            result = {}
            if(err){
                result['status'] = false;
                result['body'] = err;
            } else {
                result['status'] = true;
                result['quotes'] = quotes;
            }
            res.json(result);
        })
    },
    //Creates an Quote.
    createQuote: function(req,res){
        var quote = new Quote({
            quote:req.body.quote
        })

        quote.save(function(err){
            var result = {};
            isValid = false;
            if(err){
                console.log("I'm made a mistake!")
                result['status']=false;
                result['body'] = err;
                res.json(result);
            } else {
                console.log("I have a valid QUOTE");
                isValid = true;
            }

            if(isValid){
              
                Author.findByIdAndUpdate(req.params.authorId,{$push:{quotes: quote}},function(err,author){
                    console.log(author);
                    if(err){
                        console.log("I made a mistake in finding the right author :(")
                        result['status']=false;
                        result['body'] = err;
                    } else {
                        console.log("I saved the QUOTE successfully!")
                        result['status'] = true;
                        result['author'] = author; //returns the NON UPDATED author.
                    }
                    res.json(result);
                })
            }
            // res.json(result);
        })
    },
    //Get a single quote.
    getQuote: function(req,res){
       
        Quote.findById(req.params.id,function(err,quote){
            result = {};
            if(err){
                result['status']=false;
                result['body'] = err;
            } else {
                result['status'] = true;
                result['author'] = quote;
            }
            res.json(result);
        });
        
    },
    updateQuote:function(req,res){
        Quote.findByIdAndUpdate(req.params.id,req.body,function(err,quote){
            result = {};
            if(err){
                result['status']=false;
                result['body'] = err;
            } else {
                result['status'] = true;
                result['author'] = quote;
            }
            res.json(result);
        })
    },
    //delete an quote.
    deleteQuote:function(req,res){
        Author.findByIdAndUpdate(req.params.authorId,{$pull:{quotes:{_id:req.body._id}}},function(err,author){
            console.log(author);
            if(err){
                console.log("I made a mistake in finding the right author :(")
                result['status']=false;
                result['body'] = err;
            } else {
                console.log("I saved the QUOTE successfully!")
                result['status'] = true;
                result['author'] = author; //returns the NON UPDATED author.
            }
            res.json(result);
        })
    },
}
