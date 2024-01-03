"use client";
import Modal from "@/components/ResponseModal";
import { UserCircleIcon } from "@heroicons/react/24/solid";
import React, { useEffect, useState } from "react";
import VolunteerCard from "./VolunteerCard";
import { AcademicCapIcon } from "@heroicons/react/24/outline";

function VolunteersList() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isErrorNames, setIsErrorNames] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [volunteerNames, setVolunteerNames] = useState([]);
  const [successMessage, setSuccessMessage] = useState("");
  useEffect(() => {
    (async () => {
      setIsLoading(true);
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
    <div>
      <p className="text-2xl font-bold text-gray-600 pl-10 pt-10">Volunteers</p>
      <div className="md:px-10 px-5">
        {isLoading ? (
          <div className="grid grid-cols-1 gap-5 mt-5">
            <div className="w-full flex items-center justify-between bg-white rounded-2xl">
              <div className="flex items-center w-full">
                <p className=" w-20 h-16 bg-gray-300 rounded-full m-2 shadow-md animate-pulse "></p>
                <p className="w-full h-10 bg-gray-300 rounded-2xl m-2 shadow-md animate-pulse"></p>
              </div>
              <p className="w-36 h-10 bg-gray-300 rounded-2xl m-2 shadow-md animate-pulse"></p>
            </div>
            <div className="w-full flex items-center justify-between bg-white rounded-2xl">
              <div className="flex items-center w-full">
                <p className=" w-20 h-16 bg-gray-300 rounded-full m-2 shadow-md animate-pulse "></p>
                <p className="w-full h-10 bg-gray-300 rounded-2xl m-2 shadow-md animate-pulse"></p>
              </div>
              <p className="w-36 h-10 bg-gray-300 rounded-2xl m-2 shadow-md animate-pulse"></p>
            </div>
            <div className="w-full flex items-center justify-between bg-white rounded-2xl">
              <div className="flex items-center w-full">
                <p className=" w-20 h-16 bg-gray-300 rounded-full m-2 shadow-md animate-pulse "></p>
                <p className="w-full h-10 bg-gray-300 rounded-2xl m-2 shadow-md animate-pulse"></p>
              </div>
              <p className="w-36 h-10 bg-gray-300 rounded-2xl m-2 shadow-md animate-pulse"></p>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-5 mt-5">
            {volunteerNames ? (
              volunteerNames?.map((volunteer: volunteer, key) => (
                <VolunteerCard key={key} volunteer={volunteer} />
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
        isSuccess={isSuccess}
        errorMessage={errorMessage}
        successMessage={successMessage}
        isModalOpen={isModalOpen}
        onClose={closeModal}
      />
    </div>
  );
}

export default VolunteersList;
