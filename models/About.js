const mongoose = require('mongoose')

// schema or fields
const AboutSchema = new mongoose.Schema({
     title:{
          type:String,
          Required:true,
     },
     description:{
          type:String,
          Required:true,
     },
     
},{timestamps:true})
// create model

const AboutModel = mongoose.model('about',AboutSchema); //blog is name of collection

module.exports = AboutModel