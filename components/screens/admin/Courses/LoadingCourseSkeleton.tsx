import React from "react";

function LoadingCourseSkeleton() {
  return (
    <div className="w-full bg-white rounded-2xl p-5">
      <div className="flex items-center justify-between">
        <p className="w-10 h-10 bg-gray-200 rounded-full animate-pulse"></p>
        <div className="flex items-center gap-5">
          <p className="w-10 h-8 bg-gray-300 rounded-lg animate-pulse"></p>
          <p className="w-10 h-8 bg-gray-200 rounded-lg animate-pulse"></p>
          <p className="w-10 h-8 bg-gray-200 rounded-lg animate-pulse"></p>
        </div>
      </div>
      <p className="w-40 h-5 bg-gray-300 rounded animate-pulse my-2"></p>
      <p className="w-40 h-5 bg-gray-200 rounded animate-pulse mb-2"></p>
      <div className="flex flex-col">
        <div className="flex items-center">
          <p className="w-10 h-10 bg-gray-200 rounded-full animate-pulse"></p>
          <p className="w-40 h-6 bg-gray-200 rounded animate-pulse"></p>
        </div>
        <div className="flex items-center">
          <p className="w-10 h-10 bg-gray-200 rounded-full animate-pulse"></p>
          <p className="w-40 h-6 bg-gray-200 rounded animate-pulse"></p>
        </div>
        <div className="flex items-center">
          <p className="w-10 h-10 bg-gray-200 rounded-full animate-pulse"></p>
          <p className="w-40 h-6 bg-gray-200 rounded animate-pulse"></p>
        </div>
        <div className="flex items-center">
          <p className="w-10 h-10 bg-gray-200 rounded-full animate-pulse"></p>
          <p className="w-40 h-6 bg-gray-200 rounded animate-pulse"></p>
        </div>
      </div>
    </div>
  );
}

export default LoadingCourseSkeleton;
