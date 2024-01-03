import mongoose, { Document } from "mongoose";

interface VolunteerTypes extends Document {
  first_name: string;
  last_name: string;
  initiated_name: string;
  wa_number: string;
  contact_number: string;
  email: string;
  dob: Date;
  gender: string;
  address: string;
  service_interested: String;
  current_survice: String;
  created_By: mongoose.Schema.Types.ObjectId;
}

const Schema = new mongoose.Schema<VolunteerTypes>(
  {
    first_name: {
      type: String,
      required: [true, "please enter your name"],
    },
    last_name: {
      type: String,
      required: [true, "please enter your last name"],
    },
    initiated_name: {
      type: String,
    },
    wa_number: {
      type: String,
      required: [true, "please enter your whatsapp number"],
    },
    contact_number: {
      type: String,
      required: [true, "please enter your contact number"],
      unique: true,
    },
    email: {
      type: String,
      required: true,
    },
    dob: {
      type: Date,
      required: [true, "enter your date of birth"],
    },
    gender: {
      type: String,
      required: [true, "enter your gender"],
    },
    address: {
      type: String,
      required: [true, "enter your address"],
    },
    service_interested: {
      type: String,
      required: true,
    },
    current_survice: {
      type: String,
      required: true,
    },
    created_By: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Volunteer",
      required: [true, "Please provide the creator volunteer ID"],
    },
  },
  { timestamps: true }
);

export default mongoose.models.Volunteer || mongoose.model("Volunteer", Schema);
