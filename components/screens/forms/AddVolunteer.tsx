"use client";
import Modal from "@/components/ResponseModal";
import React, { useRef, useState } from "react";

function AddVolunteerForm() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const formRef = useRef<HTMLFormElement | null>(null);
  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const fomrdata = {
      first_name: formRef.current?.first_name?.value,
      last_name: formRef.current?.last_name?.value,
      initiated_name: formRef.current?.initiated_name?.value,
      wa_number: formRef.current?.wa_number?.value,
      contact_number: formRef.current?.contact_number?.value,
      email: formRef.current?.email?.value,
      dob: formRef.current?.dob?.value,
      gender: formRef.current?.gender?.value,
      address: formRef.current?.address?.value,
      current_service: formRef.current?.current_service?.value,
    };
    const header = new Headers();
    header.append("Content-Type", "application/json");
    await fetch("/api/admin/volunteer", {
      method: "POST",
      headers: header,
      body: JSON.stringify(fomrdata),
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
    <div className="h-full  overflow-x-hidden">
      <div className="bg-white m-5 pt-10 rounded-xl pb-6">
        <h1 className="text-2xl font-bold text-gray-700 md:ml-20 ml-10 mb-10">
          Register New Volunteer
        </h1>
        <form onSubmit={onSubmit} className="m-5" ref={formRef}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="flex flex-col w-full gap-2">
              <label className="font-bold text-gray-700" htmlFor="first_name">
                First Name
              </label>
              <input
                type="text"
                name="first_name"
                className="border px-4 py-1.5 rounded-md flex-1 outline-none bg-white max-h-[40px]"
                placeholder="enter your first name"
              />
            </div>
            <div className="flex flex-col w-full gap-2">
              <label className="font-bold text-gray-700" htmlFor="last_name">
                Last Name
              </label>
              <input
                type="text"
                name="last_name"
                className="border px-4 py-1.5 rounded-md flex-1 outline-none bg-white max-h-[40px]"
                placeholder="enter your last name"
              />
            </div>
            <div className="flex flex-col w-full gap-2">
              <label
                className="font-bold text-gray-700"
                htmlFor="initiated_name"
              >
                Initiated Name
              </label>
              <input
                type="text"
                name="initiated_name"
                className="border px-4 py-1.5 rounded-md flex-1 outline-none bg-white max-h-[40px]"
                placeholder="enter your initiated name"
              />
            </div>
            <div className="flex flex-col w-full gap-2">
              <label className="font-bold text-gray-700" htmlFor="wa_number">
                Whatsapp Number
              </label>
              <input
                type="tel"
                name="wa_number"
                className="border px-4 py-1.5 rounded-md flex-1 outline-none bg-white max-h-[40px]"
                placeholder="enter your Whatsapp Number"
              />
            </div>
            <div className="flex flex-col w-full gap-2">
              <label
                className="font-bold text-gray-700"
                htmlFor="contact_number"
              >
                Contact Number
              </label>
              <input
                type="tel"
                name="contact_number"
                className="border px-4 py-1.5 rounded-md flex-1 outline-none bg-white max-h-[40px]"
                placeholder="enter your Contact Number"
              />
            </div>
            <div className="flex flex-col w-full gap-2">
              <label className="font-bold text-gray-700" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                name="email"
                className="border px-4 py-1.5 rounded-md flex-1 outline-none bg-white max-h-[40px]"
                placeholder="xyz@example.com"
              />
            </div>
            <div className="flex flex-col w-full gap-2">
              <label className="font-bold text-gray-700" htmlFor="dob">
                Date Of Birth
              </label>
              <input
                type="date"
                name="dob"
                className="border px-4 py-1.5 rounded-md flex-1 outline-none bg-white max-h-[40px]"
                placeholder="xyz@example.com"
              />
            </div>
            <div className="flex flex-col w-full gap-2">
              <label className="font-bold text-gray-700" htmlFor="gender">
                Gender
              </label>
              <select
                name="gender"
                className="border px-4 py-1.5 rounded-md flex-1 outline-none bg-white max-h-[40px]"
              >
                <option value="male">male</option>
                <option value="female">female</option>
              </select>
            </div>
            <div className="flex flex-col w-full gap-2">
              <label className="font-bold text-gray-700" htmlFor="address">
                Address
              </label>
              <input
                type="text"
                name="address"
                className="border px-4 py-1.5 rounded-md flex-1 outline-none bg-white max-h-[40px]"
                placeholder="123 Main Street
                Cityville, State 12345
                United States"
              />
            </div>
            <div className="flex flex-col w-full gap-2">
              <label
                className="font-bold text-gray-700"
                htmlFor="current_service"
              >
                Current Service
              </label>
              <input
                type="text"
                name="current_service"
                className="border px-4 py-1.5 rounded-md flex-1 outline-none bg-white max-h-[40px]"
                placeholder="123 Main Street
                Cityville, State 12345
                United States"
              />
            </div>
          </div>
          <div className="flex items-center w-full justify-center mt-5">
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

export default AddVolunteerForm;
