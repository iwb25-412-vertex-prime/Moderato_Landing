"use client";

import React, { useEffect } from "react";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  maxWidthClassName?: string; // e.g., max-w-2xl
}

const Modal: React.FC<ModalProps> = ({ open, onClose, title, children, maxWidthClassName = "max-w-3xl" }) => {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) return null;

  return (
    <div aria-modal className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />

      {/* Dialog */}
      <div className={`relative bg-white rounded-2xl shadow-2xl border border-gray-200 w-[92vw] ${maxWidthClassName} mx-auto overflow-hidden`}> 
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-200 bg-gray-50">
          <h3 className="text-sm font-semibold text-gray-800">{title}</h3>
          <button aria-label="Close" onClick={onClose} className="p-2 rounded-md hover:bg-gray-200">
            <svg className="w-5 h-5 text-gray-700" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="p-0">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
