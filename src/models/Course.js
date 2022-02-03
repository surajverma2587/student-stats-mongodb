const { Schema, model } = require("mongoose");
const moment = require("moment");

const courseSchema = {
  courseName: {
    type: String,
    required: true,
    maxLength: 100,
  },
  inPerson: {
    type: Boolean,
    default: true,
  },
  startDate: {
    type: Date,
    default: moment(),
  },
  endDate: {
    type: Date,
    default: moment().add(12, "weeks"),
  },
  students: [
    {
      type: Schema.Types.ObjectId,
      ref: "student",
    },
  ],
};

const schema = new Schema(courseSchema, {
  toJSON: {
    getters: true,
  },
  id: false,
});

schema.virtual("numberOfEnrolledStudents").get(function () {
  return this.students.length;
});

const Course = model("course", schema);

module.exports = Course;
