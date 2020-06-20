const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");

const Helpers = require("./Helpers")
const FeedbackController = require("../../controllers/feedback");


//route GET api/feedback/
//return all messages
router.get("/", async (req, res) => {
    FeedbackController.getFeedbackList(res);
});


// @route Get api/feedback/addFeedback
// @desc Login user and return JWT token
router.post("/addFeedback", async (req, res) => {
    FeedbackController.addNewFeedback(req, res);
});

// route POST api/feedback/delete
// delete a student from id
router.delete("/delete", async (req, res) => {
    FeedbackController.deleteFeedback(req, res);
    
})

module.exports = router;