
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AnimatedLogo from "./AnimatedLogo";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "py-3 glass-morphism border-b border-white/5"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <AnimatedLogo />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="hover-underline text-sm font-medium text-white/90 hover:text-white transition-colors duration-200">
            Home
          </Link>
          <Link to="/services" className="hover-underline text-sm font-medium text-white/90 hover:text-white transition-colors duration-200">
            Services
          </Link>
          <Link to="/team" className="hover-underline text-sm font-medium text-white/90 hover:text-white transition-colors duration-200">
            Team
          </Link>
          <Link
            to="/booking"
            className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-full px-6 py-2 text-sm font-medium transition-colors duration-200"
          >
            Book a Consultation
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-dark-200 z-40 transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden flex flex-col pt-24 px-6`}
      >
        <nav className="flex flex-col space-y-6">
          <Link
            to="/"
            className="text-xl font-medium text-white/90 hover:text-white transition-colors duration-200"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/services"
            className="text-xl font-medium text-white/90 hover:text-white transition-colors duration-200"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Services
          </Link>
          <Link
            to="/team"
            className="text-xl font-medium text-white/90 hover:text-white transition-colors duration-200"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Team
          </Link>
          <Link
            to="/booking"
            className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-full py-3 text-center text-lg font-medium transition-colors duration-200"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Book a Consultation
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
