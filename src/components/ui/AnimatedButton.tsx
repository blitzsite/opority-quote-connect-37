
import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

interface AnimatedButtonProps {
  to: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  icon?: boolean;
  isExternal?: boolean;
}

const AnimatedButton = ({
  to,
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  icon = true,
  isExternal = false,
}: AnimatedButtonProps) => {
  const baseClasses = "relative font-medium inline-flex items-center justify-center rounded-full transition-all overflow-hidden";
  
  const variantClasses = {
    primary: "bg-opority-blue text-white shadow-button hover:shadow-lg hover:bg-opority-blue-light transform hover:translate-y-[-1px]",
    secondary: "bg-white text-opority-navy border border-gray-200 hover:border-opority-blue hover:text-opority-blue",
    outline: "bg-transparent text-opority-blue border border-opority-blue hover:bg-opority-blue/5"
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
        <ArrowRight size={size === 'sm' ? 16 : size === 'md' ? 18 : 20} className="transition-transform duration-300 group-hover:translate-x-1" />
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

  if (isExternal) {
    return (
      <a href={to} target="_blank" rel="noopener noreferrer" className={allClasses}>
        {buttonContent}
      </a>
    );
  }

  return (
    <Link to={to} className={allClasses}>
      {buttonContent}
    </Link>
  );
};

export default AnimatedButton;
