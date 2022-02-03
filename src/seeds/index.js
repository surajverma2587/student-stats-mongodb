const mongoose = require("mongoose");

const { Student, Course } = require("../models");
const students = require("./data/students");
const courses = require("./data/courses");

const init = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/studentStatsDb", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("[INFO]: Database connection successful");

    await Student.deleteMany({});
    await Student.insertMany(students);

    console.log("[INFO]: Successfully seeded students");

    const studentsFromDb = await Student.find({});

    studentsFromDb.forEach((student) => {
      const studentId = student._id.toString();

      const randomCourse = courses[Math.floor(Math.random() * courses.length)];

      randomCourse.students.push(studentId);
    });

    await Course.deleteMany({});
    await Course.insertMany(courses);

    console.log("[INFO]: Successfully seeded courses");

    await mongoose.disconnect();
  } catch (error) {
    console.log(`[ERROR]: Database connection failed | ${error.message}`);
  }
};

init();
