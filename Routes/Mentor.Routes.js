const MentorService = require("../Services/Mentor.Services");
const mentorRoutes = require("express").Router();

mentorRoutes.post("/Create", MentorService.Create);

module.exports = mentorRoutes;
