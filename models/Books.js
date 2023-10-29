const mongoose = require('mongoose')

const booksSchema = mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: [true, 'Please Add Book Name']
    },
    description: {
        type: String,
        required: [true, 'Please Add Book Description']
    },
    author: {
        type: String,
        required: [true, "Please Add Book's Author Name"]
    }
})

module.exports = mongoose.model('Books', booksSchema)