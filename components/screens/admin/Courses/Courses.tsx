"use client";
import {
  AcademicCapIcon,
  EyeIcon,
  PencilSquareIcon,
  TrashIcon,
} from "@heroicons/react/24/solid";
import React, { useEffect, useState } from "react";
import LoadingCourseSkeleton from "./LoadingCourseSkeleton";
import CoursesCard from "./CoursesCard";
import Modal from "@/components/ResponseModal";

function CoursesList() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isErrorNames, setIsErrorCourse] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [coursesNames, setCoursesNames] = useState([]);
  const [successMessage, setSuccessMessage] = useState("");
  useEffect(() => {
    (async () => {
      setIsLoading(true);
      await fetch("/api/admin/course")
        .then((data) => {
          if (data.ok) {
            return data.json();
          } else {
            setIsErrorCourse(true);
            return data.json();
          }
        })
        .then((data: any) => {
          isErrorNames
            ? setErrorMessage(data.message)
            : setCoursesNames(data.data);
        })
        .catch((error: any) => {
          setErrorMessage(error.message || "An error occurred");
        })
        .finally(() => {
          setIsLoading(false);
          isErrorNames && setIsModalOpen(true);
        });
    })();
  }, [isErrorNames]);
  const closeModal = () => {
    setIsModalOpen(false);
    setIsSuccess(false);
    setErrorMessage("");
  };
  return (
    <div className="">
      <p className="text-2xl font-bold text-gray-600 pl-10 pt-10">Courses</p>
      <div className="md:px-10 px-5">
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-5">
            <LoadingCourseSkeleton />
            <LoadingCourseSkeleton />
            <LoadingCourseSkeleton />
            <LoadingCourseSkeleton />
            <LoadingCourseSkeleton />
            <LoadingCourseSkeleton />
            <LoadingCourseSkeleton />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-5">
            {coursesNames ? (
              coursesNames?.map((course: CourseTypes, key) => (
                <CoursesCard key={key} course={course} />
              ))
            ) : (
              <div className="flex items-center justify-center md:w-[80vw] mt-40">
                <div className="text-red-500 text-lg bg-purple-100 p-5 rounded-xl flex flex-col items-center gap-5">
                  <AcademicCapIcon className="h-16 w-16" />
                  No Course To Show
                </div>
              </div>
            )}
          </div>
        )}
      </div>
      <Modal
        isLoading={isLoading}
        isSuccess={isSuccess}
        errorMessage={errorMessage}
        successMessage={successMessage}
        isModalOpen={isModalOpen}
        onClose={closeModal}
      />
    </div>
  );
}

export default CoursesList;
