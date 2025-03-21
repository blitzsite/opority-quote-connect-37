
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
      className="py-16 md:py-24 bg-opority-dark-bg text-white"
    >
      <motion.div 
        className="container-custom"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <div className="bg-gradient-to-r from-opority-purple/10 to-opority-purple-light/10 rounded-2xl overflow-hidden border border-opority-dark-border shadow-lg">
          <div className="relative p-8 md:p-12 lg:p-16">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-opority-purple/5 rounded-full -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-opority-purple/5 rounded-full -ml-40 -mb-40"></div>

            <div className="relative z-10 max-w-3xl mx-auto text-center">
              <motion.h2 
                className="text-3xl md:text-4xl font-bold mb-4 text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                {title} <span className="text-opority-purple">Leads</span>
              </motion.h2>
              
              <motion.p 
                className="text-lg mb-8 text-gray-300"
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
                  variant="primary"
                  size="lg"
                  className="purple-gradient"
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
