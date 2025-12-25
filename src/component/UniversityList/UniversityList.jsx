"use client";
import React, { useState } from "react";
import UniversityCard from "../UniversityCard/UniversityCard";
import CompareModal from "../CompareModal/CompareModal";

const UniversityList = ({ universities }) => {
  const [compareList, setCompareList] = useState([]);
  const [showCompare, setShowCompare] = useState(false);

  //  Compare checkbox toggle logic
  const toggleCompare = (univ) => {
    setCompareList((prev) => {
      // already selected হলে remove
      if (prev.find((u) => u.id === univ.id)) {
        return prev.filter((u) => u.id !== univ.id);
      }

      // max 3 ta university allow
      if (prev.length >= 3) return prev;

      return [...prev, univ];
    });
  };

  return (
    <>
      <div className="grid grid-cols-3 gap-4">
        {universities.map((univ) => (
          <UniversityCard
            key={univ.id}
            univ={univ}
            toggleCompare={toggleCompare} //  PASS
            isCompared={compareList.some((u) => u.id === univ.id)} //  PASS
          />
        ))}
      </div>

      {/* Compare Now button */}
      {compareList.length >= 2 && (
        <button
          onClick={() => setShowCompare(true)}
          className="fixed bottom-5 right-5 bg-indigo-600 text-white px-6 py-3 rounded-lg"
        >
          Compare Now
        </button>
      )}

      {/* Compare Modal */}
      {showCompare && (
        <CompareModal
          data={compareList}
          onClose={() => setShowCompare(false)}
        />
      )}
    </>
  );
};

export default UniversityList;
