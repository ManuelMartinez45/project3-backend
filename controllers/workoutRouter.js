const workoutRouter = require('express').Router()
const Workout = require('../models/workout')
const workouts = require('../models/seeds/workoutSeed')

const admin = require('firebase-admin')

workoutRouter.get('/seed', async (req,res) => {
    await Workout.deleteMany({})
    async function workoutSeed(){
        await Workout.create(workouts)
        return  res.redirect('/workouts')
    }
    workoutSeed()
})

// workoutRouter.get('/', async (req,res) => {
//     try{
//         res.json(await Workout.find({}))
//     }catch(error){
//         res.status(400).json(error)
//     }
// })
// Exercise Index Page
workoutRouter.get('/workouts', async (req,res) => {
    try{
        res.json(await Workout.find({}))
    }catch(error){
        res.status(400).json(error)
    }
})

workoutRouter.get('/workouts/:id', async (req,res) => {
    try{
        res.json(await Workout.findById(req.params.id))
    } catch(err){
        res.status(400).json(error)
    }
})


// // Exercise Create Post Route
workoutRouter.post('/workouts', async (req,res) => {
    const token = req.get('Authorization')
    if(!token) return res.status(400).json({message: 'Must be Logged In first'})
    const user = await admin.auth().verifyIdToken(token.replace('Bearer ', ''))
    req.body.uId = user.uid
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