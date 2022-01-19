const workoutRouter = require('express').Router()
const Workout = require('../models/workout')
const workouts = require('../models/seeds/workoutSeed')

workoutRouter.get('/seed', async (req,res) => {
    await Workout.deleteMany({})
    async function workoutSeed(){
        await Workout.create(workouts)
        return  res.redirect('/workouts')
    }
    workoutSeed()
})

workoutRouter.get('/', async (req,res) => {
    try{
        res.json(await Workout.find({}))
    }catch(error){
        res.status(400).json(error)
    }
})
// Exercise Index Page
workoutRouter.get('/workouts', async (req,res) => {
    try{
        res.json(await Workout.find({}))
    }catch(error){
        res.status(400).json(error)
    }
})




// // Exercise Index Post Route
workoutRouter.post('/workouts', async (req,res) => {
    try{
        res.json(await Workout.create(req.body))
    } catch (error){
        res.status(400).json(error)
    }
})

// // Exercise Delete Route
workoutRouter.delete('/workouts/:id', async (req,res) => {
    try{
        res.json(await Workout.findByIdAndDelete(req.params.id))
    } catch (error){
        res.status(400).json(error)
    }
})

// // Exercise Update Route
workoutRouter.put('/workouts/:id', async (req,res) => {
    try{
        res.json(await Workout.findByIdAndUpdate(req.params.id, req.body, {new: true}))
    } catch (error){
        res.status(400).json(error)
    }
})



module.exports = workoutRouter