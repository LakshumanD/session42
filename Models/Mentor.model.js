const mongoose = require("mongoose");

const mentorSchema = new mongoose.Schema({
  MentorID: { type: Number, required: true },
  MentorName: { type: String, required: true },
});
const Mentor = new mongoose.model("Mentor", mentorSchema, "Mentor");
module.exports = Mentor;
