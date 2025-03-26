
import React from "react";

const AnimatedLogo = () => {
  return (
    <div className="relative w-8 h-8 perspective">
      <div className="absolute inset-0 preserve-3d animate-float">
        <div className="absolute inset-0 h-8 w-8 rounded-lg bg-gradient-to-tr from-brand-purple to-brand-accent transform rotate-45"></div>
        <div className="absolute inset-0 h-6 w-6 rounded-md bg-dark-100 transform translate-z-2 left-1 top-1 flex items-center justify-center">
          <span className="font-bold text-white text-sm">O</span>
        </div>
      </div>
    </div>
  );
};

export default AnimatedLogo;
