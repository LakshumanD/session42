const express = require("express");
const Mongo = require("./mongo");
const cors = require("cors");

const mentorRoutes = require("./Routes/Mentor.Routes");
const studentRoutes = require("./Routes/Student.Routes");
const studentMentorRoutes = require("./Routes/StudentMentor.Routes");
const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

Mongo.Connect();
app.use("/Mentor", mentorRoutes);
app.use("/Student", studentRoutes);
app.use("/StudentMentor", studentMentorRoutes);

app.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT}`);
});
