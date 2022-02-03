const { Course } = require("../../models");

const getCourses = async (req, res) => {
  try {
    const courses = await Course.find({}).populate("students");
    return res.json({ success: true, data: courses });
  } catch (error) {
    console.log(`[ERROR]: Failed to get courses | ${error.message}`);
    return res
      .status(500)
      .json({ success: false, error: "Failed to get courses" });
  }
};

const getCourseById = async (req, res) => {
  try {
    const { courseId } = req.params;
    const course = await Course.findById(courseId).populate("students");
    return res.json({ success: true, data: course });
  } catch (error) {
    console.log(`[ERROR]: Failed to get course | ${error.message}`);
    return res
      .status(500)
      .json({ success: false, error: "Failed to get course" });
  }
};

const createCourse = async (req, res) => {
  try {
    const { courseName } = req.body;
    const course = await Course.create({ courseName });
    return res.json({ success: true, data: course });
  } catch (error) {
    console.log(`[ERROR]: Failed to create course | ${error.message}`);
    return res
      .status(500)
      .json({ success: false, error: "Failed to create course" });
  }
};

const updateCourseById = (req, res) => {
  const { courseId } = req.params;

  console.log("courseId", courseId);

  res.send("updateCourseById");
};

const deleteCourseById = async (req, res) => {
  try {
    const { courseId } = req.params;
    const course = await Course.findByIdAndDelete(courseId);
    return res.json({ success: true, data: course });
  } catch (error) {
    console.log(`[ERROR]: Failed to delete course | ${error.message}`);
    return res
      .status(500)
      .json({ success: false, error: "Failed to delete course" });
  }
};

module.exports = {
  getCourses,
  getCourseById,
  createCourse,
  updateCourseById,
  deleteCourseById,
};
