const { Router } = require("express");

const {
  createAssignmentForStudent,
  deleteAssignmentByStudent,
} = require("../../controllers/api/assignments");

const router = Router({ mergeParams: true });

router.post("/", createAssignmentForStudent);
router.delete("/:assignmentId", deleteAssignmentByStudent);

module.exports = router;
