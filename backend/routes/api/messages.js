const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");

const Helpers = require("./Helpers")
const MessageController = require("../../controllers/message");
// const Message = require("../../models/Message");


//route GET api/messages/
//return all messages
router.get("/", async (req, res) => {
    MessageController.getMessagesList(res);
});


// @route Get api/messages/addMessage
// @desc Login user and return JWT token
router.post("/addMessage", async (req, res) => {

    MessageController.addNewMessage(req, res);


});

module.exports = router;