const MentorService = require("../Services/Mentor.Services");
const mentorRoutes = require("express").Router();

mentorRoutes.post("/Create", MentorService.Create);
mentorRoutes.get("/", MentorService.Detail);
mentorRoutes.get("/Available", MentorService.Available);
module.exports = mentorRoutes;
