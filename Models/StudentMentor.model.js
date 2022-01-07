const mongoose = require("mongoose");

const studentMentorSchema = new mongoose.Schema({
  StudentID: [{ type: String, required: true }],
  MentorID: { type: String, required: true },
});

const studentMentorModel = new mongoose.model(
  "StudentMentor",
  studentMentorSchema,
  "StudentMentor"
);
module.exports = studentMentorModel;
