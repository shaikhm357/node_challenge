// @desc    Get all books
// @route   GET /api/v1/books

const Books = require("../models/Books")

// @access  Public
exports.getBooks = async (req, res) => {
    try {
        const books = await Books.find()
        if (!books) {
            return res.status(400).json({ success: false, msg: `No Data Found` })
        }
        res.status(200).json({ success: true, count: books.length, data: books })
    } catch (err) {
        res.status(500).json({ success: false, error: err.message })
    }
}

// @desc    Get book
// @route   GET /api/v1/books/:id
// @access  Public
exports.getBook = async (req, res) => {
    try {
        const book = await Books.findOne({ _id: req.params.id })
        if (!book) {
            return res.status(400).json({ success: false, msg: `No Book Found of Id ${req.params.id}` })
        }
        res.status(200).json({ success: true, data: book })
    } catch (err) {
        console.log(err)
        res.status(500).json({ success: false, error: err.message })
    }
}

// @desc    Create book
// @route   POST /api/v1/books
// @access  Public
exports.createBook = async (req, res) => {
    try {
        const books = await Books.create(req.body)
        res.status(201).json({ success: true, data: books })
    } catch (err) {
        console.log(err)
        if (err.code === 11000) {
            return res.status(500).json({ success: false, error: `Duplicate field value` })
        }
        if (err.name === 'ValidationError') {
            const message = Object.values(err.errors).map(val => val.message)
            return res.status(400).json({ success: false, error: message })
        }
        res.status(500).json({ success: false, error: err })
    }
}

// @desc    UPDATE all book
// @route   PUT /api/v1/books/:id
// @access  Public
exports.UpdateBook = async (req, res) => {
    try {
        if (Object.keys(req.body).length === 0) {
            return res.status(400).json({ success: false, msg: `please Add Something to update getting ${JSON.stringify(req.body)} object` })
        }
        const book = await Books.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        })
        if (!book) {
            return res.status(400).json({ success: false, msg: `Book Not Found of Id ${req.params.id}` })
        }
        res.status(200).json({ success: true, data: book })
    } catch (err) {
        res.status(500).json({ success: false, error: err.message })
    }
}

// @desc    remove book
// @route   DELETE /api/v1/books/:id
// @access  Public
exports.removeBook = async (req, res) => {
    try {
        await Books.deleteOne({ _id: req.params.id })
        res.status(200).json({ success: true, data: {} })
    } catch (err) {
        res.status(500).json({ success: false, error: err })
    }
}