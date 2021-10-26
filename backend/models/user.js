const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    userID: String,
    name: String,
    characters: String,
});

module.exports = mongoose.model('User', userSchema);
