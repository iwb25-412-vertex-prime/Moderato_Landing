"use client";

import React, { useState } from "react";
import Modal from "./Modal";

const Navbar: React.FC = () => {
  const [openSoon, setOpenSoon] = useState(false);

  const navItem = (href: string, label: string) => (
    <a href={href} className="text-gray-700 hover:text-yellow-600 font-medium text-sm">
      {label}
    </a>
  );

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-yellow-400 to-orange-400 flex items-center justify-center">
            <svg className="w-4 h-4 text-white" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
          </div>
          <span className="font-extrabold text-lg text-gray-900">Moderato</span>
        </a>

        {/* Links */}
        <nav className="hidden md:flex items-center gap-6">
          {navItem("#home", "Home")}
          {navItem("#how-it-works", "How it works")}
          {navItem("#use-cases", "Use cases")}
          {navItem("#pricing", "Pricing")}
          {navItem("#faq", "FAQ")}
          <a href="https://iwb25-412-vertex-prime.github.io/Moderato_Doc/" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-yellow-600 font-medium text-sm">
            Documentation
          </a>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <button onClick={() => setOpenSoon(true)} className="hidden sm:inline-flex px-4 py-2 rounded-lg border-2 border-yellow-400 text-gray-900 font-semibold text-sm hover:bg-yellow-50">
            Start
          </button>
        </div>
      </div>

      {/* Coming soon modal */}
      <Modal open={openSoon} onClose={() => setOpenSoon(false)} title="Coming Soon" maxWidthClassName="max-w-md">
        <div className="p-6">
          <p className="text-gray-700 mb-4">We are moving to production soon. Stay tuned!</p>
          <div className="flex justify-end">
            <button onClick={() => setOpenSoon(false)} className="px-4 py-2 rounded-lg bg-yellow-400 text-gray-900 font-semibold hover:bg-yellow-500">OK</button>
          </div>
        </div>
      </Modal>
    </header>
  );
};

export default Navbar;
