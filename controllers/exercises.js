const exerciseRouter = require('express').Router()
const Exercise = require('../models/exercise')
const exerciseSeed = require('../models/seeds/chestSeed')


exerciseRouter.get('/seed', async (req,res) => {
    await Exercise.deleteMany({})
    Exercise.create(exerciseSeed, (err, data) => {
        res.redirect('/')
    })
})

exerciseRouter.get('/', async (req,res) => {
    const exercises = await Exercise.find({})
    console.log(exercises)
    res.json(exercises)
})

module.exports = exerciseRouter