const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema ({
    firstname: {
        type: String,
        required: true
    },
    surname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    dob: {
        type: Date,
        required: false
    },
    password: {
        type: String,
        required: true
    }
}, { timestamps: true });

const User = mongoose.model('User', UserSchema);
module.exports = User;
