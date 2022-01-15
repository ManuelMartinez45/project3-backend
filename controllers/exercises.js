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
        return  res.redirect('/exercises')
    }
    exerciseSeed()
})

// Exercise Index Page
exerciseRouter.get('/exercises', async (req,res) => {
    try{
        res.json(await Exercise.find({}))
    } catch (error){
        res.status(400).json(error)
    }
})

// Exercise Index Post Route
exerciseRouter.post('/exercises', async (req,res) => {
    try{
        res.json(await Exercise.create(req.body))
    } catch (error){
        res.status(400).json(error)
    }
})

// Exercise Delete Route
exerciseRouter.delete('/exercises/:id', async (req,res) => {
    try{
        res.json(await Exercise.findByIdAndDelete(req.params.id))
    } catch (error){
        res.status(400).json(error)
    }
})

// Exercise Update Route
exerciseRouter.put('/exercises/:id', async (req,res) => {
    try{
        res.json(await Exercise.findByIdAndUpdate(req.params.id, req.body, {new: true}))
    } catch (error){
        res.status(400).json(error)
    }
})



module.exports = exerciseRouter