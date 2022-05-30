const express = require('express')
const cors = require('cors')
const userRouter = require('./routes/user-router')
const db = require('./db')
const dotenv = require("dotenv")

const app = express()
const apiPort = 4000
dotenv.config()


app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use(express.json())

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use('/api/user', userRouter)

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))