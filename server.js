const express = require('express')
const dotenv = require('dotenv')

const app = express()

dotenv.config({ path: './config/config.env' })

const PORT = process.env.PORT || 8000

app.listen(PORT, () => console.log(`Severt is listening on port ${PORT}`))