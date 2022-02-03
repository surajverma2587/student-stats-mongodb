const { Router } = require("express");

const {
  getCourses,
  getCourseById,
  createCourse,
  updateCourseById,
  deleteCourseById,
} = require("../../controllers/api/courses");

const router = Router();

router.get("/", getCourses);
router.get("/:courseId", getCourseById);
router.post("/", createCourse);
router.put("/:courseId", updateCourseById);
router.delete("/:courseId", deleteCourseById);

module.exports = router;
