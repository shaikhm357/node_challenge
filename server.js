const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
const connectDB = require('./config/db')
const books = require('./routes/books')

dotenv.config({ path: './config/config.env' })

const app = express()

// body parser
app.use(express.json())

// log for dev env
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}

// decorate dotenv file

// connect to DB
connectDB()

const PORT = process.env.PORT || 8000

app.use('/api/v1/books', books)



const server = app.listen(PORT, () => console.log(`Sever is listening on port ${PORT}`))

// handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
    console.log(`Error: ${err.message}`)
    // close server and exit process
    server.close(() => process.exit(1))
})