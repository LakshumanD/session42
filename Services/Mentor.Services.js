const mentor = require("../Models/Mentor.model");
const MentorService = {
  async Create(req, res) {
    try {
      let newMentor = new mentor(req.body);
      let exists = await mentor.findOne({ MentorName: req.body.MentorName });
      if (exists)
        return res.send(`Mentor ${exists.MentorName} is already exists...`);
      await newMentor.save(function (err, data) {
        if (err) return res.send(err);
        // saved!
        if (data) return res.send(`Mentor ${data} created successfully...`);
      });
    } catch (err) {
      return res.send(err);
    }
  },
};
module.exports = MentorService;
