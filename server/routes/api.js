// import { error } from 'util';

const express = require ('express')
const router = express.Router()

const Question = require('../models/question')
const Questionpaper = require('../models/quespaper')

const mongoose =require('mongoose')
const db="mongodb://admin:admin01@ds155516.mlab.com:55516/sample"
mongoose.connect(db,err=>{
    if(err){
        console.log(err)
    }else{
        console.log('Connected to mongodb')
    }
})
// router.get('/',(req,res)=>{
//     res.send('hi from API')
// })
router.post('/urlfullquestion',(req,res)=>{
  let fullForm = req.body
  let questionpaper = new Questionpaper(fullForm)
  questionpaper.save((err,question) => {
  if(err){
      console.log(err)
  }else{
      console.log(question);
     res.status(200).send(question)
  }
})
})
router.get('/urlgetfullquestion', (req, res) => {
  Questionpaper.find(function(err, result) {
    if (err) {
      // console.log('no data1')
      console.log(err);
    } else {
      res.send(result);
    }
  })
});
router.post('/questionData',(req,res)=>{
    let qData = req.body
    console.log(qData);
    let question = new Question(qData)
    question.save((err,question) => {
    if(err){
        console.log(err)
    }else{
        console.log(question);
       res.status(200).send(question)
    }
})
})
router.get('/getquestionData', (req, res) => {
    Question.find(function(err, result) {
      if (err) {
        // console.log('no data1')
        console.log(err);
      } else {
        res.send(result);
      }
    })
  });
  //delete blog
router.delete('/deleteQuestionData/:id', (req, res) => {
    Question.findByIdAndRemove(req.params.id, function(errors, deleteques) {
      if (errors) {
        console.log('Error deleting' + errors);
      } else {
        res.json(deleteques);
      }
    });
  });


router.get('/editQuestionData/:id', (req, res) => {
    Question.findById(req.params.id, function(errors, getoneuser) {
      if (errors) {
        console.log('Error updating' + errors);
      } else {
        res.json(getoneuser);
        console.log(getoneuser)
      }
    });
  });
//update deals
router.put('/updateQuestionData/:id', function(req, res) {
    Question.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
            questiontype: req.body.questiontype,
            question: req.body.question,
            answer: req.body.answer,
            show: req.body.show
        }
      },
      {
        new: true
      },
      function(err, updatedUser) {
        if (err) {
          res.send('Error updating user');
        } else {
          res.json(updatedUser);
        }
      }
    );
  });
module.exports =router