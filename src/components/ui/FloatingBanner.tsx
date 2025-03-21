
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import AnimatedButton from './AnimatedButton';

interface FloatingBannerProps {
  message: string;
  buttonText: string;
  buttonLink: string;
  isVisible?: boolean;
  onDismiss?: () => void;
}

const FloatingBanner = ({
  message,
  buttonText,
  buttonLink,
  isVisible = false,
  onDismiss,
}: FloatingBannerProps) => {
  const [visible, setVisible] = useState(isVisible);
  
  const handleDismiss = () => {
    setVisible(false);
    if (onDismiss) onDismiss();
  };

  if (!visible) {
    return null;
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 50, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-30 max-w-md w-full"
        >
          <div className="mx-4 bg-white rounded-lg shadow-xl border border-opority-blue/20 backdrop-blur-sm p-4 flex items-center">
            <div className="flex-grow mr-4">
              <p className="text-opority-navy font-medium">{message}</p>
            </div>
            <div className="flex items-center gap-3 flex-shrink-0">
              <AnimatedButton to={buttonLink} variant="primary" size="sm">
                {buttonText}
              </AnimatedButton>
              <button
                onClick={handleDismiss}
                className="text-gray-500 hover:text-gray-700 p-1 rounded-full hover:bg-gray-100 transition-colors"
                aria-label="Dismiss"
              >
                <X size={18} />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FloatingBanner;
