const StudentService = require("../Services/Student.Services");
const studentRoutes = require("express").Router();

studentRoutes.post("/Create", StudentService.Create);

module.exports = studentRoutes;
