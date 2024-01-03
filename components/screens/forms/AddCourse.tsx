"use client";
import Modal from "@/components/ResponseModal";
import { PlusIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import React, { useCallback, useEffect, useRef, useState } from "react";
const programs: string[] = [
  "Gitasaar Batch 1",
  "Gitasaar Batch 2",
  "Gitasaar Batch 3",
  "Gitasaar Batch 4",
  "Gitasaar Batch 5",
  "Gitasaar Batch 6",
  "Gitasaar Batch 7",
  "Gitasaar Batch 8",
  "Gitasaar Batch 9",
  "Gitasaar Batch 0",
];
const course_type: string[] = [
  "Children Program",
  "Boys",
  "Girls",
  "Family",
  "Married Couples",
  "Children",
];
const course_location: string[] = [
  "In Temple",
  "Temple Hall",
  "Another Hall",
  "HAll",
  "Temple Hall",
  "Children",
];

function AddCourseForm() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isErrorNames, setIsErrorNames] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [volunteerNames, setVolunteerNames] = useState([]);
  const [programNames, setProgramNames] = useState([]);
  const [successMessage, setSuccessMessage] = useState("");
  const formRef = useRef<HTMLFormElement | null>(null);

  console.log(programNames);

  useEffect(() => {
    (async () =>
      await fetch("/api/admin/program/getnames")
        .then((data) => {
          if (data.ok) {
            return data.json();
          } else {
            setIsErrorNames(true);
            return data.json();
          }
        })
        .then((data: any) => {
          isErrorNames
            ? setIsErrorNames(data.message)
            : setProgramNames(data.data);
          console.log(data);
        })
        .catch((error: any) => {
          setErrorMessage(error.message || "An error occurred");
          console.log(error);
        })
        .finally(() => {
          setIsLoading(false);
          isErrorNames && setIsModalOpen(true);
        }))();
    (async () =>
      await fetch("/api/admin/volunteer/getnames")
        .then((data) => {
          if (data.ok) {
            return data.json();
          } else {
            setIsErrorNames(true);
            return data.json();
          }
        })
        .then((data: any) => {
          isErrorNames
            ? setIsErrorNames(data.message)
            : setVolunteerNames(data.data);
          console.log(data);
        })
        .catch((error: any) => {
          setErrorMessage(error.message || "An error occurred");
          console.log(error);
        })
        .finally(() => {
          setIsLoading(false);
          isErrorNames && setIsModalOpen(true);
        }))();
  }, [isSuccess, isErrorNames]);
  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formdata = {
      program_name: formRef.current?.program_name?.value,
      course_name: formRef.current?.course_name?.value,
      course_type: formRef.current?.course_type?.value,
      course_location: formRef.current?.course_location?.value,
      course_description: formRef.current?.course_description?.value,
      course_preacher: formRef.current?.primary_preacher?.value,
      course_mentor1: formRef.current?.preacher_mentor1?.value,
      course_mentor2: formRef.current?.preacher_mentor2?.value,
    };
    const header = new Headers();
    header.append("Content-Type", "application/json");
    await fetch("/api/admin/course", {
      method: "POST",
      headers: header,
      body: JSON.stringify(formdata),
    })
      .then((data) => {
        data.ok && setIsSuccess(true);
        return data.json();
      })
      .then((data: any) => {
        isSuccess
          ? setSuccessMessage(data.message)
          : setErrorMessage(data.message);
      })
      .catch((error: any) => {
        setErrorMessage(error.message || "An error occurred");
      })
      .finally(() => {
        setIsLoading(false);
        setIsModalOpen(true);
      });
  };
  const closeModal = () => {
    setIsModalOpen(false);
    setIsSuccess(false);
    setErrorMessage("");
  };
  return (
    <div className="h-full">
      <div className="bg-white m-5 pt-16 rounded-xl pb-6">
        <h1 className="text-2xl font-bold text-gray-700 md:ml-20 ml-10 mb-16">
          Add New Course
        </h1>
        <form onSubmit={onSubmit} className="m-4" ref={formRef}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="flex flex-col w-full gap-2">
              <label className="font-bold text-gray-700" htmlFor="program_name">
                Program Name
              </label>
              <div className="flex items-center gap-2">
                <select
                  name="program_name"
                  className="border px-4 py-1.5 rounded-md flex-1 outline-none bg-white"
                >
                  {programNames ? (
                    programNames?.map((program: ProgramTypes, key) => (
                      <option value={program._id} key={key}>
                        {program.program_name}
                      </option>
                    ))
                  ) : (
                    <option value="">No Programs To Show</option>
                  )}
                </select>
                <Link href={"/admin/programs/addprogram"}>
                  <button
                    className="bg-purple-100 text-purple-500 px-2 py-1 text-lg rounded-md flex items-center h-max w-max gap-2"
                    type="button"
                  >
                    <PlusIcon className="h-5 w-5" /> New
                  </button>
                </Link>
              </div>
            </div>
            <div className="flex flex-col w-full gap-2">
              <label className="font-bold text-gray-700" htmlFor="course_name">
                Course Name
              </label>
              <input
                type="text"
                name="course_name"
                className="border px-4 py-1.5 rounded-md flex-1 outline-none bg-white"
                placeholder="Enter The Course Name"
              />
            </div>
            <div className="flex flex-col w-full gap-2">
              <label className="font-bold text-gray-700" htmlFor="course_type">
                Type Of Course
              </label>
              <div className="flex items-center gap-2">
                <select
                  name="course_type"
                  className="border px-4 py-1.5 rounded-md flex-1 outline-none bg-white"
                >
                  {course_type?.map((type, key) => (
                    <option value={type} key={key}>
                      {type}
                    </option>
                  ))}
                </select>

                <button
                  className="bg-purple-100 text-purple-500 px-2 py-1 text-lg rounded-md flex items-center h-max w-max gap-2"
                  type="button"
                >
                  <PlusIcon className="h-5 w-5" /> New
                </button>
              </div>
            </div>
            <div className="flex flex-col w-full gap-2">
              <label
                className="font-bold text-gray-700"
                htmlFor="course_location"
              >
                Course Location
              </label>
              <div className="flex items-center gap-2">
                <select
                  name="course_location"
                  className="border px-4 py-1.5 rounded-md flex-1 outline-none bg-white"
                >
                  {course_location?.map((type, key) => (
                    <option value={type} key={key}>
                      {type}
                    </option>
                  ))}
                </select>
                <button
                  className="bg-purple-100 text-purple-500 px-2 py-1 text-lg rounded-md flex items-center h-max w-max gap-2"
                  type="button"
                >
                  <PlusIcon className="h-5 w-5" /> New
                </button>
              </div>
            </div>
            <div className="flex flex-col w-full gap-2">
              <label
                className="font-bold text-gray-700"
                htmlFor="course_desctiption"
              >
                Course Description
              </label>
              <textarea
                name="course_description"
                className="border px-4 py-1.5 rounded-md flex-1 h-[40px] outline-none"
                placeholder="write some description about this course"
              />
            </div>
            <div className="flex flex-col w-full gap-2">
              <label
                className="font-bold text-gray-700"
                htmlFor="primary_preacher"
              >
                Primary Preacher
              </label>
              <div className="flex items-center gap-2">
                <select
                  name="primary_preacher"
                  className="border px-4 py-1.5 rounded-md flex-1 outline-none bg-white"
                >
                  {volunteerNames?.map((volunteer: volunteer, key) => (
                    <option key={key} value={volunteer._id}>
                      {volunteer.initiated_name
                        ? volunteer.initiated_name
                        : volunteer.first_name + volunteer.last_name}
                    </option>
                  ))}
                </select>
                <Link href={"/admin/volunteers/addvolunteer"}>
                  <button
                    className="bg-purple-100 text-purple-500 px-2 py-1 text-lg rounded-md flex items-center h-max w-max gap-2"
                    type="button"
                  >
                    <PlusIcon className="h-5 w-5" /> New
                  </button>
                </Link>
              </div>
            </div>
            <div className="flex flex-col w-full gap-2">
              <label
                className="font-bold text-gray-700"
                htmlFor="preacher_mentor1"
              >
                Preacher/Mentor-1
              </label>
              <div className="flex items-center gap-2">
                <select
                  name="preacher_mentor1"
                  className="border px-4 py-1.5 rounded-md flex-1 outline-none bg-white"
                >
                  {volunteerNames?.map((volunteer: volunteer, key) => (
                    <option key={key} value={volunteer._id}>
                      {volunteer.initiated_name
                        ? volunteer.initiated_name
                        : volunteer.first_name + volunteer.last_name}
                    </option>
                  ))}
                </select>
                <Link href={"/admin/volunteers/addvolunteer"}>
                  <button
                    className="bg-purple-100 text-purple-500 px-2 py-1 text-lg rounded-md flex items-center h-max w-max gap-2"
                    type="button"
                  >
                    <PlusIcon className="h-5 w-5" /> New
                  </button>
                </Link>
              </div>
            </div>
            <div className="flex flex-col w-full gap-2">
              <label
                className="font-bold text-gray-700"
                htmlFor="preacher_mentor2"
              >
                preacher_mentor2
              </label>
              <div className="flex items-center gap-2">
                <select
                  name="preacher_mentor2"
                  className="border px-4 py-1.5 rounded-md flex-1 outline-none bg-white"
                >
                  {volunteerNames?.map((volunteer: volunteer, key) => (
                    <option key={key} value={volunteer._id}>
                      {volunteer.initiated_name
                        ? volunteer.initiated_name
                        : volunteer.first_name + volunteer.last_name}
                    </option>
                  ))}
                </select>
                <Link href={"/admin/volunteers/addvolunteer"}>
                  <button
                    className="bg-purple-100 text-purple-500 px-2 py-1 text-lg rounded-md flex items-center h-max w-max gap-2"
                    type="button"
                  >
                    <PlusIcon className="h-5 w-5" /> New
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="flex items-center w-full justify-center mt-6">
            <button
              className="text-gray-200 font-bold text-lg bg-purple-500 w-max px-5 py-1.5 rounded-lg"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
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

export default AddCourseForm;
