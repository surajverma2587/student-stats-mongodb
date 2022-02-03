const { Router } = require("express");

const {
  getStudents,
  getStudentById,
  createStudent,
  deleteStudentById,
} = require("../../controllers/api/students");
const assignments = require("./assignments");

const router = Router();

router.get("/", getStudents);
router.get("/:studentId", getStudentById);
router.post("/", createStudent);
router.delete("/:studentId", deleteStudentById);

router.use("/:studentId/assignments", assignments);

module.exports = router;
