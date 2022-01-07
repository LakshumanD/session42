const mongoose = require("mongoose");

const mentorSchema = new mongoose.Schema({
  MentorID: { type: Number, required: true },
  MentorName: { type: String, required: true, minlength: 5 },
});
const Mentor = new mongoose.model("Mentor", mentorSchema, "Mentor");
module.exports = Mentor;
