import mongoose, { Document } from "mongoose";

interface LevelTypes extends Document {
  level_number: number;
  level_description: string;
  course: { type: mongoose.Schema.Types.ObjectId };
  program: { type: mongoose.Schema.Types.ObjectId };
  level_preacher1: { type: mongoose.Schema.Types.ObjectId };
  level_preacher2: { type: mongoose.Schema.Types.ObjectId };
  level_mentor: { type: mongoose.Schema.Types.ObjectId };
  level_coordinator: { type: mongoose.Schema.Types.ObjectId };
  level_status: "active" | "inactive";
  number_of_attendance: number;
  number_of_sessions: number;
  sessions: { type: mongoose.Schema.Types.ObjectId }[];
  ExpectedStartDate: Date;
  actualStartDate?: Date;
  ExpectedEndDate: Date;
  actualEndDate?: Date;
  created_By: { type: mongoose.Schema.Types.ObjectId };
  createdAt: Date;
  updatedAt: Date;
}

const Schema = new mongoose.Schema<LevelTypes>(
  {
    course: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
    },
    program: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Program",
    },
    level_number: {
      type: Number,
      required: [true, "enter the level number"],
    },
    level_description: {
      type: String,
      required: [true, "enter the description of this level"],
    },
    level_preacher1: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Volunteer",
    },
    level_preacher2: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Volunteer",
    },
    level_mentor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Volunteer",
    },
    level_coordinator: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Volunteer",
    },
    level_status: {
      type: String,
      enum: ["active", "inactive"],
      default: "active",
    },
    number_of_sessions: {
      type: Number,
      default: 0,
    },
    number_of_attendance: {
      type: Number,
      default: 0,
    },
    sessions: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Sessions",
        required: true,
      },
    ],
    ExpectedStartDate: {
      type: Date,
      required: [true, "enter your starting date"],
    },
    actualStartDate: {
      type: Date,
    },
    ExpectedEndDate: {
      type: Date,
      required: true,
    },
    actualEndDate: {
      type: Date,
    },
    created_By: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Volunteer",
    },
  },
  { timestamps: true }
);

export default mongoose.models.Level || mongoose.model("Level", Schema);
