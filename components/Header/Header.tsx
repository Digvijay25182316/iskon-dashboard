"use client";
import React from "react";
import {
  ChartPieIcon,
  CalendarIcon,
  AcademicCapIcon,
  BoltIcon,
  UserIcon,
  UserGroupIcon,
  CurrencyRupeeIcon,
  ArrowLeftStartOnRectangleIcon,
  PlusIcon,
  PlusCircleIcon,
  UserPlusIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Header() {
  const pathname = usePathname();
  return (
    <div className="md:fixed md:flex flex-col px-3 bg-white min-w-56 rounded-r-lg min-h-screen justify-between hidden">
      <div>
        <p className="text-xl font-bold text-gray-700 p-3 pb-3">Sanjeevani</p>
        <p className="text-sm font-semibold text-gray-400 pb-1">Pages</p>
        <Link href={"/admin/dashboard"}>
          <div
            className={`font-semibold  ${
              pathname === "/admin/dashboard"
                ? "text-purple-500 bg-purple-100 transition-colors duration-300 hover:bg-purple-200"
                : "text-gray-500 transition-colors duration-300 hover:bg-purple-200"
            } m-1 px-4 py-1.5 rounded-lg flex items-center gap-5`}
          >
            <ChartPieIcon className="h-6 w-6" />
            DashBoard
          </div>
        </Link>
        <Link href={"/admin/volunteers"}>
          <div
            className={`font-semibold ${
              pathname === "/admin/volunteers"
                ? "text-purple-500 bg-purple-100 transition-colors duration-300 hover:bg-purple-200"
                : "text-gray-500 transition-colors duration-300 hover:bg-purple-200"
            } m-1  px-4 py-1.5 rounded-lg flex items-center gap-5`}
          >
            <UserIcon className="h-6 w-6" />
            Volunteers
          </div>
        </Link>
        <Link href={"/admin/programs"}>
          <div
            className={`font-semibold ${
              pathname === "/admin/programs"
                ? "text-purple-500 bg-purple-100 transition-colors duration-300 hover:bg-purple-200"
                : "text-gray-500 transition-colors duration-300 hover:bg-purple-200"
            } m-1  px-4 py-1.5 rounded-lg flex items-center gap-5`}
          >
            <CalendarIcon className="h-6 w-6" />
            Programs
          </div>
        </Link>
        <Link href={"/admin/activities"}>
          <div
            className={`font-semibold ${
              pathname === "/admin/activities"
                ? "text-purple-500 bg-purple-100 transition-colors duration-300 hover:bg-purple-200"
                : "text-gray-500 transition-colors duration-300 hover:bg-purple-200"
            } m-1  px-4 py-1.5 rounded-lg flex items-center gap-5`}
          >
            <BoltIcon className="h-6 w-6" />
            Activities
          </div>
        </Link>
        <Link href={"/admin/courses"}>
          <div
            className={`font-semibold ${
              pathname === "/admin/courses"
                ? "text-purple-500 bg-purple-100 transition-colors duration-300 hover:bg-purple-200"
                : "text-gray-500 transition-colors duration-300 hover:bg-purple-200"
            } m-1  px-4 py-1.5 rounded-lg flex items-center gap-5`}
          >
            <AcademicCapIcon className="h-6 w-6" />
            Courses
          </div>
        </Link>
        <Link href={"/admin/participants"}>
          <div
            className={`font-semibold ${
              pathname === "/admin/participants"
                ? "text-purple-500 bg-purple-100 transition-colors duration-300 hover:bg-purple-200"
                : "text-gray-500 transition-colors duration-300 hover:bg-purple-200"
            } m-1  px-4 py-1.5 rounded-lg flex items-center gap-5`}
          >
            <UserGroupIcon className="h-6 w-6" />
            Participants
          </div>
        </Link>
        <Link href={"/admin/donations"}>
          <div
            className={`font-semibold ${
              pathname === "/admin/donations"
                ? "text-purple-500 bg-purple-100 transition-colors duration-300 hover:bg-purple-200"
                : "text-gray-500 transition-colors duration-300 hover:bg-purple-200"
            } m-1  px-4 py-1.5 rounded-lg flex items-center gap-5`}
          >
            <CurrencyRupeeIcon className="h-6 w-6" />
            Donations
          </div>
        </Link>
        <p className="text-sm font-semibold text-gray-400 pb-1">Controllers</p>
        <Link href={"/admin/programs/addprogram"}>
          <div
            className={`font-semibold ${
              pathname === "/admin/programs/addprogram"
                ? "text-purple-500 bg-purple-100 transition-colors duration-300 hover:bg-purple-200"
                : "text-gray-500 transition-colors duration-300 hover:bg-purple-200"
            } m-1  px-4 py-1.5 rounded-lg flex items-center gap-5`}
          >
            <PlusIcon className="h-6 w-6" />
            Add Program
          </div>
        </Link>
        <Link href={"/admin/courses/addcourse"}>
          <div
            className={`font-semibold ${
              pathname === "/admin/courses/addcourse"
                ? "text-purple-500 bg-purple-100 transition-colors duration-300 hover:bg-purple-200"
                : "text-gray-500 transition-colors duration-300 hover:bg-purple-200"
            } m-1  px-4 py-1.5 rounded-lg flex items-center gap-5`}
          >
            <PlusCircleIcon className="h-6 w-6" />
            Add Course
          </div>
        </Link>
        <Link href={"/admin/volunteers/addvolunteer"}>
          <div
            className={`font-semibold ${
              pathname === "/admin/volunteers/addvolunteer"
                ? "text-purple-500 bg-purple-100 transition-colors duration-300 hover:bg-purple-200"
                : "text-gray-500 transition-colors duration-300 hover:bg-purple-200"
            } m-1  px-4 py-1.5 rounded-lg flex items-center gap-5`}
          >
            <UserPlusIcon className="h-6 w-6" />
            Add Volunteer
          </div>
        </Link>
      </div>
      <button
        className="font-semibold text-white bg-cyan-700 hover:bg-cyan-800  m-1  px-4 py-1.5 rounded-lg flex items-center gap-5"
        onClick={() => window.alert("you clicked logout")}
      >
        <ArrowLeftStartOnRectangleIcon className="h-6 w-6" />
        Logout
      </button>
    </div>
  );
}

export default Header;
