
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-opority-dark-bg text-white border-t border-opority-dark-border">
      <div className="container-custom pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 mb-10">
          <div>
            <Link to="/" className="inline-block text-2xl font-semibold mb-4">
              <span className="text-opority-purple">O</span>pority
            </Link>
            <p className="text-gray-400 mb-6">
              Generating high-quality leads for home improvement businesses.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-9 h-9 rounded-full bg-opority-dark-card border border-opority-dark-border flex items-center justify-center text-gray-400 hover:text-opority-purple hover:border-opority-purple transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-opority-dark-card border border-opority-dark-border flex items-center justify-center text-gray-400 hover:text-opority-purple hover:border-opority-purple transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-opority-dark-card border border-opority-dark-border flex items-center justify-center text-gray-400 hover:text-opority-purple hover:border-opority-purple transition-colors">
                <Linkedin size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-opority-purple transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-opority-purple transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/team" className="text-gray-400 hover:text-opority-purple transition-colors">
                  Our Team
                </Link>
              </li>
              <li>
                <Link to="/booking" className="text-gray-400 hover:text-opority-purple transition-colors">
                  Book a Call
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services#website" className="text-gray-400 hover:text-opority-purple transition-colors">
                  Website Development
                </Link>
              </li>
              <li>
                <Link to="/services#facebook" className="text-gray-400 hover:text-opority-purple transition-colors">
                  Facebook Ads
                </Link>
              </li>
              <li>
                <Link to="/services#video" className="text-gray-400 hover:text-opority-purple transition-colors">
                  Video Content
                </Link>
              </li>
              <li>
                <Link to="/services#editing" className="text-gray-400 hover:text-opority-purple transition-colors">
                  Video Editing
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="flex-shrink-0 mt-1 mr-3 text-opority-purple" size={18} />
                <span className="text-gray-400">
                  123 Marketing St, Suite 100<br />Digital City, DC 10101
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="flex-shrink-0 mr-3 text-opority-purple" size={18} />
                <a href="tel:+1234567890" className="text-gray-400 hover:text-opority-purple transition-colors">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="flex-shrink-0 mr-3 text-opority-purple" size={18} />
                <a href="mailto:hello@opority.com" className="text-gray-400 hover:text-opority-purple transition-colors">
                  hello@opority.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-opority-dark-border pt-8 text-sm text-gray-400 flex flex-col md:flex-row justify-between items-center">
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
