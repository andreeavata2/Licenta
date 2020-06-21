const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
    default: ""
  },
  email: {
    type: String,
    required: true,
    default: ""
  },
  password: {
    type: String,
    required: true,
    default: ""
  },
  typeUser: {
    type: String,
    required: true,
    default: ""
  },
  licenseTeacher: {
    type: String,
    default: ""
  },
  date: {
    type: Date,
    default: Date.now
  }
});
module.exports = User = mongoose.model("users", UserSchema);