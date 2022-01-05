const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  StudentID: { type: Number, required: true },
  StudentName: { type: String, required: true },
  StudentEmail: { type: String, required: true },
});
const Student = new mongoose.model("Student", studentSchema, "Student");
module.exports = Student;
