
const express = require('express')
const { getBook, getBooks, createBook, UpdateBook, removeBook } = require('../controllers/books')
const router = express.Router()

// get all books
router.route('/')
    .get(getBooks)
    .post(createBook)

// get book by id
router.route('/:id')
    .get(getBook)
    .put(UpdateBook)
    .delete(removeBook)

module.exports = router