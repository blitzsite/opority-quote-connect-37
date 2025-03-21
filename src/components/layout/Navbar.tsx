
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import { useIsMobile } from '@/hooks/use-mobile';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isMobile = useIsMobile();

  const links = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Team', path: '/team' },
    { name: 'Book a Call', path: '/booking', isButton: true },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsScrolled(offset > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    // Close mobile menu when route changes
    setIsMobileMenuOpen(false);
    // Scroll to top when route changes
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [isMobileMenuOpen]);

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'py-3 backdrop-blur-crisp bg-white/90 shadow-subtle' : 'py-4 md:py-6'
      )}
    >
      <div className="container-custom flex items-center justify-between">
        <Link to="/" className="flex items-center text-2xl font-semibold text-opority-navy transition-opacity hover:opacity-80 z-50">
          <span className="text-opority-blue">O</span>pority
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "relative py-2 text-base font-medium transition-colors",
                link.isButton 
                  ? "bg-opority-blue hover:bg-opority-blue-light text-white px-5 py-2 rounded-full font-medium transition-all shadow-button hover:shadow-lg"
                  : location.pathname === link.path
                    ? "text-opority-blue"
                    : "text-opority-navy/80 hover:text-opority-blue"
              )}
            >
              {link.name}
              {!link.isButton && location.pathname === link.path && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-opority-blue rounded-full" />
              )}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="flex md:hidden text-opority-navy p-1 z-50"
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={isMobileMenuOpen ? 'close' : 'open'}
              initial={{ opacity: 0, rotate: isMobileMenuOpen ? -90 : 90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: isMobileMenuOpen ? 90 : -90 }}
              transition={{ duration: 0.2 }}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.div>
          </AnimatePresence>
        </button>
      </div>

      {/* Fixed Mobile Menu - Redesigned for better performance */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            className="fixed inset-0 bg-white z-40 pt-20 md:hidden"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <div className="h-full overflow-auto">
              <nav className="container-custom flex flex-col space-y-4 py-8">
                {links.map((link, index) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2, delay: index * 0.05 }}
                  >
                    <Link
                      to={link.path}
                      className={cn(
                        "block py-4 px-4 text-xl font-medium rounded-lg transition-colors",
                        link.isButton 
                          ? "bg-opority-blue text-white mt-4"
                          : location.pathname === link.path
                            ? "text-opority-blue bg-opority-blue/10"
                            : "text-opority-navy hover:bg-gray-100"
                      )}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </nav>
              
              <div className="container-custom py-6 border-t border-gray-100 mt-auto">
                <p className="text-sm text-gray-500">© 2023 Opority. All rights reserved.</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
