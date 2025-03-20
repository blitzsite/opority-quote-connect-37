
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { Laptop, Facebook, Video, Edit } from 'lucide-react';

const features = [
  {
    title: 'Website Development',
    description: 'Custom website design and development to showcase your home improvement services and convert visitors into leads.',
    icon: Laptop,
    color: 'bg-blue-500'
  },
  {
    title: 'Facebook Ads',
    description: 'Targeted Facebook advertising campaigns that reach homeowners actively looking for your specific services.',
    icon: Facebook,
    color: 'bg-indigo-500'
  },
  {
    title: 'Video Content',
    description: 'Engaging video content that showcases your work, builds trust, and increases conversion rates.',
    icon: Video,
    color: 'bg-purple-500'
  },
  {
    title: 'Video Editing',
    description: 'Professional video editing services to transform your raw footage into polished marketing assets.',
    icon: Edit,
    color: 'bg-pink-500'
  }
];

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="bg-white rounded-xl p-6 shadow-card hover:shadow-lg transition-all duration-300 border border-gray-100"
            >
              <div className={`${feature.color} w-12 h-12 rounded-lg flex items-center justify-center text-white mb-4`}>
                <feature.icon size={24} />
              </div>
              <h3 className="text-xl font-semibold text-opority-navy mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {feature.description}
              </p>
              <Link 
                to="/services" 
                className="text-opority-blue font-medium inline-flex items-center hover:text-opority-blue-dark transition-colors"
              >
                Learn more
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-4 w-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
