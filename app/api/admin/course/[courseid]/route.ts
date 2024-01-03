import CoursesModel from "@/lib/models/CoursesModel";
import { NextRequest, NextResponse } from "next/server";

type Props = {
  params: {
    courseid: string;
  };
};

export async function GET(req: NextRequest, { params: { courseid } }: Props) {
  try {
    const courseDetails = await CoursesModel.findById(courseid)
      ?.populate("course_preacher", "first_name last_name initiated_name")
      .populate("course_mentor1", "first_name last_name initiated_name")
      .populate("course_mentor2", "first_name last_name initiated_name");

    if (!courseDetails) {
      return NextResponse.json(
        { message: "This Course Does Not Exist" },
        { status: 404 }
      );
    }
    if (courseDetails.course_Levels.length > 0) {
      courseDetails.populate(
        "course_Levels",
        "level_name level_description number_of_sessions number_of_attendance level_preacher1 level_preacher2 level_coordinator level_mentor"
      );
    }
    return NextResponse.json(
      {
        message: "Success",
        data: courseDetails,
      },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error.message || error },
      { status: 500 }
    );
  }
}
