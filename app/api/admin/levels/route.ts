import LevelModel from "@/lib/models/LevelModel";
import dbConnect from "@/lib/mongodb";
import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    await dbConnect();
    const Levels = await LevelModel.find()
      .populate("level_preacher1", "first_name last_name initiated_name")
      .populate("level_preacher2", "first_name last_name initiated_name")
      .populate("level_coordinator", "first_name last_name initiated_name")
      .populate("level_mentor", "first_name last_name initiated_name");
    return NextResponse.json(
      { message: "success", data: Levels },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { message: error.message || error },
      { status: 500 }
    );
  }
}
