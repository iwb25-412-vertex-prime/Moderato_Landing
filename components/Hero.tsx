"use client";
import React, { useState } from "react";
import Modal from "./Modal";

const CodeWindow: React.FC = () => {
  return (
    <div className="relative w-full max-w-[620px] rounded-2xl border-2 border-gray-200 shadow-xl overflow-hidden bg-white/70 backdrop-blur-md">
      {/* Title bar */}
      <div className="flex items-center justify-between px-4 py-2 bg-gray-100 border-b border-gray-200">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-red-500" />
          <span className="w-3 h-3 rounded-full bg-yellow-400" />
          <span className="w-3 h-3 rounded-full bg-green-500" />
        </div>
        <div className="text-[11px] text-gray-500 font-medium">Quick Example</div>
      </div>

      {/* Code area */}
      <div className="bg-gray-950 text-gray-100 text-[13px] leading-6 p-5 overflow-auto">
        <pre className="font-mono whitespace-pre text-[13px]">
          <span className="text-[#FF9900]">{/* Moderate Request */}</span>{"\n"}
          {`POST /moderate/
Headers: X-API-Key: your-strong-secret-key
Body: {
  "text_to_moderate": "This is some text to check"
}

`}
          <span className="text-[#FF9900]">{/* Response */}</span>{"\n"}
          {`{
  "status": true,
  "result": {
    "flagged": false,
    "confidence": 0.95,
    "categories": [],
    "severity": "none",
    "action_recommended": "approve"
  },
}`}
        </pre>
      </div>
    </div>
  );
};

const Hero: React.FC = () => {
  const [openVideo, setOpenVideo] = useState(false);
  const [openSoon, setOpenSoon] = useState(false);

  return (
    <section id="home" className="relative overflow-hidden">
      {/* soft background gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-yellow-50 via-white to-orange-50" />

      <div className="max-w-7xl mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left copy */}
          <div>
            <div className="inline-flex items-center gap-2 mb-6 rounded-full border border-yellow-300 bg-yellow-50 px-3 py-1 text-xs font-semibold text-yellow-700">
              Moderato CMaaS
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight">
             We&apos;re here to
              <br />
              Define your 
              <br />
              Content Safety.
            </h1>

            {/* underline accent */}
            <svg
              className="mt-6 mb-6 w-64 sm:w-80"
              viewBox="0 0 320 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 20C72 -5 248 -5 316 20"
                stroke="url(#g)"
                strokeWidth="8"
                strokeLinecap="round"
              />
              <defs>
                <linearGradient id="g" x1="0" x2="320" y1="0" y2="0" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#FACC15" />
                  <stop offset="1" stopColor="#FB923C" />
                </linearGradient>
              </defs>
            </svg>

            <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-xl">
              Let&apos;s make your rules easy to enforce and policies clear using the Moderato API and AI-powered tools for managing content policies.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <button onClick={() => setOpenSoon(true)} className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-xl font-semibold hover:bg-yellow-500 transition-all duration-300 hover:shadow-lg">
                Try free trial
              </button>
              <button onClick={() => setOpenVideo(true)} className="bg-white border-2 border-yellow-400 text-gray-900 px-6 py-3 rounded-xl font-semibold hover:bg-yellow-50 transition-colors duration-300 inline-flex items-center gap-2">
                <span className="inline-flex w-5 h-5 rounded-full bg-yellow-400 text-gray-900 items-center justify-center">
                  <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7L8 5z" />
                  </svg>
                </span>
                View Demo
              </button>
            </div>
          </div>

          {/* Right code window */}
          <div className="flex justify-center lg:justify-end">
            <CodeWindow />
          </div>
        </div>
      </div>
      {/* Video Modal */}
      <Modal open={openVideo} onClose={() => setOpenVideo(false)} title="Product Demo" maxWidthClassName="max-w-5xl">
        <div className="aspect-video w-full bg-black">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/if3RSk4qULw?si=-HZR1iYAgfCa0WpT&autoplay=1"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      </Modal>

      {/* Coming Soon Modal */}
      <Modal open={openSoon} onClose={() => setOpenSoon(false)} title="Coming Soon" maxWidthClassName="max-w-md">
        <div className="p-6">
          <p className="text-gray-700 mb-4">We are moving to production soon. Stay tuned!</p>
          <div className="flex justify-end">
            <button onClick={() => setOpenSoon(false)} className="px-4 py-2 rounded-lg bg-yellow-400 text-gray-900 font-semibold hover:bg-yellow-500">OK</button>
          </div>
        </div>
      </Modal>

    </section>
  );
};

export default Hero;
