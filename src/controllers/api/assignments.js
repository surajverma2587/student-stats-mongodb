const createAssignmentForStudent = (req, res) => {
  res.send("createAssignmentForStudent");
};
const deleteAssignmentByStudent = (req, res) => {
  const { studentId, assignmentId } = req.params;

  console.log("studentId", studentId);
  console.log("assignmentId", assignmentId);

  res.send("deleteAssignmentByStudent");
};

module.exports = {
  createAssignmentForStudent,
  deleteAssignmentByStudent,
};
