
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { TrendingUp, Users, Award, BarChart3 } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const stats = [
  {
    value: 300,
    symbol: '+',
    label: 'Happy Clients',
    icon: Users,
    color: 'bg-blue-500/10 text-blue-500'
  },
  {
    value: 15000,
    symbol: '+',
    label: 'Qualified Leads',
    icon: TrendingUp,
    color: 'bg-green-500/10 text-green-500'
  },
  {
    value: 94,
    symbol: '%',
    label: 'Client Retention',
    icon: Award,
    color: 'bg-purple-500/10 text-purple-500'
  },
  {
    value: 3.2,
    symbol: 'x',
    label: 'Average ROI',
    icon: BarChart3,
    color: 'bg-amber-500/10 text-amber-500'
  }
];

const StatisticsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const isMobile = useIsMobile();

  return (
    <section className="py-12 md:py-16 bg-white" ref={ref}>
      <div className="container-custom">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-opority-navy mb-3">
            Our Impact in Numbers
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
              className="bg-white rounded-xl p-4 md:p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 text-center flex flex-col items-center"
            >
              <div className={`${stat.color} w-12 h-12 rounded-full flex items-center justify-center mb-4`}>
                <stat.icon size={24} />
              </div>
              
              <div className="flex items-center justify-center space-x-1 mb-1">
                <Counter 
                  from={0} 
                  to={stat.value} 
                  duration={2}
                  delay={0.5 + (index * 0.1)}
                  isInView={isInView}
                  className="text-2xl md:text-3xl font-bold text-opority-navy"
                />
                <span className="text-2xl md:text-3xl font-bold text-opority-navy">{stat.symbol}</span>
              </div>
              
              <h3 className="text-base md:text-lg font-medium text-opority-navy">{stat.label}</h3>
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
  className?: string;
}

const Counter = ({ from, to, duration = 2, delay = 0, isInView, className }: CounterProps) => {
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

  return <span ref={nodeRef} className={className}>{formatValue(from)}</span>;
};

export default StatisticsSection;
