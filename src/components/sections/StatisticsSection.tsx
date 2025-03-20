
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

type Stat = {
  value: string;
  label: string;
  prefix?: string;
  suffix?: string;
};

const stats: Stat[] = [
  { value: "94", label: "Client Satisfaction", suffix: "%" },
  { value: "750", label: "Active Projects", prefix: "+" },
  { value: "2.5", label: "Revenue Growth", suffix: "x" },
  { value: "3.8", label: "ROI For Clients", prefix: "", suffix: "x" }
];

const StatisticsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });
  
  return (
    <section ref={ref} className="py-12 bg-gradient-to-b from-white to-gray-50">
      <div className="container-custom">
        <motion.div 
          className="flex flex-wrap justify-center items-center gap-6 md:gap-8"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="flex-1 min-w-[180px] bg-white rounded-xl p-5 shadow-sm border border-gray-100 text-center"
              initial={{ y: 30, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
              transition={{ 
                duration: 0.5,
                delay: index * 0.1,
                ease: "easeOut" 
              }}
            >
              <div className="flex items-center justify-center">
                {stat.prefix && <span className="text-opority-blue text-2xl font-bold">{stat.prefix}</span>}
                <motion.span 
                  className="text-4xl sm:text-5xl font-bold text-opority-navy"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={isInView ? { 
                    opacity: 1, 
                    scale: 1,
                    transition: {
                      duration: 0.5,
                      delay: 0.3 + index * 0.1,
                      ease: "easeOut"
                    }
                  } : {}}
                >
                  {stat.value}
                </motion.span>
                {stat.suffix && <span className="text-opority-blue text-2xl font-bold">{stat.suffix}</span>}
              </div>
              <p className="text-gray-500 mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default StatisticsSection;
