const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const QuestionSchema = new Schema({
  question: {
    type: String,
    required: true,
    default: ""
  },
  answers: {
    type: Array,
    default: []
  },
  date: {
    type: Date,
    default: Date.now
  }
});
module.exports = Question = mongoose.model("questions", QuestionSchema);