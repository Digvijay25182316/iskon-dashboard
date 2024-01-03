import ProgramModel from "@/lib/models/ProgramModel";
import dbConnect from "@/lib/mongodb";
import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    await dbConnect();
    const Program = await ProgramModel.find()
      ?.populate("created_By", "first_name last_name initiated_name")
      .populate("program_preacher", "first_name last_name initiated_name")
      .populate("program_coordinator", "first_name last_name initiated_name")
      .populate("program_mentor", "first_name last_name initiated_name")
      .populate("program_incharge", "first_name last_name initiated_name");

    if (!Program || Program.length === 0) {
      return NextResponse.json(
        { message: "No Program To Show" },
        { status: 404 }
      );
    }
    return NextResponse.json(
      { message: "Success", data: Program },
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
  try {
    await dbConnect();
    const {
      program_name,
      program_description,
      program_incharge,
      program_preacher,
      program_mentor,
      program_coordinator,
      program_audiance,
      program_location,
    } = await req.json();

    const Program = await ProgramModel.findOne({ program_name: program_name });
    if (Program) {
      return NextResponse.json(
        { message: "Program Name Already Exists" },
        { status: 400 }
      );
    }
    const newProgram = await ProgramModel.create({
      program_name,
      program_description,
      program_preacher,
      program_incharge,
      program_mentor,
      program_coordinator,
      program_audiance,
      program_location,
      created_By: "65922705700f6c28a53b4bbe",
    });
    return NextResponse.json(
      { message: "Program Created Successfully", data: newProgram },
      { status: 200 }
    );
  } catch (error: any) {
    console.log(error);
    return NextResponse.json(
      { message: error.message || error },
      { status: 500 }
    );
  }
}
