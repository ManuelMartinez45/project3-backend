const exerciseRouter = require('express').Router()
const Exercise = require('../models/exercise')
const chestSeed = require('../models/seeds/chestSeed')
const shoulderSeed = require('../models/seeds/shoulderSeed')
const backSeed = require('../models/seeds/backSeed')
const legSeed = require('../models/seeds/legSeed')
const armSeed = require('../models/seeds/armSeed')
const coreSeed = require('../models/seeds/coreSeed')

exerciseRouter.get('/seed', async (req,res) => {
    await Exercise.deleteMany({})
    async function exerciseSeed (){
        await Exercise.create(chestSeed)
        await Exercise.create(shoulderSeed)
        await Exercise.create(backSeed)
        await Exercise.create(legSeed)
        await Exercise.create(armSeed)
        await Exercise.create(coreSeed)
        return  res.redirect('/')
    }
    exerciseSeed()
})

exerciseRouter.get('/', async (req,res) => {
    const exercises = await Exercise.find({})
    res.json(exercises)
})

module.exports = exerciseRouter