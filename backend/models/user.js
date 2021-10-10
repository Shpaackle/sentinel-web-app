const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    userName: String,
    email: { type: String, required: true },
    characters: [{ name: String }],
});

module.exports = mongoose.model('User', userSchema);
