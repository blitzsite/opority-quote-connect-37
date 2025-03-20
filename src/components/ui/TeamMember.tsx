
import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface TeamMemberProps {
  name: string;
  role: string;
  imageUrl: string;
  delay?: number;
}

const TeamMember = ({ name, role, imageUrl, delay = 0 }: TeamMemberProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className={cn(
        "overflow-hidden rounded-xl bg-white shadow-card relative transform transition-all duration-300 hover:translate-y-[-8px] hover:shadow-lg",
        isInView ? "opacity-100" : "opacity-0 translate-y-4"
      )}
      style={{
        transition: `opacity 0.5s ${delay * 0.1}s, transform 0.5s ${delay * 0.1}s`,
      }}
    >
      <div className="aspect-[3/4] w-full relative overflow-hidden">
        <img 
          src={imageUrl} 
          alt={name} 
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="p-4 bg-opority-blue text-white">
        <h3 className="text-xl font-medium">{name}</h3>
        <p className="text-blue-100 text-sm">{role}</p>
      </div>
    </div>
  );
};

export default TeamMember;
