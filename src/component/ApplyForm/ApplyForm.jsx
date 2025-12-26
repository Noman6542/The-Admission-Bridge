"use client";
import React, { useState } from "react";
import { toast } from "react-toastify";

const ApplyForm = ({ university }) => {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    name: "",
    email: "",
    gpa: "",
    ielts: "",
  });
  const [submitted, setSubmitted] = useState(false); // ✅ new state

  const submitApplication = async () => {
    try {
      const res = await fetch("https://the-admission-server-production.up.railway.app/api/applications", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          universityId: university.id,
        }),
      });

      const data = await res.json();
      if (res.ok) {
        toast.success(data.message);
        setSubmitted(true); 
      } else {
        toast.error(data.error || "Submission failed");
      }
    } catch (err) {
      console.error(err);
      toast.error("Server error");
    }
  };

  return (
    <div className="p-4">
      {step === 1 && !submitted && (
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />

          <input
            type="email"
            placeholder="Email Address"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />

          <button
            className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow hover:bg-indigo-700 transition cursor-pointer"
            onClick={() => setStep(2)}
          >
            Next
          </button>
        </div>
      )}

      {step === 2 && !submitted && (
        <div className="space-y-4">
          <input
            type="text"
            placeholder="GPA"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
            onChange={(e) => setForm({ ...form, gpa: e.target.value })}
          />

          <input
            type="text"
            placeholder="IELTS"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
            onChange={(e) => setForm({ ...form, ielts: e.target.value })}
          />

          {!submitted && (
            <button
              className="w-full py-3 bg-green-600 text-white font-semibold rounded-lg shadow hover:bg-green-700 transition cursor-pointer"
              onClick={submitApplication}
            >
              Submit
            </button>
          )}
        </div>
      )}

      {submitted && (
        <p className="text-center text-green-700 font-semibold">
          Your application has been submitted!
        </p>
      )}
    </div>
  );
};

export default ApplyForm;
