
import React from "react";
import AnimatedLogo from "./AnimatedLogo";
import { Twitter, Instagram, Linkedin, Github, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="pt-16 pb-8 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -bottom-32 right-0 w-64 h-64 rounded-full bg-brand-purple/5 blur-3xl"></div>
      </div>

      <div className="container relative">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Column 1 - Logo and Description */}
          <div className="md:col-span-1">
            <div className="flex items-center mb-4">
              <AnimatedLogo />
              <span className="ml-2 font-bold text-xl tracking-tight">Opority</span>
            </div>
            <p className="text-white/70 mb-6 text-sm">
              Empowering professionals with premium digital tools designed for efficiency and innovation.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="h-10 w-10 rounded-full glass-morphism flex items-center justify-center text-white/80 hover:text-white hover:bg-white/10 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="h-10 w-10 rounded-full glass-morphism flex items-center justify-center text-white/80 hover:text-white hover:bg-white/10 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="h-10 w-10 rounded-full glass-morphism flex items-center justify-center text-white/80 hover:text-white hover:bg-white/10 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="h-10 w-10 rounded-full glass-morphism flex items-center justify-center text-white/80 hover:text-white hover:bg-white/10 transition-colors">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Column 2 - Quick Links */}
          <div>
            <h4 className="font-medium text-lg mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Press</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Partner Program</a></li>
            </ul>
          </div>
          
          {/* Column 3 - Resources */}
          <div>
            <h4 className="font-medium text-lg mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Documentation</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Community</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Tutorials</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">API Reference</a></li>
            </ul>
          </div>
          
          {/* Column 4 - Legal */}
          <div>
            <h4 className="font-medium text-lg mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Cookie Policy</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">GDPR Compliance</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Security</a></li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
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
