var mongoose = require('mongoose');

var Question = mongoose.Schema({
   ques: String,
   ans: String
 
  
}, { timestamps: true })

module.exports = mongoose.model('Question', Question)