import React from 'react';
import { motion } from 'framer-motion';

const Hero = ({ searchTerm, setSearchTerm, selectedCountry, setSelectedCountry, selectedDegree, setSelectedDegree, COUNTRIES, DEGREES, onSearch }) => {
  return (
    <section className="relative h-[80vh] flex flex-col items-center justify-center bg-indigo-900 text-blue px-4">
      <motion.h1 initial={{ y:50, opacity:0 }} animate={{ y:0, opacity:1 }} className="text-5xl font-bold mb-6 text-white">
        Find Your Dream <span className="text-indigo-400">Future</span>
      </motion.h1>
      <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} className="bg-white p-2 rounded-2xl flex gap-2 max-w-3xl">
        <input type="text" placeholder="Search..." className="flex-1 px-2" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
        <select value={selectedCountry} onChange={e => setSelectedCountry(e.target.value)}>
          <option value="All">All Countries</option>
          {COUNTRIES.map(c => <option key={c}>{c}</option>)}
        </select>
        <select value={selectedDegree} onChange={e => setSelectedDegree(e.target.value)}>
          <option value="All">All Levels</option>
          {DEGREES.map(d => <option key={d}>{d}</option>)}
        </select>
        <button onClick={onSearch} className="bg-indigo-600 px-4 rounded text-white cursor-pointer">Explore</button>
      </motion.div>
    </section>
  );
};

export default Hero;
