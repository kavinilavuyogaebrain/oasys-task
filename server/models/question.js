const mongoose = require('mongoose')
const Schema = mongoose.Schema
const questionSchema = new Schema({
    questiontype:String,
    question:String,
    answer : [
        {
            arrans: String
        }
    ],
   
})
module.exports = mongoose.model('question',questionSchema,'question')