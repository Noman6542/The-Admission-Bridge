"use client";

import React, { useState } from "react";
import UniversityCard from "../UniversityCard/UniversityCard";
import CompareModal from "../CompareModal/CompareModal";
import ApplyForm from "../ApplyForm/ApplyForm";

const UniversityList = ({ universities }) => {
  const [compareList, setCompareList] = useState([]);
  const [showCompare, setShowCompare] = useState(false);

  const [selectedUniversity, setSelectedUniversity] = useState(null);

  //  COMPARE LOGIC
  const toggleCompare = (univ) => {
    setCompareList((prev) => {
      if (prev.find((u) => u.id === univ.id)) {
        return prev.filter((u) => u.id !== univ.id);
      }
      if (prev.length >= 3) return prev;
      return [...prev, univ];
    });
  };

  // APPLY BUTTON HANDLER
  const handleApply = (univ) => {
    console.log("Apply clicked:", univ.name); //  DEBUG LINE
    setSelectedUniversity(univ);
  };

  return (
    <>
      <div className="grid grid-cols-3 gap-4">
        {universities.map((univ) => (
          <UniversityCard
            key={univ.id}
            univ={univ}
            toggleCompare={toggleCompare} //  PASS
            isCompared={compareList.some((u) => u.id === univ.id)}
            onApply={handleApply} //  PASS (MOST IMPORTANT)
          />
        ))}
      </div>

      {/*  COMPARE NOW BUTTON */}
      {compareList.length >= 2 && (
        <button
          onClick={() => setShowCompare(true)}
          className="fixed bottom-5 right-5 z-50 bg-indigo-600 text-white px-6 py-3 rounded"
        >
          Compare Now
        </button>
      )}

      {/*  COMPARE MODAL */}
      {showCompare && (
        <CompareModal
          data={compareList}
          onClose={() => setShowCompare(false)}
        />
      )}

      {/*  APPLY FORM MODAL */}
      {selectedUniversity && (
        <div className="fixed inset-0 bg-black/50 z-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded w-[400px]">
            <ApplyForm university={selectedUniversity} />
            <button
              onClick={() => setSelectedUniversity(null)}
              className="mt-2 text-red-500"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default UniversityList;
