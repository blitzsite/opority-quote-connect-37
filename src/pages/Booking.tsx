
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { CheckCircle, Phone, Calendar, Mail } from 'lucide-react';

// We will use Calendly embed for booking
const Booking = () => {
  const [isCalendlyLoaded, setIsCalendlyLoaded] = useState(false);

  useEffect(() => {
    document.title = 'Book a Call | Opority';
    
    // Load Calendly script if not already loaded
    if (!document.getElementById('calendly-script')) {
      const script = document.createElement('script');
      script.id = 'calendly-script';
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      script.onload = () => setIsCalendlyLoaded(true);
      document.head.appendChild(script);
    } else {
      setIsCalendlyLoaded(true);
    }

    return () => {
      // Optional cleanup if needed
    };
  }, []);

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
                Let's Talk
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-opority-navy mb-6">
                Book Your Free Strategy Call
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Schedule a 30-minute call with our team to discuss how we can help your home improvement business generate more quality leads.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Booking Section */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Left Side - Benefits */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-8"
              >
                <div>
                  <h2 className="text-3xl font-bold text-opority-navy mb-6">
                    What to Expect on Your Call
                  </h2>
                  <p className="text-lg text-gray-600 mb-8">
                    Your free strategy call is designed to understand your business needs and provide valuable insights, even if you decide not to work with us.
                  </p>
                </div>

                <div className="space-y-6">
                  {[
                    {
                      icon: CheckCircle,
                      title: 'Business Analysis',
                      description: 'We'll discuss your current marketing efforts and identify areas for improvement.'
                    },
                    {
                      icon: CheckCircle,
                      title: 'Custom Strategy Overview',
                      description: 'Get a high-level view of how our team would approach your specific challenges.'
                    },
                    {
                      icon: CheckCircle,
                      title: 'ROI Projection',
                      description: 'Understand the potential return on investment our services could generate for your business.'
                    },
                    {
                      icon: CheckCircle,
                      title: 'Q&A Session',
                      description: 'Get answers to all your questions about our services and approach.'
                    }
                  ].map((item, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
                      className="flex items-start"
                    >
                      <div className="mt-1 mr-4 bg-opority-blue/10 text-opority-blue p-2 rounded-lg">
                        <item.icon size={20} />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-opority-navy mb-2">{item.title}</h3>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-opority-navy mb-4">
                    Prefer to Contact Us Directly?
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Phone className="mr-3 text-opority-blue" size={20} />
                      <a href="tel:+1234567890" className="text-gray-600 hover:text-opority-blue transition-colors">
                        +1 (234) 567-890
                      </a>
                    </div>
                    <div className="flex items-center">
                      <Mail className="mr-3 text-opority-blue" size={20} />
                      <a href="mailto:hello@opority.com" className="text-gray-600 hover:text-opority-blue transition-colors">
                        hello@opority.com
                      </a>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="mr-3 text-opority-blue" size={20} />
                      <span className="text-gray-600">
                        Mon-Fri: 9am - 5pm EST
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Right Side - Calendly Embed */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white rounded-xl shadow-card overflow-hidden"
                style={{ height: '650px' }}
              >
                <div 
                  className="calendly-inline-widget w-full h-full"
                  data-url="https://calendly.com/d/acme-corp/30min"
                  style={{ minWidth: '320px' }}
                ></div>
                {!isCalendlyLoaded && (
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-opority-blue"></div>
                  </div>
                )}
              </motion.div>
            </div>
          </div>
        </section>
        
        <Footer />
      </main>
    </>
  );
};

export default Booking;
