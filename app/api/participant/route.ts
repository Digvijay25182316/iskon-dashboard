import ParticipantModel from "@/lib/models/ParticipantModel";
import dbConnect from "@/lib/mongodb";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    await dbConnect();
    const {
      first_name,
      last_name,
      email,
      wa_number,
      contact_number,
      dob,
      age,
      gender,
      service_interested,
    } = await req.json();
    const Participant = await ParticipantModel.findOne({
      contact_number: contact_number,
    });
    if (Participant) {
      return NextResponse.json(
        { message: "Participant Already registered" },
        { status: 400 }
      );
    }
    const newParticipant = await ParticipantModel.create({
      first_name,
      last_name,
      email,
      wa_number,
      contact_number,
      dob,
      age,
      gender,
      service_interested,
    });
    return NextResponse.json(
      { message: "successfully registered", data: newParticipant },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { message: error.message || error },
      { status: 500 }
    );
  }
}
