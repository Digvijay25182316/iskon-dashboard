"use client";
import DateFormater from "@/components/DateFormater";
import Modal from "@/components/ResponseModal";
import {
  EyeIcon,
  PencilSquareIcon,
  TrashIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import React, { useEffect, useState } from "react";

function ParticipantList() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isErrorNames, setIsErrorParticipant] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [participantNames, setParticipantNames] = useState([]);
  const [successMessage, setSuccessMessage] = useState("");
  useEffect(() => {
    (async () => {
      setIsLoading(true);
      await fetch("/api/admin/participant")
        .then((data) => {
          if (data.ok) {
            return data.json();
          } else {
            setIsErrorParticipant(true);
            return data.json();
          }
        })
        .then((data: any) => {
          isErrorNames
            ? setIsErrorParticipant(data.message)
            : setParticipantNames(data.data);
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
    <div className="w-full">
      <p className="text-2xl font-bold text-gray-600 pl-10 pt-10">
        Participants
      </p>
      <div className="md:px-10 px-5 py-5 lg:w-[83vw]">
        {participantNames ? (
          <div className="overflow-scroll overflow-y-hidden text-gray-700">
            <table className="">
              <thead>
                <tr>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Email</th>
                  <th>Gender</th>
                  <th>Contact Number</th>
                  <th>Whatsapp Number</th>
                  <th>age</th>
                  <th>created at</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {participantNames?.map(
                  (participant: ParticipantTypes, key: number) => (
                    <tr key={key}>
                      <td className="border-b border-t border-purple-300 px-5">
                        {participant.first_name}
                      </td>
                      <td className="border-b border-t border-purple-300 px-5">
                        {participant.last_name}
                      </td>
                      <td className="border-b border-t border-purple-300 px-5">
                        {participant.email}
                      </td>
                      <td className="border-b border-t border-purple-300 px-5">
                        {participant.gender}
                      </td>
                      <td className="border-b border-t border-purple-300 px-5">
                        {participant.contact_number}
                      </td>
                      <td className="border-b border-t border-purple-300 px-5">
                        {participant.wa_number}
                      </td>
                      <td className="border-b border-t border-purple-300 px-5">
                        {participant.age.toString()}
                      </td>
                      <td className="border-b border-t border-purple-300 px-5">
                        <DateFormater date={participant.createdAt} />
                      </td>
                      <td className="border-b border-t border-purple-300 px-5">
                        <div className="flex items-center gap-3">
                          <button className="text-gray-500 bg-gray-200 hover:text-purple-500 transition-colors duration-300 hover:bg-purple-100 px-2 py-1 my-2 rounded-lg">
                            <EyeIcon className="h-6 w-6" />
                          </button>
                          <button className="text-gray-500 bg-gray-200 hover:text-purple-500 transition-colors duration-300 hover:bg-purple-100 px-2 py-1 my-2 rounded-lg">
                            <PencilSquareIcon className="h-6 w-6" />
                          </button>
                          <button className="text-gray-500 bg-gray-200 hover:text-purple-500 transition-colors duration-300 hover:bg-purple-100 px-2 py-1 my-2 rounded-lg">
                            <TrashIcon className="h-6 w-6" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="flex items-center justify-center md:w-[80vw] mt-40">
            <div className="text-red-500 text-lg bg-purple-100 p-5 rounded-xl flex flex-col items-center gap-5">
              <UserGroupIcon className="h-16 w-16" />
              No Participant To Show
            </div>
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

export default ParticipantList;
