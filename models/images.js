var mongoose = require('mongoose');

var OOTDSchema = new mongoose.Schema({
        outfit: String,
        question: String,
        comments: [{ note: String, author: String, date: Date }]
});

module.exports = mongoose.model('Pics', OOTDSchema);