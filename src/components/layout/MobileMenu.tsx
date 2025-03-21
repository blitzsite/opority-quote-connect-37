
import { ReactNode, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  links: {
    name: string;
    path: string;
    isButton?: boolean;
  }[];
}

const MobileMenu = ({ isOpen, onClose, links }: MobileMenuProps) => {
  const location = useLocation();
  
  // Close mobile menu when route changes
  useEffect(() => {
    if (isOpen) {
      onClose();
    }
  }, [location.pathname, isOpen, onClose]);
  
  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            onClick={onClose}
          />
          
          {/* Menu content */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed top-0 right-0 h-full w-[85%] max-w-md bg-white z-50 shadow-xl flex flex-col"
          >
            <div className="flex justify-end p-4">
              <button
                onClick={onClose}
                className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>
            
            <nav className="flex-grow overflow-auto">
              <ul className="px-6 py-4 flex flex-col space-y-2">
                {links.map((link, index) => (
                  <motion.li
                    key={link.path}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={link.path}
                      className={cn(
                        "block py-3 px-4 text-lg font-medium rounded-lg transition-colors",
                        link.isButton 
                          ? "bg-opority-blue text-white mt-4"
                          : location.pathname === link.path
                            ? "text-opority-blue bg-opority-blue/10"
                            : "text-opority-navy hover:bg-gray-100"
                      )}
                      onClick={onClose}
                    >
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </nav>
            
            <div className="p-6 border-t border-gray-100">
              <p className="text-sm text-gray-500">© 2023 Opority. All rights reserved.</p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
