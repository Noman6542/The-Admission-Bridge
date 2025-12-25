"use client";
import React from 'react';

const Filters = ({ tuitionRange, setTuitionRange, userGPA, setUserGPA, userIELTS, setUserIELTS }) => (
  <div className="space-y-4">
    <div>
      <label>Max Tuition Fee: ${tuitionRange}</label>
      <input className='cursor-pointer' type="range" min="5000" max="60000" step="1000" value={tuitionRange} onChange={e => setTuitionRange(e.target.value)} />
    </div>
    <div>
      <label>Your GPA</label>
      <input className='border-2 border-blue-400 ml-2 px-2' placeholder='e.g 3.50' type="number" step="0.1" value={userGPA} onChange={e => setUserGPA(e.target.value)} />
    </div>
    <div>
      <label>Your IELTS</label>
      <input className='border-2 border-blue-400 ml-2 px-2'placeholder='e.g 7.5' type="number" step="0.5" value={userIELTS} onChange={e => setUserIELTS(e.target.value)} />
    </div>
  </div>
);

export default Filters;
