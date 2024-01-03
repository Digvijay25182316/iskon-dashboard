import CoursesModel from "@/lib/models/CoursesModel";
import ProgramModel from "@/lib/models/ProgramModel";
import dbConnect from "@/lib/mongodb";
import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    await dbConnect();
    const Course = await CoursesModel.find()
      ?.populate("course_preacher", "first_name last_name initiated_name")
      .populate("course_mentor1", "first_name last_name initiated_name")
      .populate("course_mentor2", "first_name last_name initiated_name")
      .populate("created_By", "first_name last_name initiated_name");
    if (!Course || Course.length === 0) {
      return NextResponse.json(
        { message: "No Courses to Show" },
        { status: 404 }
      );
    }
    return NextResponse.json(
      { message: "success", data: Course },
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
  const createdBy = "65922705700f6c28a53b4bbe";
  try {
    await dbConnect();
    const {
      program_name,
      course_name,
      course_description,
      course_location,
      course_type,
      course_preacher,
      course_mentor1,
      course_mentor2,
    } = await req.json();
    const Program = await ProgramModel.findById(program_name);
    if (!Program) {
      return NextResponse.json(
        { message: "Program Not Found" },
        { status: 404 }
      );
    }
    const Course = await CoursesModel.findOne({ course_name: course_name });
    if (Course) {
      return NextResponse.json(
        { message: "Course Already Exists try another name" },
        { status: 400 }
      );
    }
    const newCourse = await CoursesModel.create({
      program_name,
      course_name,
      course_description,
      course_location,
      course_type,
      course_preacher,
      course_mentor1,
      course_mentor2,
      created_By: createdBy,
    });
    Program.courses.push(newCourse._id);
    await Program.save();
    return NextResponse.json(
      { message: "course created successfully", data: newCourse },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { message: error.message || error },
      { status: 500 }
    );
  }
}
