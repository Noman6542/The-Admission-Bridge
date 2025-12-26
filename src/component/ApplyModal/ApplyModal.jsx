"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { XCircle, CheckCircle } from "lucide-react";
import axios from "axios";

const ApplyModal = ({ isApplying, setIsApplying, userGPA, userIELTS }) => {
  const [appStep, setAppStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    degree: isApplying.degree,
  });
  const [appStatus, setAppStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("https://the-admission-server-production.up.railway.app/api/applications", {
        ...formData,
        universityId: isApplying.id,
        gpa: userGPA,
        ielts: userIELTS,
      });
      setAppStatus({ type: "success", message: res.data.message });
      setTimeout(() => {
        setIsApplying(null);
        setAppStatus(null);
        setAppStep(1);
      }, 3000);
    } catch (err) {
      setAppStatus({
        type: "error",
        message: err.response?.data?.error || "Submission failed",
      });
    }
  };

  return (
    <AnimatePresence>
      {isApplying && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/60 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="bg-white w-full max-w-lg rounded-3xl p-8 relative"
          >
            <button
              className="absolute top-4 right-4"
              onClick={() => {
                setIsApplying(null);
                setAppStatus(null);
                setAppStep(1);
              }}
            >
              <XCircle className="w-6 h-6" />
            </button>

            <div className="mb-6">
              <h2 className="text-xl font-bold">Apply to {isApplying.name}</h2>
              <p className="text-sm text-gray-500">Step {appStep} of 2</p>
            </div>

            {appStatus ? (
              <div
                className={`p-6 rounded-xl text-center ${
                  appStatus.type === "success"
                    ? "bg-green-50 text-green-800"
                    : "bg-red-50 text-red-800"
                }`}
              >
                {appStatus.type === "success" ? (
                  <CheckCircle className="w-12 h-12 mx-auto mb-4" />
                ) : (
                  <XCircle className="w-12 h-12 mx-auto mb-4" />
                )}
                <p className="font-bold text-lg">{appStatus.message}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                {appStep === 1 ? (
                  <div className="space-y-4">
                    <input
                      required
                      type="text"
                      placeholder="Full Name"
                      className="w-full px-4 py-3 border rounded"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                    />
                    <input
                      required
                      type="email"
                      placeholder="Email"
                      className="w-full px-4 py-3 border-2 border-blue-300 rounded"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                    />
                    <input
                      type="tel"
                      placeholder="Phone"
                      className="w-full px-4 py-3 border rounded"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                    />
                    <button
                      type="button"
                      onClick={() => setAppStep(2)}
                      className="w-full py-3 bg-indigo-600 text-white rounded"
                    >
                      Next Step
                    </button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-3 bg-gray-50 rounded">
                        <p className="text-xs text-gray-500">Your GPA</p>
                        <p className="font-bold">{userGPA || "--"}</p>
                      </div>
                      <div className="p-3 bg-gray-50 rounded">
                        <p className="text-xs text-gray-500">Your IELTS</p>
                        <p className="font-bold">{userIELTS || "--"}</p>
                      </div>
                    </div>
                    <div className="flex gap-4 mt-4">
                      <button
                        type="button"
                        onClick={() => setAppStep(1)}
                        className="flex-1 py-3 border rounded"
                      >
                        Back
                      </button>
                      <button
                        type="submit"
                        className="flex-1 py-3 bg-indigo-600 text-white rounded"
                      >
                        Confirm Application
                      </button>
                    </div>
                  </div>
                )}
              </form>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ApplyModal;
