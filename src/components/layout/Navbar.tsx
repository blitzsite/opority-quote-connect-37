
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';
import MobileMenu from './MobileMenu';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
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
    // Scroll to top when route changes
    window.scrollTo(0, 0);
  }, [location.pathname]);

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

        {/* Mobile Menu (shadcn Sheet component) */}
        <div className="md:hidden">
          <MobileMenu links={links} />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
