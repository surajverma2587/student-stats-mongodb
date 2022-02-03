const { Student } = require("../../models");

const getStudents = async (req, res) => {
  try {
    const students = await Student.find({});
    return res.json({ success: true, data: students });
  } catch (error) {
    console.log(`[ERROR]: Failed to get students | ${error.message}`);
    return res
      .status(500)
      .json({ success: false, error: "Failed to get students" });
  }
};

const getStudentById = async (req, res) => {
  try {
    const { studentId } = req.params;
    const student = await Student.findById(studentId);
    return res.json({ success: true, data: student });
  } catch (error) {
    console.log(`[ERROR]: Failed to get student | ${error.message}`);
    return res
      .status(500)
      .json({ success: false, error: "Failed to get student" });
  }
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
