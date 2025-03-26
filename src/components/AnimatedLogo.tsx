
import React from "react";

const AnimatedLogo = () => {
  return (
    <div className="relative w-10 h-10 perspective">
      <div className="absolute inset-0 preserve-3d animate-float">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 4C11.164 4 4 11.164 4 20C4 28.836 11.164 36 20 36C28.836 36 36 28.836 36 20C36 11.164 28.836 4 20 4Z" stroke="url(#paint0_linear)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="20" cy="13" r="2" fill="#9b87f5" />
          <circle cx="20" cy="20" r="2" fill="#9b87f5" />
          <circle cx="20" cy="27" r="2" fill="#9b87f5" />
          <path d="M13 20C13 16.686 15.686 14 19 14" stroke="#9b87f5" strokeWidth="2" strokeLinecap="round" />
          <path d="M27 20C27 23.314 24.314 26 21 26" stroke="#9b87f5" strokeWidth="2" strokeLinecap="round" />
          <defs>
            <linearGradient id="paint0_linear" x1="4" y1="4" x2="36" y2="36" gradientUnits="userSpaceOnUse">
              <stop stopColor="#33C3F0" />
              <stop offset="1" stopColor="#9b87f5" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
};

export default AnimatedLogo;
