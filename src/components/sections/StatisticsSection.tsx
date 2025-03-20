
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { TrendingUp, Users, Award, BarChart3 } from 'lucide-react';

const stats = [
  {
    value: 300,
    symbol: '+',
    label: 'Happy Clients',
    description: 'Home improvement businesses thriving with our lead generation',
    icon: Users,
    color: 'bg-blue-500/10 text-blue-500'
  },
  {
    value: 15000,
    symbol: '+',
    label: 'Qualified Leads',
    description: 'Generated for contractors across the country',
    icon: TrendingUp,
    color: 'bg-green-500/10 text-green-500'
  },
  {
    value: 94,
    symbol: '%',
    label: 'Client Retention',
    description: 'Our clients stay with us because we deliver results',
    icon: Award,
    color: 'bg-purple-500/10 text-purple-500'
  },
  {
    value: 3.2,
    symbol: 'x',
    label: 'Average ROI',
    description: 'Return on investment our clients typically experience',
    icon: BarChart3,
    color: 'bg-amber-500/10 text-amber-500'
  }
];

const StatisticsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const counterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.6,
        delay: custom * 0.1,
      }
    })
  };

  return (
    <section className="py-20 bg-white" ref={ref}>
      <div className="container-custom">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-block px-4 py-1.5 bg-opority-blue/10 text-opority-blue rounded-full text-sm font-medium mb-6">
            Proven Results
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-opority-navy mb-6">
            Our Impact in Numbers
          </h2>
          <p className="text-lg text-gray-600">
            We've helped hundreds of home improvement businesses grow their customer base and increase their revenue.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={counterVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="bg-white rounded-xl p-8 shadow-card border border-gray-100 hover:shadow-lg transition-all duration-300 text-center"
            >
              <div className={`${stat.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6`}>
                <stat.icon size={28} />
              </div>
              
              <motion.div 
                className="text-4xl font-bold text-opority-navy mb-2 flex items-center justify-center"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 2, delay: 0.5 + (index * 0.1) }}
              >
                <Counter 
                  from={0} 
                  to={stat.value} 
                  duration={2}
                  delay={0.5 + (index * 0.1)}
                  isInView={isInView}
                />
                <span>{stat.symbol}</span>
              </motion.div>
              
              <h3 className="text-xl font-semibold text-opority-navy mb-2">{stat.label}</h3>
              <p className="text-gray-600 text-sm">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

interface CounterProps {
  from: number;
  to: number;
  duration?: number;
  delay?: number;
  isInView: boolean;
}

const Counter = ({ from, to, duration = 2, delay = 0, isInView }: CounterProps) => {
  const nodeRef = useRef<HTMLSpanElement>(null);

  const formatValue = (value: number) => {
    return value >= 1000 ? (value / 1000).toFixed(1) + 'k' : value.toFixed(to % 1 === 0 ? 0 : 1);
  };

  const startCount = () => {
    if (!nodeRef.current) return;
    
    const node = nodeRef.current;
    const startTime = performance.now() + (delay * 1000);
    const endValue = to;
    const startValue = from;
    const totalChange = endValue - startValue;
    
    const step = (currentTime: number) => {
      if (currentTime < startTime) {
        node.textContent = formatValue(startValue);
        requestAnimationFrame(step);
        return;
      }
      
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / (duration * 1000), 1);
      const easedProgress = easeOutQuart(progress);
      const currentValue = startValue + (totalChange * easedProgress);
      
      node.textContent = formatValue(currentValue);
      
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };
    
    requestAnimationFrame(step);
  };

  // Easing function for smoother counter animation
  const easeOutQuart = (x: number): number => {
    return 1 - Math.pow(1 - x, 4);
  };

  // Start the counter when in view
  if (isInView) {
    setTimeout(() => {
      startCount();
    }, 100);
  }

  return <span ref={nodeRef}>{formatValue(from)}</span>;
};

export default StatisticsSection;
