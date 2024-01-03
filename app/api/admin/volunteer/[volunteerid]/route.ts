import VolunteerModel from "@/lib/models/VolunteerModel";
import dbConnect from "@/lib/mongodb";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params: { volunteerid } }: { params: { volunteerid: string } }
) {
  try {
    await dbConnect();
    const Volunteer = await VolunteerModel.findById(volunteerid);
    if (!Volunteer) {
      return NextResponse.json(
        { message: "Volunteer Not Found" },
        { status: 404 }
      );
    }
    return NextResponse.json(
      { message: "Success", data: Volunteer },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { message: error.message || error },
      { status: 500 }
    );
  }
}
