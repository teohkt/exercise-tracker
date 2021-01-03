const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true, //Trim spaces off the end
        minlength: 3
    }
}, {timestamps: true});

// Converting blogSchema into model
const User = mongoose.model('User',userSchema);

module.exports = User;