const mongoose = require('mongoose')
const Schema = mongoose.Schema

const workoutSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    split: {
        type: String,
        required: true
    },
    days: [{
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
    }
    ],
    uId: String
})

const Workout = mongoose.model('Workout', workoutSchema)

module.exports = Workout