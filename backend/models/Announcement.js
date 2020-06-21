const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const AnnouncementSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  message: {
    type: String,
    required: true
  },
  typeAnnouncement: {
    type: String,
    required:  true
  }
});
module.exports = Announcement = mongoose.model("announcements", AnnouncementSchema);