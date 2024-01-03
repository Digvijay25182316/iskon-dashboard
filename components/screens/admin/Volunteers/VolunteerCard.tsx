"use client";
import {
  EyeIcon,
  TrashIcon,
  UserCircleIcon,
  PencilSquareIcon,
} from "@heroicons/react/24/outline";
import React, { useState } from "react";
import ViewModal from "./ViewModal";
interface Props {
  volunteer: volunteer;
}
function VolunteerCard({ volunteer }: Props) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onClose = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className=" bg-white text-lg text-gray-700 font-semibold flex items-center p-3 rounded-2xl justify-between shadow">
      <div className="flex items-center text-lg">
        <UserCircleIcon className="h-10 w-10 text-purple-800 drop-shadow-lg" />
        <div className=" drop-shadow-lg">
          {volunteer.initiated_name ? (
            <p className="px-4">{volunteer.initiated_name}</p>
          ) : (
            <p className="px-4">
              {volunteer.first_name + " " + volunteer.last_name}
            </p>
          )}
        </div>
      </div>
      <div className="flex items-center gap-6">
        <button
          className="text-gray-500 bg-gray-100 px-2 py-1 rounded-lg transition-colors duration-300 hover:text-purple-500 hover:bg-purple-100"
          onClick={() => setIsModalOpen(true)}
        >
          <EyeIcon className="h-6 w-6" />
        </button>
        <button className="text-gray-500 bg-gray-100 px-2 py-1 rounded-lg transition-colors duration-300 hover:text-purple-500 hover:bg-purple-100">
          <PencilSquareIcon className="h-6 w-6" />
        </button>
        <button className="text-gray-500 bg-gray-100 px-2 py-1 rounded-lg transition-colors duration-300 hover:text-purple-500 hover:bg-purple-100">
          <TrashIcon className="h-6 w-6" />
        </button>
      </div>
      <ViewModal
        isOpen={isModalOpen}
        toggleSlider={() => setIsModalOpen(false)}
        id={volunteer._id}
      />
    </div>
  );
}

export default VolunteerCard;
