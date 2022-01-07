const studentMentorModel = require("../Models/StudentMentor.model");
const student = require("../Models/Student.model");
const { isValidObjectId } = require("mongoose");
const StudentMentorService = {
  async Assign(req, res) {
    try {
      let stdmentorModel = new studentMentorModel(req.body);
      await stdmentorModel.save(function (err, data) {
        if (err) return res.send(err);

        if (data)
          return res.send(
            `Mentor Assigned to following student(s) ${data.StudentID}`
          );
      });
    } catch (err) {
      return res.send(err);
    }
  },
  async Detail(req, res) {
    try {
      //   const data = await studentMentorModel
      //     .find()
      //     .populate(["StudentID", "MentorID"]);

      const data = await studentMentorModel
        .find()
        .populate({ path: "StudentID", select: "StudentID StudentName" })
        .populate({ path: "MentorID", select: "MentorID MentorName" });
      return res.send(data);
      //console.log(data);
    } catch (error) {
      return res.send(error);
    }
  },
};
module.exports = StudentMentorService;
