const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
const exerciseController = require('./controllers/exercises')
const workoutController = require('./controllers/workoutRouter')


const admin = require('firebase-admin')

const serviceAccount = require('./service-account-credentials.json')

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});


require('dotenv').config()

const {DATABASE_URL, PORT} = process.env

mongoose.connect(DATABASE_URL)
mongoose.connection
    .on('open', () => console.log('Connected to MongoDB'))
    .on('close', () => console.log('Disconnected to MongoDB'))
    .on('error', (err) => console.log(err))

app.use(cors())
app.use(express.json())

app.use('/', exerciseController)
app.use('/', workoutController)

app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`))