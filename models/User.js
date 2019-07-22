const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  isRegisteredCaregiver: {
    type: Boolean,
    default: false
  },
  isMedicalEscort: {
    type: Boolean
  },
  isBefriender: {
    type: Boolean
  },
  isNurse: {
    type: Boolean
  },
  race: {
    type: String
  },
  religion: {
    type: String
  },
  languages: {
    type: String
  },
  description: {
    type: String
  },
  certificate: {
    type: String
  }
});

UserSchema.index({
  name: "text",
  race: "text",
  religion: "text",
  languages: "text",
  description: "text"
});

module.exports = User = mongoose.model("users", UserSchema);
