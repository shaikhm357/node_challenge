// @desc    Get all books
// @route   GET /api/v1/books
// @access  Public
exports.getBooks = (req, res) => {
    res.status(200).json({ success: true, msg: 'Get Books' })
}

// @desc    Get book
// @route   GET /api/v1/books/:id
// @access  Public
exports.getBook = (req, res) => {
    res.status(200).json({ success: true, msg: 'Get Book By Id' })
}

// @desc    Create book
// @route   POST /api/v1/books
// @access  Public
exports.createBook = (req, res) => {
    res.status(200).json({ success: true, msg: 'Create Books' })
}

// @desc    UPDATE all book
// @route   PUT /api/v1/books/:id
// @access  Public
exports.UpdateBook = (req, res) => {
    res.status(200).json({ success: true, msg: 'Update Book' })
}

// @desc    remove book
// @route   DELETE /api/v1/books/:id
// @access  Public
exports.removeBook = (req, res) => {
    res.status(200).json({ success: true, msg: 'Delete Book' })
}