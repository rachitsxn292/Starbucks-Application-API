const mongoose = require('mongoose');

var orderSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    cardno: String,
    date: {type: Date, default: Date.now()}
})

module.exports = mongoose.model('Order', orderSchema);