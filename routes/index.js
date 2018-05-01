var express = require('express');
var router = express.Router();
var question = require('../models/Question.js')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Quiz App' });
});

router.get('/quiz', function(req, res, next) {
  question.find({}, function(err, data){
    if(err) return console.log(err)
    // res.json(data)
    res.render('list',{data: data} )
  })
});

router.post('/result', function(req, res, next) {
  var data = req.body
  var test = JSON.parse(data.test)
  var answers = [];
  var correct = 0;
  var wrong = 0;
  var skip = 0;
  for(var i=0 ; i < 10; i++ ){
   
    if(data['ans['+ i + ']'] != undefined){
      answers[i] = data['ans['+ i + ']'] 
      if(test[i].ans == data['ans['+ i + ']'] ){
        correct++;
      }{
        wrong++;
      }
    }
    else {
      answers[i] = ''
      skip++;
    }
  }
  console.log(answers,correct,skip)
  res.render('result',{correct: correct, wrong: wrong ,skip: skip})
});


module.exports = router;
