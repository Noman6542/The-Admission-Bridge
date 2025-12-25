import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-6">
        <div>
          <h2 className="text-xl font-bold text-white">UniFinder</h2>
          <p className="mt-3 text-sm">Smart university admission platform.</p>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>Home</li>
            <li>Universities</li>
            <li>Compare</li>
            <li>Apply</li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-3">Contact</h3>
          <p className="text-sm">support@unifinder.com</p>
        </div>
      </div>

      <p className="text-center text-xs mt-8">
        © 2025 UniFinder. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
