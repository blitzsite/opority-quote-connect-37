
import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface AnimatedButtonProps {
  to: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'gradient';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  icon?: boolean;
  isExternal?: boolean;
  delay?: number;
}

const AnimatedButton = ({
  to,
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  icon = true,
  isExternal = false,
  delay = 0,
}: AnimatedButtonProps) => {
  const baseClasses = "relative font-medium inline-flex items-center justify-center rounded-full transition-all overflow-hidden";
  
  const variantClasses = {
    primary: "bg-opority-blue text-white shadow-button hover:shadow-lg hover:bg-opority-blue-light transform hover:translate-y-[-1px]",
    secondary: "bg-white text-opority-navy border border-gray-200 hover:border-opority-blue hover:text-opority-blue",
    outline: "bg-transparent text-opority-blue border border-opority-blue hover:bg-opority-blue/5",
    gradient: "bg-gradient-to-r from-opority-blue to-opority-blue-light text-white shadow-button hover:shadow-lg transform hover:translate-y-[-1px]"
  };
  
  const sizeClasses = {
    sm: "text-sm px-4 py-2 gap-2",
    md: "text-base px-6 py-3 gap-3",
    lg: "text-lg px-8 py-4 gap-3"
  };

  const buttonContent = (
    <>
      <span>{children}</span>
      {icon && (
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: [0, 5, 0] }}
          transition={{ 
            duration: 1.5, 
            repeat: Infinity, 
            repeatType: "loop", 
            ease: "easeInOut",
            repeatDelay: 1
          }}
        >
          <ArrowRight size={size === 'sm' ? 16 : size === 'md' ? 18 : 20} />
        </motion.div>
      )}
    </>
  );

  const allClasses = cn(
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    "group",
    className
  );

  const motionProps = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.4, delay: delay * 0.1 },
    whileHover: { scale: 1.03 },
    whileTap: { scale: 0.98 }
  };

  if (isExternal) {
    return (
      <motion.a 
        href={to} 
        target="_blank" 
        rel="noopener noreferrer" 
        className={allClasses}
        {...motionProps}
      >
        {buttonContent}
      </motion.a>
    );
  }

  return (
    <motion.div {...motionProps}>
      <Link to={to} className={allClasses}>
        {buttonContent}
      </Link>
    </motion.div>
  );
};

export default AnimatedButton;
