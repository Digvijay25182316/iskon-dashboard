import ParticipantModel from "@/lib/models/ParticipantModel";
import dbConnect from "@/lib/mongodb";
import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    await dbConnect();
    const Participants = await ParticipantModel.find();
    if (!Participants || Participants.length === 0) {
      return NextResponse.json(
        { message: "No Participant To Show" },
        { status: 404 }
      );
    }
    return NextResponse.json(
      { message: "Success", data: Participants },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { message: error.message || error },
      { status: 500 }
    );
  }
}
