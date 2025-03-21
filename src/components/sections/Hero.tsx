
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
    <div className="relative overflow-hidden bg-opority-dark-bg pt-28 pb-16 md:pt-32 md:pb-24" ref={containerRef}>
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full">
          <img 
            src="/lovable-uploads/db99f11a-eb60-41f9-86a1-82ea53525cd5.png" 
            alt="Background pattern" 
            className="w-full h-full object-cover opacity-5" 
          />
        </div>
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
            <h1 className="text-balance text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              We Generate <span className="text-opority-purple">Quote-Ready</span> Home Improvement <span className="text-opority-purple">Leads</span> For You.
            </h1>
            
            <p className="text-lg text-gray-300 mb-8 max-w-xl mx-auto lg:mx-0">
              No Cold Calling. No Wasted Ad Spend. <br />
              Just Ready-To-Buy Customers.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <AnimatedButton 
                to="/booking" 
                variant="primary" 
                size="lg"
                className="purple-gradient"
              >
                Get More Leads
              </AnimatedButton>
            </div>
          </motion.div>
          
          {/* Right side - illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="relative">
              <div className="w-full h-full absolute -right-10 -top-10 rounded-full bg-opority-purple/5 filter blur-[60px]"></div>
              <div className="w-full h-full absolute -left-10 -bottom-10 rounded-full bg-opority-purple/5 filter blur-[60px]"></div>
              <img 
                src="/hero-img.jpg" 
                alt="Home improvement professional" 
                className="rounded-2xl object-cover w-full border border-opority-purple/10 shadow-lg" 
              />
              <div className="absolute -bottom-4 -right-4 bg-opority-dark-card px-6 py-4 rounded-lg border border-opority-dark-border shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <p className="text-white font-medium">Lead Generation Active</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
