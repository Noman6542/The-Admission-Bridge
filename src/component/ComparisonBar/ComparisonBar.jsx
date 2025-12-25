"use client";
import React from 'react';
import { XCircle } from 'lucide-react';

const ComparisonBar = ({ compareList, setShowCompareModal, setCompareList }) => {
  if(compareList.length === 0) return null;

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-white shadow-2xl rounded-2xl border p-4 flex items-center gap-6">
      <div className="flex -space-x-4">
        {compareList.map(u => (
          <img key={u.id} src={u.image} className="w-12 h-12 rounded-full border-4 border-white object-cover" title={u.name} />
        ))}
      </div>
      <div className="pr-4 border-r">
        <p className="text-xs text-gray-500 uppercase font-bold">Comparison</p>
        <p className="text-sm font-bold text-indigo-600">{compareList.length}/3 Selected</p>
      </div>
      <button 
        disabled={compareList.length < 2}
        onClick={() => setShowCompareModal(true)}
        className="bg-indigo-600 text-white px-6 py-2 rounded-xl font-bold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-indigo-700"
      >
        Compare Now
      </button>
      <button onClick={() => setCompareList([])} className="text-gray-400 hover:text-red-500">
        <XCircle className="w-5 h-5" />
      </button>
    </div>
  );
};

export default ComparisonBar;
