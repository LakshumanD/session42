const studentMentorModel = require("../Models/StudentMentor.model");
const student = require("../Models/Student.model");
const { isValidObjectId } = require("mongoose");
const StudentMentorService = {
  async Assign(req, res) {
    try {
      let stdmentorModel = new studentMentorModel(req.body);
      await stdmentorModel.save(function (err, data) {
        if (err) return res.send(err);

        if (data) return res.send(`Student mentor assigned ${data}`);
      });
    } catch (err) {
      return res.send(err);
    }
  },
  async FetchStudent(req, res) {
    try {
      let result = await student.find();
      return res.send(result);
    } catch (err) {
      return res.send(err);
    }
  },
};
module.exports = StudentMentorService;
