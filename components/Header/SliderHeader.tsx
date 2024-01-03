"use client";
import React, { useState } from "react";

import { usePathname } from "next/navigation";
import {
  AcademicCapIcon,
  ArrowLeftStartOnRectangleIcon,
  Bars3Icon,
  BoltIcon,
  CalendarIcon,
  ChartPieIcon,
  CurrencyRupeeIcon,
  PlusCircleIcon,
  PlusIcon,
  UserGroupIcon,
  UserIcon,
  UserPlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

const Slider = () => {
  const [isSliderOpen, setSliderOpen] = useState(false);
  const pathname = usePathname();

  const toggleSlider = () => {
    setSliderOpen((prev) => !prev);
  };

  return (
    <div>
      <div className="fixed md:hidden p-3 backdrop-blur-md top-0 left-0 right-0 shadow">
        <button
          className={` bg-blue-500 p-3 rounded-full drop-shadow-lg text-white`}
          onClick={toggleSlider}
        >
          <Bars3Icon className="h-6 w-6" />
        </button>
      </div>
      <div
        className={
          isSliderOpen
            ? "fixed top-0 left-0 right-0 bottom-0 z-[100] backdrop-brightness-50 h-screen"
            : ""
        }
      >
        <aside
          className={`fixed top-0 left-0 h-full sm:w-2/5 w-4/5 shadow bg-white text-white p-4 transition-transform z-[1000] ${
            isSliderOpen
              ? "transform translate-x-0"
              : "transform -translate-x-full"
          } transition-transform duration-300 ease-in-out backdrop-brightness-50`}
        >
          <button
            className="absolute top-4 right-4 text-gray-700 focus:outline-none bg-purple-100 p-2 rounded-full text-xl"
            onClick={toggleSlider}
          >
            <XMarkIcon className="h-6 w-6" />
          </button>
          <div className="flex flex-col px-3 bg-white w-4/5 rounded-r-lg min-h-screen justify-between md:hidden">
            <div>
              <p className="text-xl font-bold text-gray-700 p-3 pb-3">
                Sanjeevani
              </p>
              <p className="text-sm font-semibold text-gray-400 py-3">Pages</p>
              <Link href={"/admin/dashboard"}>
                <button
                  onClick={toggleSlider}
                  className={`font-semibold ${
                    pathname === "/admin/dashboard"
                      ? "text-purple-500 bg-purple-100 transition-colors duration-300 hover:bg-purple-200"
                      : "text-gray-500 transition-colors duration-300 hover:bg-purple-200"
                  } m-3 w-full px-4 py-1.5 rounded-lg flex items-center gap-5`}
                >
                  <ChartPieIcon className="h-6 w-6" />
                  DashBoard
                </button>
              </Link>
              <Link href={"/admin/volunteers"}>
                <button
                  onClick={toggleSlider}
                  className={`font-semibold ${
                    pathname === "/admin/volunteers"
                      ? "text-purple-500 bg-purple-100 transition-colors duration-300 hover:bg-purple-200"
                      : "text-gray-500 transition-colors duration-300 hover:bg-purple-200"
                  } m-3 w-full  px-4 py-1.5 rounded-lg flex items-center gap-5`}
                >
                  <UserIcon className="h-6 w-6" />
                  Volunteers
                </button>
              </Link>
              <Link href={"/admin/programs"}>
                <button
                  onClick={toggleSlider}
                  className={`font-semibold ${
                    pathname === "/admin/programs"
                      ? "text-purple-500 bg-purple-100 transition-colors duration-300 hover:bg-purple-200"
                      : "text-gray-500 transition-colors duration-300 hover:bg-purple-200"
                  } m-3 w-full  px-4 py-1.5 rounded-lg flex items-center gap-5`}
                >
                  <CalendarIcon className="h-6 w-6" />
                  Programs
                </button>
              </Link>
              <Link href={"/admin/activities"}>
                <button
                  onClick={toggleSlider}
                  className={`font-semibold ${
                    pathname === "/admin/activities"
                      ? "text-purple-500 bg-purple-100 transition-colors duration-300 hover:bg-purple-200"
                      : "text-gray-500 transition-colors duration-300 hover:bg-purple-200"
                  } m-3 w-full  px-4 py-1.5 rounded-lg flex items-center gap-5`}
                >
                  <BoltIcon className="h-6 w-6" />
                  Activities
                </button>
              </Link>
              <Link href={"/admin/courses"}>
                <button
                  onClick={toggleSlider}
                  className={`font-semibold ${
                    pathname === "/admin/courses"
                      ? "text-purple-500 bg-purple-100 transition-colors duration-300 hover:bg-purple-200"
                      : "text-gray-500 transition-colors duration-300 hover:bg-purple-200"
                  } m-3 w-full  px-4 py-1.5 rounded-lg flex items-center gap-5`}
                >
                  <AcademicCapIcon className="h-6 w-6" />
                  Courses
                </button>
              </Link>
              <Link href={"/admin/participants"}>
                <button
                  onClick={toggleSlider}
                  className={`font-semibold ${
                    pathname === "/admin/participants"
                      ? "text-purple-500 bg-purple-100 transition-colors duration-300 hover:bg-purple-200"
                      : "text-gray-500 transition-colors duration-300 hover:bg-purple-200"
                  } m-3 w-full  px-4 py-1.5 rounded-lg flex items-center gap-5`}
                >
                  <UserGroupIcon className="h-6 w-6" />
                  Participants
                </button>
              </Link>
              <Link href={"/admin/donations"}>
                <button
                  onClick={toggleSlider}
                  className={`font-semibold ${
                    pathname === "/admin/donations"
                      ? "text-purple-500 bg-purple-100 transition-colors duration-300 hover:bg-purple-200"
                      : "text-gray-500 transition-colors duration-300 hover:bg-purple-200"
                  } m-3 w-full  px-4 py-1.5 rounded-lg flex items-center gap-5`}
                >
                  <CurrencyRupeeIcon className="h-6 w-6" />
                  Donations
                </button>
              </Link>
              <p className="text-sm font-semibold text-gray-400 py-3">
                Controllers
              </p>
              <Link href={"/admin/programs/addprogram"}>
                <button
                  onClick={toggleSlider}
                  className={`font-semibold ${
                    pathname === "/admin/programs/addprogram"
                      ? "text-purple-500 bg-purple-100 transition-colors duration-300 hover:bg-purple-200"
                      : "text-gray-500 transition-colors duration-300 hover:bg-purple-200"
                  } m-3 w-full  px-4 py-1.5 rounded-lg flex items-center gap-5`}
                >
                  <PlusIcon className="h-6 w-6" />
                  Add Program
                </button>
              </Link>
              <Link href={"/admin/courses/addcourse"}>
                <button
                  onClick={toggleSlider}
                  className={`font-semibold ${
                    pathname === "/admin/courses/addcourse"
                      ? "text-purple-500 bg-purple-100 transition-colors duration-300 hover:bg-purple-200"
                      : "text-gray-500 transition-colors duration-300 hover:bg-purple-200"
                  } m-3 w-full  px-4 py-1.5 rounded-lg flex items-center gap-5`}
                >
                  <PlusCircleIcon className="h-6 w-6" />
                  Add Course
                </button>
              </Link>
              <Link href={"/admin/volunteers/addvolunteer"}>
                <button
                  onClick={toggleSlider}
                  className={`font-semibold ${
                    pathname === "/admin/volunteers/addvolunteer"
                      ? "text-purple-500 bg-purple-100 transition-colors duration-300 hover:bg-purple-200"
                      : "text-gray-500 transition-colors duration-300 hover:bg-purple-200"
                  } m-3 w-full  px-4 py-1.5 rounded-lg flex items-center gap-5`}
                >
                  <UserPlusIcon className="h-6 w-6" />
                  Add Volunteer
                </button>
              </Link>
            </div>
            <button
              className="font-semibold text-white bg-cyan-700 hover:bg-cyan-800  m-3 w-full  px-4 py-1.5 rounded-lg flex items-center gap-5 mb-10"
              onClick={() => window.alert("you clicked logout")}
            >
              <ArrowLeftStartOnRectangleIcon className="h-6 w-6" />
              Logout
            </button>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Slider;
