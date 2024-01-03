import VolunteerModel from "@/lib/models/VolunteerModel";
import dbConnect from "@/lib/mongodb";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    await dbConnect();
    const volunteersByName = await VolunteerModel.find().select(
      "first_name last_name initiated_name"
    );
    if (!volunteersByName || volunteersByName.length === 0) {
      console.log(volunteersByName);
      return NextResponse.json(
        { message: "No Volunteer To Show" },
        { status: 404 }
      );
    }
    return NextResponse.json(
      { message: "Success", data: volunteersByName },
      { status: 201 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { message: error.message || error },
      { status: 500 }
    );
  }
}
