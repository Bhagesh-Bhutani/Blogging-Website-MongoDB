const mongoose=require('mongoose');

let article_schema=new mongoose.Schema({
    title:{
        type: String,
        required: true
    } ,
    description: {
        type: String
    } ,
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports= mongoose.model('Article',article_schema);