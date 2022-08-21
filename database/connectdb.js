const mongoose = require('mongoose');

con = "mongodb+srv://aashi123:aashi123@cluster0.tael0rh.mongodb.net/blogwebsite?retryWrites=true&w=majority"
const connectdb =()=>{
    // return mongoose.connect('mongodb://localhost:27017/blog_website') 
    return mongoose.connect(con)    // Database name blog_website
    .then(()=>{
        console.log("Connection Sucessfully")
    })
    .catch((err)=>{
        console.log(err)
    })
}
module.exports = connectdb