const mongoose = require('mongoose')
const Schema = mongoose.Schema
const quespaperSchema = new Schema({
  
    questionpaper : [
        {
            questiontype:String,
            question:String,
            answer : [
                {
                    arrans: String
                }
            ]
        }
    ],
    
})
module.exports = mongoose.model('quespaper',quespaperSchema,'quespaper')