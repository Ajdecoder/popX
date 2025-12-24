import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Container({ children }) {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center p-5 bg-gray-100">
      <div className="mobile-container w-full max-w-[375px]">
        <div className="w-full max-w-sm bg-white border rounded-lg p-3 flex flex-col h-[120vh] justify-between">

          {children && children}

          {/* Bottom navigation */}
          <div className="flex justify-around bg-white">
            {/* Left / Back */}
            <button
              className="text-gray-600 hover:text-blue-500"
              onClick={() => navigate(-1)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            {/* Center / Home */}
            <button
              className="text-gray-600 hover:text-blue-500"
              onClick={() => navigate("/")} // navigate to Sign In route
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3"
                />
              </svg>
            </button>

            {/* Right / Recent / Settings */}
            <button
              className="text-gray-600 hover:text-blue-500"
              onClick={() => setActiveScreen("settings")} // internal settings screen
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
