"use client";
import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { XCircle } from 'lucide-react';

const ComparisonModal = ({ showCompareModal, setShowCompareModal, compareList }) => {
  return (
    <AnimatePresence>
      {showCompareModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/60 backdrop-blur-sm">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="bg-white w-full max-w-4xl rounded-3xl overflow-hidden shadow-2xl"
          >
            <div className="p-6 border-b flex justify-between items-center bg-gray-50">
              <h2 className="text-2xl font-black">Side-by-Side Comparison</h2>
              <button onClick={() => setShowCompareModal(false)}>
                <XCircle className="w-6 h-6" />
              </button>
            </div>
            <div className="p-8 overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr>
                    <th className="pb-6 text-gray-400 uppercase text-xs">University</th>
                    {compareList.map(u => (
                      <th key={u.id} className="pb-6 px-4">
                        <img src={u.image} className="w-16 h-16 rounded-xl object-cover mb-2" />
                        <p className="font-bold leading-tight">{u.name}</p>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr>
                    <td className="py-4 text-gray-500 font-medium">Annual Tuition</td>
                    {compareList.map(u => <td key={u.id} className="py-4 px-4 font-bold text-indigo-600">${u.tuition.toLocaleString()}</td>)}
                  </tr>
                  <tr>
                    <td className="py-4 text-gray-500 font-medium">Min. GPA</td>
                    {compareList.map(u => <td key={u.id} className="py-4 px-4 font-bold">{u.minGPA}</td>)}
                  </tr>
                  <tr>
                    <td className="py-4 text-gray-500 font-medium">Min. IELTS</td>
                    {compareList.map(u => <td key={u.id} className="py-4 px-4 font-bold">{u.minIELTS}</td>)}
                  </tr>
                  <tr>
                    <td className="py-4 text-gray-500 font-medium">Country</td>
                    {compareList.map(u => <td key={u.id} className="py-4 px-4">{u.country}</td>)}
                  </tr>
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ComparisonModal;
