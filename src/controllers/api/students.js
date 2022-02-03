const getStudents = (req, res) => {
  res.send("getStudents");
};

const getStudentById = (req, res) => {
  const { studentId } = req.params;

  console.log("studentId", studentId);

  res.send("getStudentById");
};

const createStudent = (req, res) => {
  res.send("createStudent");
};

const deleteStudentById = (req, res) => {
  const { studentId } = req.params;

  console.log("studentId", studentId);

  res.send("deleteStudentById");
};

module.exports = {
  getStudents,
  getStudentById,
  createStudent,
  deleteStudentById,
};
