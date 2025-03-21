
import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface AnimatedButtonProps {
  to: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'gradient' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  icon?: boolean;
  isExternal?: boolean;
  delay?: number;
  onClick?: () => void;
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
  onClick,
}: AnimatedButtonProps) => {
  const baseClasses = "relative font-medium inline-flex items-center justify-center rounded-full transition-all overflow-hidden";
  
  const variantClasses = {
    primary: "bg-opority-purple text-white shadow-button hover:shadow-lg hover:bg-opority-purple-light transform hover:translate-y-[-1px]",
    secondary: "bg-white text-opority-navy border border-gray-200 hover:border-opority-purple hover:text-opority-purple",
    outline: "bg-transparent text-opority-purple border border-opority-purple hover:bg-opority-purple/5",
    gradient: "bg-gradient-to-r from-opority-purple to-opority-purple-light text-white shadow-button hover:shadow-lg transform hover:translate-y-[-1px]",
    ghost: "bg-transparent text-opority-purple hover:bg-opority-purple/5"
  };
  
  const sizeClasses = {
    sm: "text-sm px-4 py-2 gap-2",
    md: "text-base px-6 py-3 gap-3",
    lg: "text-lg px-8 py-4 gap-3"
  };

  const buttonAnimation = {
    tap: { scale: 0.98 },
    hover: { 
      scale: 1.03,
      transition: { 
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  const iconAnimation = {
    initial: { x: 0 },
    hover: { 
      x: 5,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
        repeat: Infinity,
        repeatType: "reverse" as const,
        duration: 0.6,
        repeatDelay: 0.2
      }
    }
  };

  const buttonContent = (
    <>
      <span className="relative z-10">{children}</span>
      {icon && (
        <motion.div
          variants={iconAnimation}
          initial="initial"
          whileHover="hover"
          className="relative z-10"
        >
          <ArrowRight size={size === 'sm' ? 16 : size === 'md' ? 18 : 20} />
        </motion.div>
      )}

      {/* Add hover effect overlay */}
      {variant === 'primary' || variant === 'gradient' ? (
        <motion.div 
          className="absolute inset-0 bg-white opacity-0 z-0"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 0.15 }}
          transition={{ duration: 0.2 }}
        />
      ) : null}
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
    whileTap: "tap",
    whileHover: "hover",
    variants: buttonAnimation
  };

  if (isExternal) {
    return (
      <motion.a 
        href={to} 
        target="_blank" 
        rel="noopener noreferrer" 
        className={allClasses}
        onClick={onClick}
        {...motionProps}
      >
        {buttonContent}
      </motion.a>
    );
  }

  return (
    <motion.div {...motionProps}>
      <Link 
        to={to} 
        className={allClasses}
        onClick={onClick}
      >
        {buttonContent}
      </Link>
    </motion.div>
  );
};

export default AnimatedButton;
