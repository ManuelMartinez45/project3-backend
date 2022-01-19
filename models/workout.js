const mongoose = require('mongoose')
const Schema = mongoose.Schema

const workoutSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    split: {
        type: Number,
        required: true
    },
    exercises: [{
        name: String, 
        sets: {
            type: String, 
            required: true
            },
        reps: {
            type: String,
            required: true
        }
    }]
})

const Workout = mongoose.model('Workout', workoutSchema)

module.exports = Workout