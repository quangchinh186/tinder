const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    account: {
        username: String,
        password: String,
        email: String,
    },
    profile: {
        displayName: String,
        age: Number,
        gender: String,
        genderInterest: String,
        description: String,
        photos: [String],
        hobby: [Object],
    },
    matched: [String],
    potentialUser: [String],
    disLike: [String]
  });

module.exports = mongoose.model('users', userSchema)