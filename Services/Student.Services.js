const student = require("../Models/Student.model");
const StudentService = {
  async Create(req, res) {
    try {
      let newStudent = new student(req.body);
      let exists = await student.findOne({ StudentName: req.body.StudentName });
      if (exists)
        return res.send(`Student ${exists.StudentName} is already exists...`);
      await newStudent.save(function (err, data) {
        if (err) return res.send(err);
        // saved!
        if (data) return res.send(`Student ${data} created successfully...`);
      });
    } catch (err) {
      return res.send(err);
    }
  },
};
module.exports = StudentService;
