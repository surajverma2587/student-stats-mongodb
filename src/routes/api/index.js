const { Router } = require("express");

const courses = require("./courses");
const students = require("./students");

const router = Router();

router.use("/courses", courses);
router.use("/students", students);

module.exports = router;
