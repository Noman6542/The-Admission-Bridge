"use client";
import React from "react";

const CompareModal = ({ data, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
      <div className="bg-white rounded-xl p-6 w-[80%]">
        <h2 className="text-xl font-bold mb-4">University Comparison</h2>

        <table className="w-full border">
          <thead>
            <tr>
              <th className="border p-2">Feature</th>
              {data.map((u) => (
                <th key={u.id} className="border p-2">
                  {u.name}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="border p-2">Min GPA</td>
              {data.map((u) => (
                <td key={u.id} className="border p-2">
                  {u.min_gpa}
                </td>
              ))}
            </tr>

            <tr>
              <td className="border p-2">Min IELTS</td>
              {data.map((u) => (
                <td key={u.id} className="border p-2">
                  {u.min_ielts}
                </td>
              ))}
            </tr>

            <tr>
              <td className="border p-2">Tuition Fee</td>
              {data.map((u) => (
                <td key={u.id} className="border p-2">
                  ${u.tuition_fee}
                </td>
              ))}
            </tr>
          </tbody>
        </table>

        <button
          onClick={onClose}
          className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default CompareModal;
