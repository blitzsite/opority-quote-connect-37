
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CtaSection from '@/components/sections/CtaSection';
import AnimatedButton from '@/components/ui/AnimatedButton';
import { CheckCircle, Laptop, Facebook, Video, Edit, ArrowRight } from 'lucide-react';

const services = [
  {
    id: 'website',
    title: 'Website Development',
    icon: Laptop,
    description: 'Custom websites designed to convert visitors into leads for your home improvement business.',
    color: 'blue',
    features: [
      'Responsive design for all devices',
      'SEO optimization for local searches',
      'Lead capture forms and CTAs',
      'Portfolio showcases of your work',
      'Customer testimonial integration',
      'Fast loading speeds for better conversions'
    ],
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b'
  },
  {
    id: 'facebook',
    title: 'Facebook Ads',
    icon: Facebook,
    description: 'Targeted Facebook ad campaigns that reach homeowners actively looking for your services.',
    color: 'indigo',
    features: [
      'Custom audience targeting',
      'Compelling ad creatives',
      'A/B testing for optimal performance',
      'Conversion tracking and analytics',
      'Campaign optimization for higher ROI',
      'Retargeting campaigns for interested prospects'
    ],
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c'
  },
  {
    id: 'video',
    title: 'Video Content',
    icon: Video,
    description: 'Engaging video content that showcases your work and builds trust with potential customers.',
    color: 'purple',
    features: [
      'Professional videography',
      'Project showcase videos',
      'Customer testimonial interviews',
      'Educational content about your services',
      'Social media optimized formats',
      'Brand storytelling videos'
    ],
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6'
  },
  {
    id: 'editing',
    title: 'Video Editing',
    icon: Edit,
    description: 'Professional video editing services to transform your raw footage into polished marketing assets.',
    color: 'pink',
    features: [
      'Color grading and correction',
      'Professional transitions and effects',
      'Text and graphic overlays',
      'Music and sound design',
      'Call-to-action integration',
      'Multi-platform formatting'
    ],
    image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81'
  }
];

const Services = () => {
  useEffect(() => {
    document.title = 'Our Services | Opority';
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <>
      <Navbar />
      <main>
        {/* Page Header */}
        <section className="pt-32 pb-16 bg-gradient-to-b from-white to-gray-50">
          <div className="container-custom">
            <motion.div 
              className="text-center max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-block px-4 py-1.5 bg-opority-blue/10 text-opority-blue rounded-full text-sm font-medium mb-6">
                Our Services
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-opority-navy mb-6">
                Comprehensive Digital Marketing Solutions
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                We provide end-to-end digital marketing services designed specifically for home improvement businesses.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Service Details */}
        {services.map((service, index) => (
          <section 
            key={service.id} 
            id={service.id}
            className={`py-20 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
          >
            <div className="container-custom">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true, amount: 0.3 }}
                  className={`order-2 ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}
                >
                  <div className={`bg-${service.color}-500/10 text-${service.color}-500 p-2 w-14 h-14 rounded-lg flex items-center justify-center mb-6`}>
                    <service.icon size={24} />
                  </div>
                  <h2 className="text-3xl font-bold text-opority-navy mb-4">{service.title}</h2>
                  <p className="text-lg text-gray-600 mb-6">{service.description}</p>
                  
                  <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    className="space-y-3 mb-8"
                  >
                    {service.features.map((feature, i) => (
                      <motion.div key={i} variants={itemVariants} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-opority-blue mt-1 mr-3 flex-shrink-0" />
                        <p className="text-gray-700">{feature}</p>
                      </motion.div>
                    ))}
                  </motion.div>
                  
                  <AnimatedButton to="/booking" variant="primary">
                    Get Started
                  </AnimatedButton>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true, amount: 0.3 }}
                  className={`order-1 ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}
                >
                  <div className="rounded-xl overflow-hidden shadow-lg">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-auto transition-transform duration-700 hover:scale-105"
                    />
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
        ))}

        {/* Results Section */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-block px-4 py-1.5 bg-opority-blue/10 text-opority-blue rounded-full text-sm font-medium mb-6">
                Our Results
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-opority-navy mb-6">
                Results That Speak For Themselves
              </h2>
              <p className="text-lg text-gray-600">
                Our clients see significant improvements in lead generation and business growth after working with us.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { metric: '300%', description: 'Average increase in quality leads for clients' },
                { metric: '250+', description: 'Home improvement businesses helped' },
                { metric: '95%', description: 'Client retention rate' }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  className="bg-opority-navy rounded-xl p-8 text-center text-white"
                >
                  <p className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                    {stat.metric}
                  </p>
                  <p className="text-gray-200">{stat.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <CtaSection
          title="Ready to Transform Your Lead Generation?"
          subtitle="Book a free call to discuss your specific needs and how our services can help your business grow."
          buttonText="Schedule Your Free Call"
          buttonLink="/booking"
          variant="dark"
        />
        
        <Footer />
      </main>
    </>
  );
};

export default Services;
