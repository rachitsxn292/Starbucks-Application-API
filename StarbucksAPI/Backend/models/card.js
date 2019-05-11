const mongoose = require('mongoose');

const cardSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    cardno: String,
    cvv: String,
    balance: Number
});

module.exports = mongoose.model('Card', cardSchema);