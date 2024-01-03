import VolunteerModel from "@/lib/models/VolunteerModel";
import dbConnect from "@/lib/mongodb";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    await dbConnect();
    const Volunteer = await VolunteerModel.find().populate(
      "created_By",
      "first_name last_name initiated_name"
    );
    if (Volunteer.length === 0 || !Volunteer) {
      return NextResponse.json(
        { message: "No Volunteers to show" },
        { status: 404 }
      );
    }
    return NextResponse.json(
      { message: "success", data: Volunteer },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { message: error.message || error },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest, res: NextResponse) {
  const created_By = "65922705700f6c28a53b4bbe";
  try {
    await dbConnect();
    const {
      first_name,
      last_name,
      email,
      initiated_name,
      wa_number,
      contact_number,
      dob,
      gender,
      address,
      current_survice,
    } = await req.json();
    const Volunteer = await VolunteerModel.findOne({
      contact_number: contact_number,
    });
    if (Volunteer) {
      return NextResponse.json(
        { message: "Volunteer Already Exists" },
        { status: 400 }
      );
    }
    const newVolunteer = await VolunteerModel.create({
      first_name,
      last_name,
      email,
      initiated_name,
      wa_number,
      contact_number,
      dob,
      gender,
      address,
      created_By,
      current_survice,
      service_interested: "something",
    });
    return NextResponse.json(
      { message: "ran", data: newVolunteer },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { message: error.message || error },
      { status: 500 }
    );
  }
}
