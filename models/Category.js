const mongoose = require('mongoose')

const CategorySchema = new mongoose.Schema({    // SCHEMA OR FIELD 
    catname:{
        type:String,
        Required:true,
    },
    
},{timestamps:true})

//  CREATE MODEL
const CategoryModel = mongoose.model('cat',CategorySchema);    // BLOG IS NAME OF COLLECTION
module.exports = CategoryModel

