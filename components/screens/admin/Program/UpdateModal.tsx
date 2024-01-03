"use client";
import { XMarkIcon } from "@heroicons/react/24/outline";
import React from "react";

interface ViewProps {
  id: string;
  toggleSlider: () => void;
  isOpen: boolean;
}

function UpdateModal({ id, toggleSlider, isOpen }: ViewProps) {
  if (isOpen)
    return (
      <>
        <div
          className={
            isOpen
              ? "fixed top-0 left-0 right-0 bottom-0 z-[100] backdrop-brightness-50"
              : ""
          }
        >
          <div
            className={`fixed bottom-0 left-0 w-full h-[90%] shadow bg-white text-black p-4 transition-transform duration-500 rounded-t-3xl `}
          >
            <button
              className="absolute top-4 right-4 text-gray-700 p-2 rounded-full text-xl bg-gray-100 hover:bg-purple-200"
              onClick={toggleSlider}
            >
              <XMarkIcon className="h-6 w-6" />
            </button>
            <div className="flex flex-col items-center">this is the slider</div>
          </div>
        </div>
      </>
    );
}

export default UpdateModal;
