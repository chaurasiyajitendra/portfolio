const mongoose = require('mongoose');

const visterSchema = mongoose.Schema({
    name: String,
    email: String,
    phone: Number,
    message: String
})

const Visitor = mongoose.model('Visitor', visterSchema);

module.exports = Visitor;

