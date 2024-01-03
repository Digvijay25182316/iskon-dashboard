import mongoose, { Document } from "mongoose";

interface CourseTypes extends Document {
  program_name: mongoose.Schema.Types.ObjectId;
  course_name: string;
  course_type: [string];
  course_location: string;
  course_description: string;
  course_preacher: { type: mongoose.Schema.Types.ObjectId; ref: string };
  course_mentor1: { type: mongoose.Schema.Types.ObjectId; ref: string };
  course_mentor2: { type: mongoose.Schema.Types.ObjectId; ref: string };
  number_of_levels: number;
  course_Levels: [{ type: mongoose.Schema.Types.ObjectId; ref: string }];
  created_At: string;
  update_At: string;
  created_By: { type: mongoose.Schema.Types.ObjectId; ref: string };
}

const Schema = new mongoose.Schema<CourseTypes>(
  {
    program_name: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Program",
      required: [true, "enter the program name"],
    },
    course_name: {
      type: String,
      required: [true, "enter the course name"],
    },
    course_description: {
      type: String,
      required: [true, "enter the course description"],
    },
    course_type: {
      type: [String],
      default: [],
    },
    course_location: {
      type: String,
      required: [true, "enter your course location"],
    },
    course_preacher: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Volunteer",
      required: [true, "please select the preacher name"],
    },
    course_mentor1: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Volunteer",
      required: [true, "please select the mentor1 name"],
    },
    course_mentor2: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Volunteer",
      required: [true, "please select the mentor2 name"],
    },
    number_of_levels: {
      type: Number,
      default: 0,
    },
    course_Levels: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Level",
      },
    ],
    created_By: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Volunteer",
    },
  },

  { timestamps: true }
);

export default mongoose.models.Course || mongoose.model("Course", Schema);
