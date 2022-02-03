const { Schema, model } = require("mongoose");

const assignments = require("./Assignment");

const studentSchema = {
  firstName: {
    type: String,
    // required: true,
    maxLength: 50,
  },
  lastName: {
    type: String,
    // required: true,
    maxLength: 50,
  },
  githubUrl: {
    type: String,
    // required: true,
    maxLength: 50,
  },
  assignments: [assignments],
};

const schema = new Schema(studentSchema);

const Student = model("student", schema);

module.exports = Student;
