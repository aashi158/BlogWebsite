const mongoose = require('mongoose')

// schema or fields
const BlogSchema = new mongoose.Schema({
     title:{
          type:String,
          Required:true,
     },
     description:{
          type:String,
          Required:true,
     },
     image:{
          type:String,
          Required:true,
     }
},{timestamps:true})
// create model

const BlogModel = mongoose.model('blog',BlogSchema); //blog is name of collection

module.exports = BlogModel