"use client";
import React from 'react';
import { CheckCircle, XCircle } from 'lucide-react';

const UniversityCard = ({ univ, eligible, toggleCompare, isCompared, onApply }) => {
  return (
    <div className="bg-white rounded-xl shadow p-4">
      <img src={univ.image_url} className="w-full h-40 object-cover rounded" />
      <h3 className="font-bold text-lg mt-2">{univ.name}</h3>
      <p className="text-sm text-gray-500">{univ.country} • {univ.degree}</p>
      {eligible === true && <span className="text-green-600 flex items-center gap-1"><CheckCircle /> Eligible</span>}
      {eligible === false && <span className="text-red-600 flex items-center gap-1"><XCircle /> Not Eligible</span>}
      <button onClick={onApply} className="mt-2 w-full bg-indigo-600 text-white py-2 rounded">Apply Now</button>
      <label className="flex items-center mt-2">
        <input type="checkbox" checked={isCompared} onChange={() => toggleCompare(univ)} />
        Compare
      </label>
    </div>
  );
};

export default UniversityCard;
