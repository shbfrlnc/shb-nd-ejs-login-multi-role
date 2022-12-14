// script ini adalah mongoose schema untuk user.

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: [
            'Administrator',
            'Member Level 1',
            'Member Level 2'
        ],
        required: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('User', userSchema);