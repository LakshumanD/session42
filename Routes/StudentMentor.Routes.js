const StudentMentorService = require("../Services/StudentMentor.Services");
const studentMentorRoutes = require("express").Router();

studentMentorRoutes.post("/Assign", StudentMentorService.Assign);

studentMentorRoutes.get("/", StudentMentorService.Detail);

module.exports = studentMentorRoutes;
