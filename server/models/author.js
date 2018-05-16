const mongoose = require('../config/mongoose.js');
// const quote = require('../models/quote.js');

var QuotesSchema = new mongoose.Schema({
    quote:{type:String,required:"The Quote Field is Required."},
},{timestamps:true})

var AuthorsSchema = new mongoose.Schema({
    name:{type:String,required:"The Name Field is Required.",minlength:[3,"Name must be at least 3 characters"]},
    quotes:[QuotesSchema]
},{timestamps:true})

const author = mongoose.model('Author',AuthorsSchema);
const quote = mongoose.model('Quote',QuotesSchema);
module.exports = {'author':author,'quote':quote};
