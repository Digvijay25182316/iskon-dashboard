import ProgramModel from "@/lib/models/ProgramModel";
import dbConnect from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await dbConnect();
    const names = await ProgramModel.find().select("program_name");
    if (!names || names.length === 0) {
      return NextResponse.json(
        { message: "No Program To show" },
        { status: 404 }
      );
    }
    return NextResponse.json(
      { message: "Success", data: names },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { message: error.message || error },
      { status: 500 }
    );
  }
}
