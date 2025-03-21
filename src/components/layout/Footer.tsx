
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-opority-dark-bg text-white">
      <div className="container-custom pt-16 pb-8">
        <div className="text-center">
          <Link to="/" className="inline-block text-2xl font-semibold mb-4">
            <img src="/logo-light.png" alt="Opority" className="h-8" />
          </Link>
          <div className="flex justify-center space-x-8 py-4">
            <Link to="/" className="text-white hover:text-opority-purple transition-colors">
              Home
            </Link>
            <Link to="/services" className="text-white hover:text-opority-purple transition-colors">
              Services
            </Link>
            <Link to="/team" className="text-white hover:text-opority-purple transition-colors">
              Team
            </Link>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-gray-400 flex flex-col md:flex-row justify-between items-center">
          <p>© {currentYear} Opority. All rights reserved.</p>
          <div className="mt-4 md:mt-0 space-x-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
