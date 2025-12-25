"use client";
import { motion } from "framer-motion";
import React from "react";
const Navbar = () => {
  return (
    <div className="max-w-[1600px] mx-auto">
      <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="flex justify-between items-center px-8 py-4 bg-white shadow-md"
    >
      <h1 className="text-2xl font-bold text-blue-600">UniFinder</h1>

      <ul className="flex gap-6 font-medium text-gray-700">
        <li className="cursor-pointer hover:text-blue-600">Home</li>
        <li className="cursor-pointer hover:text-blue-600">Universities</li>
        <li className="cursor-pointer hover:text-blue-600">Compare</li>
        <li className="cursor-pointer hover:text-blue-600">Apply</li>
      </ul>
    </motion.nav>
    </div>
  );
};

export default Navbar;
