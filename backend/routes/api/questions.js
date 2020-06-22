const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");

const Helpers = require("./Helpers")
const QuestionController = require("../../controllers/question");


//route GET api/question/
//return all questions
router.get("/", async (req, res) => {
    QuestionController.getQuestionsList (res);
});


// @route POST api/announcement/addAnnouncement
// @desc Login user and return JWT token
router.post("/addQuestion", async (req, res) => {
    QuestionController.addNewQuestion(req, res);
});

// route DELETE api/announcement/:id
// delete a student from id
router.delete("/:id", async (req, res) => {
    QuestionController.deleteQuestion(req, res);
    
})

module.exports = router;