
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Laptop, Facebook, Video, Edit, Settings, LineChart, Megaphone } from 'lucide-react';
import AnimatedButton from '@/components/ui/AnimatedButton';

const features = [
  {
    title: 'Website Development',
    description: 'Custom website design and development to showcase your home improvement services and convert visitors into leads.',
    icon: Laptop,
    color: 'bg-blue-500',
    link: '/services#websites'
  },
  {
    title: 'Facebook Ads',
    description: 'Targeted Facebook advertising campaigns that reach homeowners actively looking for your specific services.',
    icon: Facebook,
    color: 'bg-indigo-500',
    link: '/services#facebook'
  },
  {
    title: 'Video Content',
    description: 'Engaging video content that showcases your work, builds trust, and increases conversion rates.',
    icon: Video,
    color: 'bg-violet-500',
    link: '/services#video'
  },
  {
    title: 'Marketing Strategy',
    description: 'Comprehensive digital marketing strategy tailored to your home improvement business goals.',
    icon: Settings,
    color: 'bg-emerald-500',
    link: '/services#strategy'
  },
  {
    title: 'Performance Tracking',
    description: 'Advanced analytics and reporting to measure the effectiveness of your marketing campaigns.',
    icon: LineChart,
    color: 'bg-amber-500',
    link: '/services#analytics'
  },
  {
    title: 'Brand Development',
    description: 'Professional branding services to establish your home improvement business as a trusted choice.',
    icon: Megaphone,
    color: 'bg-pink-500',
    link: '/services#branding'
  }
];

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  return (
    <section className="py-20 bg-white" id="services" ref={ref}>
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-1.5 bg-opority-blue/10 text-opority-blue rounded-full text-sm font-medium mb-6">
            Our Services
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-opority-navy mb-6">
            Comprehensive Digital Marketing for Home Improvement Businesses
          </h2>
          <p className="text-lg text-gray-600">
            We provide end-to-end digital marketing solutions designed specifically for home improvement contractors.
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="flex items-start gap-5">
                <div className={`${feature.color} w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-md flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon size={24} />
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-opority-navy mb-3 group-hover:text-opority-blue transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {feature.description}
                  </p>
                  <Link 
                    to={feature.link}
                    className="inline-flex items-center text-opority-blue font-medium hover:underline transition-all gap-1 group-hover:gap-2"
                  >
                    Learn more
                    <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
              
              {/* Decorative gradient line */}
              <div className="absolute -bottom-6 left-0 w-0 h-0.5 bg-gradient-to-r from-opority-blue/80 to-transparent group-hover:w-full transition-all duration-500"></div>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="mt-16 text-center">
          <AnimatedButton to="/services" variant="primary" size="lg">
            Explore All Our Services
          </AnimatedButton>
        </div>
      </div>
    </section>
  );
};

export default Services;
