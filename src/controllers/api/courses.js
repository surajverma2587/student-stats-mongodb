const getCourses = (req, res) => {
  res.send("getCourses");
};

const getCourseById = (req, res) => {
  const { courseId } = req.params;

  console.log("courseId", courseId);

  res.send("getCourseById");
};

const createCourse = (req, res) => {
  res.send("createCourse");
};

const updateCourseById = (req, res) => {
  const { courseId } = req.params;

  console.log("courseId", courseId);

  res.send("updateCourseById");
};

const deleteCourseById = (req, res) => {
  const { courseId } = req.params;

  console.log("courseId", courseId);

  res.send("deleteCourseById");
};

module.exports = {
  getCourses,
  getCourseById,
  createCourse,
  updateCourseById,
  deleteCourseById,
};
