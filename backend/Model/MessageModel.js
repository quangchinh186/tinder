const mongoose = require('mongoose');

const message = mongoose.Schema({
    address: {
        from: String,
        to: String,
    },
    message: String,
    time: Date
}); 

module.exports = mongoose.model('messages', message);