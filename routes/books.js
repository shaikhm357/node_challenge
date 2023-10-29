
const express = require('express')
const router = express.Router()

// get all books
router.get('/', (req, res) => {
    res.status(200).json({ success: true, msg: 'Get Books' })
})

// get book by id
router.get('/:id', (req, res) => {
    res.status(200).json({ success: true, msg: 'Get Book By Id' })
})

// post book by id
router.post('/', (req, res) => {
    res.status(200).json({ success: true, msg: 'Create Books' })
})

// put book
router.put('/:id', (req, res) => {
    res.status(200).json({ success: true, msg: 'Update Book' })
})

// delete book
router.delete('/:id', (req, res) => {
    res.status(200).json({ success: true, msg: 'Delete Book' })
})

module.exports = router