const mongoose = require("mongoose");

const studentMentorSchema = new mongoose.Schema({
  StudentID: [
    {
      type: mongoose.Types.ObjectId,
      ref: "Student",
      required: true,
    },
  ],
  MentorID: {
    type: mongoose.Types.ObjectId,
    ref: "Mentor",
    required: true,
  },
});

const studentMentorModel = new mongoose.model(
  "StudentMentor",
  studentMentorSchema,
  "StudentMentor"
);
module.exports = studentMentorModel;
