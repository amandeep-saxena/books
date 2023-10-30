const mongoose = require("mongoose");
mongoose.set('strictQuery', true);

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    summary: {
        type: String,
        required: true,
    },
    
});




module.exports = new mongoose.model('BOOK', bookSchema)