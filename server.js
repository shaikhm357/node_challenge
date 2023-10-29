const express = require('express')
const dotenv = require('dotenv')
const connectDB = require('./config/db')
const books = require('./routes/books')

const app = express()

// body parser
app.use(express.json())

// decorate dotenv file
dotenv.config({ path: './config/config.env' })

// connect to DB
connectDB()

const PORT = process.env.PORT || 8000

app.use('/api/v1/books', books)



const server = app.listen(PORT, () => console.log(`Severt is listening on port ${PORT}`))

// handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
    console.log(`Error: ${err.message}`.red)
    // close server and exit process
    server.close(() => process.exit(1))
})