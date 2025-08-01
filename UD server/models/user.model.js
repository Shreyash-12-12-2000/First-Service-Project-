const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true,
        trim: true,
        lowercase: true,
    },
    email: {
        type: String,
        require: true,
        trim: true,
        lowercase: true,
        unique: true
    },
    password: {
        type: String,
        require: true,
        trim: true,
        minlength: [6, 'password must be at leat 6 characters long']
    }
})

const user = mongoose.model('user',userSchema);
module.exports = user;