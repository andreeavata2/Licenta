const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const AnnouncementSchema = new Schema({
  title: {
    type: String,
    required: true,
    default: ""
  },
  email: {
    type: String,
    required: true,
    default: ""
  },
  date: {
    type: Date,
    required: true,
    default: Date.now
  },
  message: {
    type: String,
    required: true,
    default: ""
  },
  typeAnnouncement: {
    type: String,
    // required:  true,
    default: ""
  }
});
module.exports = Announcement = mongoose.model("announcements", AnnouncementSchema);