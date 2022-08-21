const mongoose = require('mongoose')

const ContactSchema = new mongoose.Schema({    // SCHEMA OR FIELD 
    name: {
        type: String,
        Required: true,
    },

    email: {
        type: String,
        Required: true,
    },

    phone: {
        type: String,
        Required: true,
    },
    message: {
        type: String,
        Required: true,
    },

}, { timestamps: true })

//  CREATE MODEL
const ContactModel = mongoose.model('contact', ContactSchema);    // BLOG IS NAME OF COLLECTION

module.exports = ContactModel