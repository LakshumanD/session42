const student = require("../Models/Student.model");
const StudentService = {
  async Create(req, res) {
    try {
      let newStudent = new student(req.body);
      let exists = await student.findOne({
        $or: [
          { StudentID: req.body.StudentID },
          { StudentName: req.body.StudentName },
        ],
      });
      if (exists)
        return res.send(`Student ${exists.StudentName} is already exists...`);
      await newStudent.save(function (err, data) {
        if (err) return res.send(err);
        // saved!
        if (data)
          return res.send(
            `Student ${data.StudentName} created successfully...`
          );
      });
    } catch (err) {
      return res.send(err);
    }
  },
  async Detail(req, res) {
    try {
      let result = await student.find();
      return res.send(result);
    } catch (err) {
      return res.send(err);
    }
  },
};
module.exports = StudentService;
