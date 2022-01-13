const exerciseRouter = require('express').Router()
const Exercise = require('../models/exercise')
const chestSeed = require('../models/seeds/chestSeed')
const shoulderSeed = require('../models/seeds/shoulderSeed')

exerciseRouter.get('/seed', async (req,res) => {
    await Exercise.deleteMany({})
    async function exerciseSeed (){
        await Exercise.create(chestSeed)
        await Exercise.create(shoulderSeed)
    }
    exerciseSeed()
    res.redirect('/')
})

exerciseRouter.get('/', async (req,res) => {
    const exercises = await Exercise.find({})
    res.json(exercises)
})

module.exports = exerciseRouter