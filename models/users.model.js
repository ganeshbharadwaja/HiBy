const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({

    firstName: {
        type: String,
        trim: true,
        required: true,
    },

    lastName: {
        type: String,
        trim: true,
        required: true,
    },

    email: {
        type: String,
        required: true
    },

    password: {
        type: Number,
        required: true,
    },

    verify_password: {
        type: Number,
        required: true
    },

    phoneNumber: {
        type: Number,
        required: true
    }, 

    dateOfBirth : {
        type: Date,
        required: true
    },

});



module.exports = mongoose.model('User', userSchema);
