"use client";
import Modal from "@/components/ResponseModal";
import React, { useRef, useState } from "react";

const services: string[] = [
  "Service1",
  "Service2",
  "Service3",
  "Service4",
  "Service5",
  "Service6",
  "Service7",
  "Service8",
  "Service9",
  "Service10",
];

interface formData {
  first_name: string;
  last_name: string;
  wa_number: number;
  contact_number: number;
  email: string;
  dob: string;
  age: number;
  gender: string;
  service_interested: string;
}

function AddParticipantForm() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const formRef = useRef<HTMLFormElement | null>(null);
  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setIsModalOpen(true);
    const formdata: formData = {
      first_name: formRef.current?.first_name?.value,
      last_name: formRef.current?.last_name?.value,
      wa_number: formRef.current?.wa_number?.value,
      contact_number: formRef.current?.contact_number?.value,
      email: formRef.current?.email?.value,
      dob: formRef.current?.dob?.value,
      age: formRef.current?.age?.value,
      gender: formRef.current?.gender?.value,
      service_interested: formRef.current?.service_interested?.value,
    };
    const header = new Headers();
    header.append("Content-Type", "application/json");
    await fetch("/api/participant", {
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
        console.log(error);
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
    <div className="w-screen items-center justify-center bg-gradient-to-r from-purple-100 via-orange-100 to-red-100 md:h-screen h-full p-5">
      <div className="bg-white pt-16 rounded-xl pb-6">
        <h1 className="text-2xl font-bold text-gray-700 md:ml-20 ml-10 mb-16">
          Register Participant
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
                className="border px-4 py-1.5 rounded-md flex-1 outline-none bg-white"
                placeholder="Enter Your First Name"
              />
            </div>
            <div className="flex flex-col w-full gap-2">
              <label className="font-bold text-gray-700" htmlFor="last_name">
                Last Name
              </label>
              <input
                type="text"
                name="last_name"
                className="border px-4 py-1.5 rounded-md flex-1 outline-none bg-white"
                placeholder="Enter Your Last Name"
              />
            </div>
            <div className="flex flex-col w-full gap-2">
              <label className="font-bold text-gray-700" htmlFor="wa_number">
                Whatsapp Number
              </label>
              <input
                type="tel"
                name="wa_number"
                className="border px-4 py-1.5 rounded-md flex-1 outline-none bg-white"
                placeholder="Enter Your Whatsapp Name"
              />
            </div>
            <div className="flex flex-col w-full gap-2">
              <label className="font-bold text-gray-700" htmlFor="wa_number">
                Contact Number
              </label>
              <input
                type="tel"
                name="contact_number"
                className="border px-4 py-1.5 rounded-md flex-1 outline-none bg-white"
                placeholder="Enter Your Contact Name"
              />
            </div>
            <div className="flex flex-col w-full gap-2">
              <label className="font-bold text-gray-700" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                name="email"
                className="border px-4 py-1.5 rounded-md flex-1 outline-none bg-white"
                placeholder="Enter Your Email"
              />
            </div>
            <div className="flex flex-col w-full gap-2">
              <label className="font-bold text-gray-700" htmlFor="dob">
                Date Of Birth
              </label>
              <input
                type="date"
                name="dob"
                className="border px-4 py-1.5 rounded-md flex-1 outline-none bg-white"
                placeholder="Enter Your Email"
              />
            </div>
            <div className="flex flex-col w-full gap-2">
              <label className="font-bold text-gray-700" htmlFor="age">
                Age
              </label>
              <input
                type="number"
                name="age"
                className="border px-4 py-1.5 rounded-md flex-1 outline-none bg-white"
                placeholder="Enter Your Age"
              />
            </div>
            <div className="flex flex-col w-full gap-2">
              <label className="font-bold text-gray-700" htmlFor="gender">
                Gender
              </label>
              <select
                name="gender"
                className="border px-4 py-1.5 rounded-md flex-1 outline-none bg-white"
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
            <div className="flex flex-col w-full gap-2">
              <label
                className="font-bold text-gray-700"
                htmlFor="service_interested"
              >
                Select a services of your interest
              </label>
              <select
                name="service_interested"
                className="border px-4 py-1.5 rounded-md flex-1 outline-none bg-white"
              >
                {services?.map((service, key) => (
                  <option key={key} value={service}>
                    {service}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="flex items-center w-full justify-center mt-6">
            <button
              className="text-white font-bold text-lg bg-orange-500 w-max px-5 py-1.5 rounded-lg"
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

export default AddParticipantForm;
