
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import AnimatedButton from '@/components/ui/AnimatedButton';

interface CtaSectionProps {
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
  variant?: 'light' | 'dark';
}

const CtaSection = ({ 
  title, 
  subtitle, 
  buttonText, 
  buttonLink,
  variant = 'light'
}: CtaSectionProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6 } }
  };

  return (
    <section 
      ref={ref}
      className={`py-16 md:py-24 ${variant === 'dark' ? 'bg-opority-navy text-white' : 'bg-gray-50'}`}
    >
      <motion.div 
        className="container-custom"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <div className={`bg-gradient-to-r ${variant === 'dark' ? 'from-opority-navy to-opority-navy/90' : 'from-opority-blue to-opority-blue-light'} rounded-2xl overflow-hidden shadow-lg`}>
          <div className="relative p-8 md:p-12 lg:p-16">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full -ml-40 -mb-40"></div>

            <div className="relative z-10 max-w-3xl mx-auto text-center">
              <motion.h2 
                className={`text-3xl md:text-4xl font-bold mb-4 ${variant === 'dark' ? 'text-white' : 'text-white'}`}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                {title}
              </motion.h2>
              
              <motion.p 
                className={`text-lg mb-8 ${variant === 'dark' ? 'text-gray-300' : 'text-white/90'}`}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {subtitle}
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <AnimatedButton 
                  to={buttonLink} 
                  variant={variant === 'dark' ? 'primary' : 'secondary'}
                  size="lg"
                  className={variant === 'dark' ? 'bg-white text-opority-blue hover:bg-gray-100' : ''}
                >
                  {buttonText}
                </AnimatedButton>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default CtaSection;
