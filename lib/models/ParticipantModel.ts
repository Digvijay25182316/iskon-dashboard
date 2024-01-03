import mongoose, { Document } from "mongoose";
interface ParticipantTypes extends Document {
  participant_first_name: string;
  participant_last_name: string;
  participant_wa_number: string;
  participant_contact_number: string;
  participant_email: string;
  participant_dob: Date;
  participant_gender: string;
  participant_address: string;
  participant_city: string;
  participant_maritalStatus: "married" | "unmarried" | "widow" | "widower";
  participant_education: string;
  participant_occupation: string;
  participant_reference: string;
  participant_status: "connected" | "active" | "inactive";
  participant_number_of_children: string;
  participant_created_By: mongoose.Schema.Types.ObjectId;
  participant_service_interested: string;
}

const Schema = new mongoose.Schema<ParticipantTypes>(
  {
    participant_first_name: {
      type: String,
      required: [true, "please enter the first name"],
    },
    participant_last_name: {
      type: String,
      required: [true, "enter your last name"],
    },
    participant_wa_number: {
      type: String,
      required: [true, "please enter your whatsapp number"],
    },
    participant_contact_number: {
      type: String,
      required: [true, "enter your contact number"],
      unique: true,
    },
    participant_email: {
      type: String,
      required: [true, "enter your email"],
    },
    participant_dob: {
      type: Date,
      required: [true, "enter your date of birth"],
    },
    participant_gender: {
      type: String,
      required: [true, "enter your gender"],
    },
    participant_address: {
      type: String,
      required: [true, "enter your address"],
    },
    participant_city: {
      type: String,
      required: [true, "enter your city"],
    },
    participant_maritalStatus: {
      type: String,
      enum: ["unmarried", "married", "widow", "widower"],
      required: [true, "enter your city"],
    },
    participant_education: {
      type: String,
      required: [true, "enter your education"],
    },
    participant_occupation: {
      type: String,
      required: [true, "enter your occupation/what do you do for living?"],
    },
    participant_reference: {
      type: String,
      required: [
        true,
        "who encouraged you to join Krishna consiousness/who did you get the information from regarding to join",
      ],
    },
    participant_service_interested: {
      type: String,
      required: [true, "select the service of your interest"],
    },
    participant_created_By: {
      type: mongoose.Schema.Types.ObjectId,
    },
  },
  { timestamps: true }
);

export default mongoose.models.Participant ||
  mongoose.model("Participant", Schema);
