const mongoose = require('mongoose')

// schema or fields
const UserSchema = new mongoose.Schema({
     name: {
          type: String,
          Required: true,
     },
     email: {
          type: String,
          Required: true,
          unique: true
     },
     password: {
          type: String,
          Required: true,
     }

}, { timestamps: true })
// create model

const UserModel = mongoose.model('user', UserSchema); //blog is name of collection

module.exports = UserModel