import mongoose, { Document } from "mongoose";

interface SessionTypes extends Document {
  session_name: string;
  session_description: string;
  sessions_attendance: { type: mongoose.Schema.Types.ObjectId }[];
  duration_in_minutes: string;
  program_name: { type: mongoose.Schema.Types.ObjectId };
  course: {
    type: mongoose.Schema.Types.ObjectId;
    ref: string;
  };
  level: {
    type: mongoose.Schema.Types.ObjectId;
    ref: string;
  };
  number_of_attendance: number;
  session_attendance_url: string;
  created_By: { type: mongoose.Schema.Types.ObjectId };
}

const Schema = new mongoose.Schema<SessionTypes>(
  {
    session_name: {
      type: String,
      required: [true, "enter the sessions name"],
    },
    session_description: {
      type: String,
      required: [true, "enter the sessions description"],
    },
    sessions_attendance: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Participant",
        required: true,
      },
    ],
    duration_in_minutes: {
      type: String,
      required: [true, "enter the expected time"],
    },
    program_name: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Program",
      required: true,
    },
    number_of_attendance: {
      type: Number,
      default: 0,
    },
    session_attendance_url: {
      type: String,
      required: [true, "enter the expected time"],
    },
    created_By: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Volunteer",
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.models.Session || mongoose.model("Session", Schema);
