import UpdateModal from "@/components/screens/admin/Courses/UpdateModal";
import ViewModal from "@/components/screens/admin/Courses/ViewModal";
import {
  AcademicCapIcon,
  EyeIcon,
  PencilSquareIcon,
  TrashIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import React, { useState } from "react";

interface Props {
  course: CourseTypes;
}

function CoursesCard({ course }: Props) {
  const [ViewOpen, setViewOpen] = useState(false);
  const [UpdateOpen, setUpdateOpen] = useState(false);
  const [DeleteOpen, setDeleteOpen] = useState(false);
  return (
    <div className="bg-white p-3 rounded-2xl shadow flex flex-col">
      <div className=" flex items-center justify-between">
        <p className="bg-purple-100 text-purple-500 p-2 rounded-full">
          <AcademicCapIcon className="h-6 w-6" />
        </p>
        <div className="flex items-center gap-5">
          <button
            className="bg-gray-100 text-gray-500 transition-colors duration-500 hover:text-purple-500 hover:bg-purple-100 px-2 py-1 rounded-lg"
            onClick={() => setViewOpen(!ViewOpen)}
          >
            <EyeIcon className="h-6 w-6" />
          </button>
          <button
            className="bg-gray-100 text-gray-500 transition-colors duration-500 hover:text-purple-500 hover:bg-purple-100 px-2 py-1 rounded-lg"
            onClick={() => setUpdateOpen(!UpdateOpen)}
          >
            <PencilSquareIcon className="h-6 w-6" />
          </button>
          <button className="bg-gray-100 text-gray-500 transition-colors duration-500 hover:text-purple-500 hover:bg-purple-100 px-2 py-1 rounded-lg">
            <TrashIcon className="h-6 w-6" />
          </button>
        </div>
      </div>
      <div>
        <p className="text-lg font-bold text-gray-700">{course.course_name}</p>
        <p className="text-gray-500">{course.course_description}</p>
        <div className="flex flex-col gap-2 mt-6">
          <div className="flex items-center gap-5">
            <p>Mentor-1 : </p>
            {course.course_mentor1?.initiated_name ? (
              <p className="text-blue-500 hover:underline flex cursor-pointer">
                <UserCircleIcon className="h-6 w-6" />
                {course.course_mentor1?.initiated_name}
              </p>
            ) : (
              <p className="text-blue-500 hover:underline flex cursor-pointer">
                <UserCircleIcon className="h-6 w-6" />
                {course.course_mentor1?.first_name +
                  " " +
                  course.course_mentor1?.last_name}
              </p>
            )}
          </div>
          <div className="flex items-center gap-5">
            <p>Mentor-2 : </p>
            {course.course_mentor2?.initiated_name ? (
              <p className="text-blue-500 hover:underline flex cursor-pointer">
                <UserCircleIcon className="h-6 w-6" />
                {course.course_mentor2?.initiated_name}
              </p>
            ) : (
              <p className="text-blue-500 hover:underline flex cursor-pointer">
                <UserCircleIcon className="h-6 w-6" />
                {course.course_mentor2?.first_name +
                  " " +
                  course.course_mentor2?.last_name}
              </p>
            )}
          </div>
          <div className="flex items-center gap-5">
            <p>Preacher : </p>
            {course.course_preacher?.initiated_name ? (
              <p className="text-blue-500 hover:underline flex cursor-pointer">
                <UserCircleIcon className="h-6 w-6" />
                {course.course_preacher?.initiated_name}
              </p>
            ) : (
              <p className="text-blue-500 hover:underline flex cursor-pointer">
                <UserCircleIcon className="h-6 w-6" />
                {course.course_preacher?.first_name +
                  " " +
                  course.course_preacher?.last_name}
              </p>
            )}
          </div>
        </div>
      </div>
      <ViewModal
        id={course._id}
        isOpen={ViewOpen}
        toggleSlider={() => setViewOpen(!ViewOpen)}
      />
      <UpdateModal
        id={course._id}
        isOpen={UpdateOpen}
        toggleSlider={() => setUpdateOpen(!UpdateOpen)}
      >
        <div>this is the modal component</div>
      </UpdateModal>
    </div>
  );
}

export default CoursesCard;
