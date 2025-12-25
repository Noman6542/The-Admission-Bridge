"use client";
import React from "react";

const Filters = ({
  tuitionRange,
  setTuitionRange,
  userGPA,
  setUserGPA,
  userIELTS,
  setUserIELTS,
}) => (
  <div className="space-y-6 bg-white p-6 rounded-xl shadow-md w-full max-w-md mx-auto">
    {/* Tuition Fee Slider */}
    <div className="space-y-2">
      <label className="block text-gray-700 font-medium">
        Max Tuition Fee: <span className="font-bold">${tuitionRange}</span>
      </label>
      <input
        type="range"
        min="5000"
        max="60000"
        step="1000"
        value={tuitionRange}
        onChange={(e) => setTuitionRange(e.target.value)}
        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
      />
    </div>

    {/* GPA Input */}
    <div className="flex flex-col">
      <label className="text-gray-700 font-medium">Your GPA</label>
      <input
        type="number"
        step="0.1"
        placeholder="e.g 3.50"
        value={userGPA}
        onChange={(e) => setUserGPA(e.target.value)}
        className="mt-1 px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
      />
    </div>

    {/* IELTS Input */}
    <div className="flex flex-col">
      <label className="text-gray-700 font-medium">Your IELTS</label>
      <input
        type="number"
        step="0.5"
        placeholder="e.g 7.5"
        value={userIELTS}
        onChange={(e) => setUserIELTS(e.target.value)}
        className="mt-1 px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
      />
    </div>
  </div>
);

export default Filters;
