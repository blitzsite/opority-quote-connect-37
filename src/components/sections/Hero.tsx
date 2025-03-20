
import { useEffect, useRef } from 'react';
import AnimatedButton from '@/components/ui/AnimatedButton';
import { motion } from 'framer-motion';
import { useIsMobile } from '@/hooks/use-mobile';

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  // Parallax effect on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const scrollY = window.scrollY;
      const speed = 0.15;
      const elements = containerRef.current.querySelectorAll('.parallax');
      
      elements.forEach((el) => {
        const htmlEl = el as HTMLElement;
        const speedFactor = parseFloat(htmlEl.dataset.speed || '1');
        htmlEl.style.transform = `translateY(${scrollY * speed * speedFactor}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50 pt-28 pb-16 md:pt-32 md:pb-24" ref={containerRef}>
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-10 -right-10 w-64 h-64 bg-blue-100 rounded-full opacity-20 parallax blur-3xl" data-speed="-0.5"></div>
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-blue-200 rounded-full opacity-10 parallax blur-3xl" data-speed="0.2"></div>
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-indigo-100 rounded-full opacity-20 parallax blur-3xl" data-speed="-0.3"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-8 items-center">
          {/* Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <div className="inline-block px-4 py-1.5 bg-opority-blue/10 text-opority-blue rounded-full text-sm font-medium mb-6">
              Home Improvement Lead Generation
            </div>
            
            <h1 className="text-balance text-4xl sm:text-5xl lg:text-6xl font-bold text-opority-navy leading-tight mb-6">
              Generate Quote-Ready Home Improvement Leads
            </h1>
            
            <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0">
              We help home improvement businesses grow with high-quality leads through proven digital marketing strategies.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <AnimatedButton 
                to="/booking" 
                variant="primary" 
                size="lg"
                className="animate-button-pulse"
              >
                Book a Free Call
              </AnimatedButton>
              
              <AnimatedButton 
                to="/services" 
                variant="outline"
                size="lg"
              >
                Explore Services
              </AnimatedButton>
            </div>
          </motion.div>
          
          {/* Hero Image - Updated with new home improvement image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="with-perspective mt-8 lg:mt-0"
          >
            <div className="relative rounded-xl overflow-hidden shadow-xl with-perspective">
              <motion.img 
                initial={{ y: 20 }}
                animate={{ y: 0 }}
                transition={{ 
                  duration: 5,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut"
                }}
                src="https://images.unsplash.com/photo-1556912998-c57cc6b63cd7" 
                alt="Home renovation and improvement" 
                className="w-full h-auto rounded-xl" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-opority-navy/40 to-transparent rounded-xl"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
