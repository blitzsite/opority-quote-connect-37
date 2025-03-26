
import React from "react";
import AnimatedLogo from "./AnimatedLogo";
import { ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="pt-10 pb-6 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -bottom-32 right-0 w-64 h-64 rounded-full bg-brand-purple/5 blur-3xl"></div>
      </div>

      <div className="container relative">
        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <AnimatedLogo />
          </div>
          
          <p className="text-white/50 text-sm mb-4 md:mb-0">© 2023 Opority. All rights reserved.</p>
          
          <button 
            onClick={scrollToTop}
            className="glass-morphism p-2 rounded-full hover:bg-white/10 transition-colors group"
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-5 w-5 text-white/70 group-hover:text-white group-hover:-translate-y-1 transition-all" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
