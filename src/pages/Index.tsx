
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import CtaSection from '@/components/sections/CtaSection';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import StatisticsSection from '@/components/sections/StatisticsSection';
import TestimonialSlider from '@/components/sections/TestimonialSlider';
import FloatingBanner from '@/components/ui/FloatingBanner';
import { ArrowRight, BarChart, CheckCircle, Shield, Users, Target, TrendingUp } from 'lucide-react';
import AnimatedButton from '@/components/ui/AnimatedButton';

const Index = () => {
  useEffect(() => {
    document.title = 'Opority - Home Improvement Lead Generation';
  }, []);

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      }
    }
  };

  const itemVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <>
      <Navbar />
      <main>
        <Hero />

        {/* Statistics Section */}
        <StatisticsSection />

        {/* Why Choose Us - Updated to timeline style */}
        <section className="py-20 bg-gray-50">
          <div className="container-custom">
            <motion.div 
              className="text-center max-w-3xl mx-auto mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="inline-block px-4 py-1.5 bg-opority-blue/10 text-opority-blue rounded-full text-sm font-medium mb-6">
                Why Choose Us
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-opority-navy mb-6">
                Expertise in Home Improvement Marketing
              </h2>
              <p className="text-lg text-gray-600">
                We understand the unique challenges that home improvement businesses face when it comes to digital marketing.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true, amount: 0.4 }}
                className="relative"
              >
                <div className="relative z-10 overflow-hidden rounded-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1564182842519-8a3b2af3e228" 
                    alt="Marketing strategy meeting" 
                    className="w-full h-auto object-cover rounded-xl shadow-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-opority-navy/30 to-transparent"></div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-opority-blue/10 rounded-full z-0"></div>
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-opority-blue/20 rounded-full z-0"></div>
              </motion.div>
              
              <div className="space-y-10">
                {[
                  {
                    icon: Target,
                    title: 'Targeted Marketing',
                    description: 'We focus on reaching homeowners actively searching for your services, ensuring higher conversion rates.'
                  },
                  {
                    icon: TrendingUp,
                    title: 'Measurable Results',
                    description: 'Track your ROI with detailed analytics and reporting, so you know exactly how your marketing budget is performing.'
                  },
                  {
                    icon: Users,
                    title: 'Industry Expertise',
                    description: 'We specialize in the home improvement industry, understanding the unique needs and challenges of your business.'
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    viewport={{ once: true, amount: 0.3 }}
                    className="flex gap-5"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-opority-blue/10 flex items-center justify-center text-opority-blue">
                      <item.icon size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-opority-navy mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  <AnimatedButton 
                    to="/services" 
                    variant="primary"
                  >
                    Learn More About Our Approach
                  </AnimatedButton>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Services - This will be updated by updating the Services component file */}
        <Services />

        {/* Process Section - Changed to step-by-step visualization */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-block px-4 py-1.5 bg-opority-blue/10 text-opority-blue rounded-full text-sm font-medium mb-6">
                Our Process
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-opority-navy mb-6">
                How We Generate Quality Leads For You
              </h2>
              <p className="text-lg text-gray-600">
                Our proven method has helped hundreds of home improvement businesses grow and scale efficiently.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-12">
              {[
                {
                  number: '01',
                  title: 'Strategy Development',
                  description: 'We develop a customized marketing strategy tailored specifically to your home improvement business.',
                  color: 'from-blue-500 to-blue-600'
                },
                {
                  number: '02',
                  title: 'Campaign Implementation',
                  description: 'Our team creates and implements high-converting campaigns across multiple channels.',
                  color: 'from-indigo-500 to-indigo-600'
                },
                {
                  number: '03',
                  title: 'Lead Generation',
                  description: 'We generate quality leads using proven methods that attract potential customers actively seeking your services.',
                  color: 'from-violet-500 to-violet-600'
                },
                {
                  number: '04',
                  title: 'Optimization & Scaling',
                  description: 'We continuously optimize your campaigns, scaling what works to maximize your ROI.',
                  color: 'from-purple-500 to-purple-600'
                }
              ].map((step, index) => (
                <motion.div 
                  key={index}
                  className="lg:col-span-3 relative"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <div className="h-full flex flex-col">
                    {/* Number */}
                    <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${step.color} text-white flex items-center justify-center text-xl font-bold mb-4 shadow-lg`}>
                      {step.number}
                    </div>
                    
                    {/* Content */}
                    <div className="flex-grow">
                      <h3 className="text-xl font-semibold text-opority-navy mb-3">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                    
                    {/* Connecting line */}
                    {index < 3 && (
                      <div className="hidden lg:block absolute top-7 left-14 w-[calc(100%-3.5rem)] h-0.5 bg-gradient-to-r from-gray-300 to-gray-200"></div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <AnimatedButton to="/services" variant="outline">
                Learn More About Our Process
              </AnimatedButton>
            </div>
          </div>
        </section>

        {/* Testimonials Slider */}
        <TestimonialSlider />

        {/* CTA Section */}
        <CtaSection
          title="Ready to Generate More Quality Leads?"
          subtitle="Schedule a free strategy call with our team to discuss how we can help your home improvement business grow."
          buttonText="Book a Free Call Now"
          buttonLink="/booking"
        />
        
        <Footer />
      </main>

      {/* Floating Banner */}
      <FloatingBanner 
        message="Limited time offer: Get a free website audit when you book a call!"
        buttonText="Learn More"
        buttonLink="/booking"
        delay={5}
      />
    </>
  );
};

export default Index;
