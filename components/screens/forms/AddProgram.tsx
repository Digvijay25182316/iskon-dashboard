"use client";
import Modal from "@/components/ResponseModal";
import { PlusIcon } from "@heroicons/react/24/outline";
import React, { useEffect, useRef, useState } from "react";

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

function AddProgramForm() {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isErrorNames, setIsErrorNames] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [volunteerNames, setVolunteerNames] = useState([]);
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
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
  }, [isErrorNames]);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formdata = {
      program_name: formRef.current?.program_name?.value,
      program_description: formRef.current?.program_description?.value,
      program_incharge: formRef.current?.program_incharge?.value,
      program_preacher: formRef.current?.program_preacher?.value,
      program_mentor: formRef.current?.program_mentor?.value,
      program_coordinator: formRef.current?.program_coordinator?.value,
      program_audiance: formRef.current?.program_audiance?.value,
      program_location: formRef.current?.program_location?.value,
    };
    await fetch("/api/admin/program", {
      method: "POST",
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
          Add New Program
        </h1>
        <form onSubmit={onSubmit} className="m-5" ref={formRef}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="flex flex-col w-full gap-2">
              <label className="font-bold text-gray-700" htmlFor="program_name">
                Program Name
              </label>
              <input
                type="text"
                placeholder="enter your program name"
                name="program_name"
                className="border px-4 py-1.5 rounded-md flex-1 outline-none bg-white max-h-[40px]"
              />
            </div>
            <div className="flex flex-col w-full gap-2">
              <label
                className="font-bold text-gray-700"
                htmlFor="program_description"
              >
                Program Description
              </label>
              <textarea
                name="program_description"
                placeholder="write some description about this course"
                className="border px-4 py-1.5 rounded-md flex-1 outline-none bg-white"
              />
            </div>
            <div className="flex flex-col w-full gap-2">
              <label
                className="font-bold text-gray-700"
                htmlFor="program_preacher"
              >
                Program Preacher
              </label>
              <div className="flex items-center gap-2">
                <select
                  name="program_preacher"
                  className="border px-4 py-1.5 rounded-md flex-1 outline-none bg-white"
                >
                  {volunteerNames?.map((volunteer: volunteer, key: number) => (
                    <option key={key} value={volunteer._id}>
                      {volunteer.initiated_name
                        ? volunteer.initiated_name
                        : volunteer.first_name + volunteer.last_name}
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
                htmlFor="program_incharge"
              >
                Program Incharge
              </label>
              <div className="flex items-center gap-2">
                <select
                  name="program_incharge"
                  className="border px-4 py-1.5 rounded-md flex-1 outline-none bg-white"
                >
                  {volunteerNames?.map((volunteer: volunteer, key: number) => (
                    <option key={key} value={volunteer._id}>
                      {volunteer.initiated_name
                        ? volunteer.initiated_name
                        : volunteer.first_name + volunteer.last_name}
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
                htmlFor="program_coordinator"
              >
                Program Coordinator
              </label>
              <div className="flex items-center gap-2">
                <select
                  name="program_coordinator"
                  className="border px-4 py-1.5 rounded-md flex-1 outline-none bg-white"
                >
                  {volunteerNames?.map((volunteer: volunteer, key: number) => (
                    <option key={key} value={volunteer._id}>
                      {volunteer.initiated_name
                        ? volunteer.initiated_name
                        : volunteer.first_name + volunteer.last_name}
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
                htmlFor="program_mentor"
              >
                Program Mentor
              </label>
              <div className="flex items-center gap-2">
                <select
                  name="program_mentor"
                  className="border px-4 py-1.5 rounded-md flex-1 outline-none bg-white"
                >
                  {volunteerNames?.map((volunteer: volunteer, key: number) => (
                    <option key={key} value={volunteer._id}>
                      {volunteer.initiated_name
                        ? volunteer.initiated_name
                        : volunteer.first_name + volunteer.last_name}
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
                htmlFor="program_location"
              >
                Program Location
              </label>
              <div className="flex items-center gap-2">
                <select
                  name="program_location"
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
                htmlFor="program_audiance"
              >
                Program Audiance Type
              </label>
              <input
                name="program_audiance"
                className="border px-4 py-1.5 rounded-md flex-1 outline-none bg-white"
              />
            </div>
          </div>
          <div className="flex items-center w-full justify-center mt-10">
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

export default AddProgramForm;
