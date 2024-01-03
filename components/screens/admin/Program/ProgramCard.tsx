import {
  AcademicCapIcon,
  EyeIcon,
  PencilSquareIcon,
  TrashIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import React from "react";

interface Props {
  program: ProgramTypes;
}

function ProgramCard({ program }: Props) {
  return (
    <div className="bg-white p-3 rounded-2xl shadow flex flex-col">
      <div className=" flex items-center justify-between">
        <p className="bg-purple-100 text-purple-500 p-2 rounded-full">
          <AcademicCapIcon className="h-6 w-6" />
        </p>
        <div className="flex items-center gap-5">
          <button className="bg-gray-100 text-gray-500 transition-colors duration-500 hover:text-purple-500 hover:bg-purple-100 px-2 py-1 rounded-lg">
            <EyeIcon className="h-6 w-6" />
          </button>
          <button className="bg-gray-100 text-gray-500 transition-colors duration-500 hover:text-purple-500 hover:bg-purple-100 px-2 py-1 rounded-lg">
            <PencilSquareIcon className="h-6 w-6" />
          </button>
          <button className="bg-gray-100 text-gray-500 transition-colors duration-500 hover:text-purple-500 hover:bg-purple-100 px-2 py-1 rounded-lg">
            <TrashIcon className="h-6 w-6" />
          </button>
        </div>
      </div>
      <div>
        <p className="text-lg font-bold text-gray-700">
          {program.program_name}
        </p>
        <p className="text-gray-500">{program.program_description}</p>
        <div className="flex flex-col gap-2 mt-6">
          <div className="flex items-center gap-5">
            <p>Incharge : </p>
            {program.program_incharge?.initiated_name ? (
              <p className="text-blue-500 hover:underline flex cursor-pointer">
                <UserCircleIcon className="h-6 w-6" />
                {program.program_incharge?.initiated_name}
              </p>
            ) : (
              <p className="text-blue-500 hover:underline flex cursor-pointer">
                <UserCircleIcon className="h-6 w-6" />
                {program.program_incharge?.first_name +
                  " " +
                  program.program_incharge?.last_name}
              </p>
            )}
          </div>
          <div className="flex items-center gap-5">
            <p>Coordinator : </p>
            {program.program_coordinator?.initiated_name ? (
              <p className="text-blue-500 hover:underline flex cursor-pointer">
                <UserCircleIcon className="h-6 w-6" />
                {program.program_coordinator?.initiated_name}
              </p>
            ) : (
              <p className="text-blue-500 hover:underline flex cursor-pointer">
                <UserCircleIcon className="h-6 w-6" />
                {program.program_coordinator?.first_name +
                  " " +
                  program.program_coordinator?.last_name}
              </p>
            )}
          </div>
          <div className="flex items-center gap-5">
            <p>Mentor : </p>
            {program.program_mentor?.initiated_name ? (
              <p className="text-blue-500 hover:underline flex cursor-pointer">
                <UserCircleIcon className="h-6 w-6" />
                {program.program_mentor?.initiated_name}
              </p>
            ) : (
              <p className="text-blue-500 hover:underline flex cursor-pointer">
                <UserCircleIcon className="h-6 w-6" />
                {program.program_mentor?.first_name +
                  " " +
                  program.program_mentor?.last_name}
              </p>
            )}
          </div>
          <div className="flex items-center gap-5">
            <p>Preacher : </p>
            {program.program_preacher?.initiated_name ? (
              <p className="text-blue-500 hover:underline flex cursor-pointer">
                <UserCircleIcon className="h-6 w-6" />
                {program.program_preacher?.initiated_name}
              </p>
            ) : (
              <p className="text-blue-500 hover:underline flex cursor-pointer">
                <UserCircleIcon className="h-6 w-6" />
                {program.program_preacher?.first_name +
                  " " +
                  program.program_preacher?.last_name}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProgramCard;
