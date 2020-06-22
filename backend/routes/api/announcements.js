const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");

const Helpers = require("./Helpers")
const AnnouncementController = require("../../controllers/announcement");


//route GET api/announcement/
//return all announcements
router.get("/", async (req, res) => {
    AnnouncementController.getAnnouncementsList(res);
});


// @route Get api/announcement/addAnnouncement
// @desc Login user and return JWT token
router.post("/addAnnouncement", async (req, res) => {
    AnnouncementController.addNewAnnouncement(req, res);
});

// route POST api/announcement/:id
// delete a student from id
router.delete("/:id", async (req, res) => {
    AnnouncementController.deleteAnnouncement(req, res);
    
})

module.exports = router;