const mongoose = require('mongoose')
const Schema = mongoose.Schema

const exerciseSchema = new Schema({
    name:{
        type: String,
        required: true,
    },
    main: {
        type: String,
        required: true
    },
    primary: {
        type: String,
        required: true
    },
    secondary: [String],
    perform: {
        type: [String],
        required: true
    },
    description: String,
    img: String,
    equipment: {
        type:[String],
        required:true
    },
    mechanics: String
})

const Exercise = mongoose.model('Exercise', exerciseSchema)

module.exports = Exercise