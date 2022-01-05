const express = require("express");
const Mongo = require("./mongo");

const mentorRoutes = require("./Routes/Mentor.Routes");
const studentRoutes = require("./Routes/Student.Routes");
const studentMentorRoutes = require("./Routes/StudentMentor.Routes");
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

Mongo.Connect();
app.use("/Mentor", mentorRoutes);
app.use("/Student", studentRoutes);
app.use("/StudentMentor", studentMentorRoutes);

app.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT}`);
});
