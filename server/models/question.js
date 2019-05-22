const mongoose = require('mongoose')
const Schema = mongoose.Schema
const questionSchema = new Schema({
    questiontype:String,
    question:String,
    answer:String,
    show:String
})
module.exports = mongoose.model('question',questionSchema,'question')