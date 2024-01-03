import mongoose, { Document } from "mongoose";

interface ProgramTypes extends Document {
  program_name: string;
  program_description: string;
  program_preacher: { type: mongoose.Schema.Types.ObjectId };
  program_incharge: { type: mongoose.Schema.Types.ObjectId };
  program_mentor: { type: mongoose.Schema.Types.ObjectId };
  program_coordinator: { type: mongoose.Schema.Types.ObjectId };
  program_audiance: string[];
  program_location: string;
  courses: { type: mongoose.Schema.Types.ObjectId }[];
  created_By: { type: mongoose.Schema.Types.ObjectId };
  createdAt: Date;
  updatedAt: Date;
}

const Schema = new mongoose.Schema<ProgramTypes>(
  {
    program_name: {
      type: String,
      required: [true, "please enter your name"],
    },
    program_description: {
      type: String,
      required: [true, "please enter your description"],
    },
    program_incharge: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Volunteer",
      required: [true, "please select the incharge of program"],
    },
    program_preacher: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Volunteer",
      required: [true, "please select the preacher of program"],
    },
    program_mentor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Volunteer",
      required: [true, "please select the mentor of program"],
    },
    program_coordinator: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Volunteer",
      required: [true, "please select the coordinator of program"],
    },
    program_audiance: {
      type: [String],
      default: [],
    },
    program_location: {
      type: String,
      required: [true, "please enter the location"],
    },
    courses: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Course",
      },
    ],
    created_By: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Volunteer",
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.models.Program || mongoose.model("Program", Schema);
