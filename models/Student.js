const mongoose = require('mongoose')

// schema or fields
const StudentSchema = new mongoose.Schema({
     name:{
          type:String,
          Required:true,
     },
     email:{
          type:String,
          Required:true,
     }
},{timestamps:true})
// create model

const StudentModel = mongoose.model('student',StudentSchema); //blog is name of collection

module.exports = StudentModel