
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import CtaSection from '@/components/sections/CtaSection';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { ArrowRight, BarChart, CheckCircle, Shield } from 'lucide-react';
import AnimatedButton from '@/components/ui/AnimatedButton';

const Index = () => {
  useEffect(() => {
    document.title = 'Opority - Home Improvement Lead Generation';
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Hero />

        {/* Why Choose Us */}
        <section className="py-20 bg-gray-50">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-block px-4 py-1.5 bg-opority-blue/10 text-opority-blue rounded-full text-sm font-medium mb-6">
                Why Choose Us
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-opority-navy mb-6">
                Expertise in Home Improvement Marketing
              </h2>
              <p className="text-lg text-gray-600">
                We understand the unique challenges that home improvement businesses face when it comes to digital marketing.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: BarChart,
                  title: 'Measurable Results',
                  description: 'Track your ROI with detailed analytics and reporting, so you know exactly how your marketing budget is performing.'
                },
                {
                  icon: CheckCircle,
                  title: 'Industry Expertise',
                  description: 'We specialize in the home improvement industry, understanding the unique needs and challenges of your business.'
                },
                {
                  icon: Shield,
                  title: 'Quality Guarantee',
                  description: 'We focus on quality over quantity, ensuring you receive leads that are ready to request quotes.'
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  className="bg-white rounded-xl p-8 shadow-card hover:shadow-lg transition-all duration-300 text-center"
                >
                  <div className="bg-opority-blue/10 w-16 h-16 rounded-full flex items-center justify-center text-opority-blue mx-auto mb-6">
                    <item.icon size={28} />
                  </div>
                  <h3 className="text-xl font-semibold text-opority-navy mb-4">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <Services />

        {/* Process Section */}
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

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c" 
                  alt="Team working on digital marketing" 
                  className="rounded-xl shadow-lg w-full h-auto"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true, amount: 0.3 }}
                className="space-y-6"
              >
                {[
                  {
                    number: '01',
                    title: 'Strategy Development',
                    description: 'We develop a customized marketing strategy tailored specifically to your home improvement business.'
                  },
                  {
                    number: '02',
                    title: 'Campaign Implementation',
                    description: 'Our team creates and implements high-converting campaigns across multiple channels.'
                  },
                  {
                    number: '03',
                    title: 'Lead Generation',
                    description: 'We generate quality leads using proven methods that attract potential customers actively seeking your services.'
                  },
                  {
                    number: '04',
                    title: 'Optimization & Scaling',
                    description: 'We continuously optimize your campaigns, scaling what works to maximize your ROI.'
                  }
                ].map((step, index) => (
                  <div key={index} className="flex gap-6">
                    <div className="flex-shrink-0 bg-opority-blue/10 text-opority-blue font-bold rounded-full w-10 h-10 flex items-center justify-center">
                      {step.number}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-opority-navy mb-2">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                ))}

                <div className="pt-4">
                  <AnimatedButton to="/services" variant="primary">
                    Learn More About Our Process
                  </AnimatedButton>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-gray-50">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-block px-4 py-1.5 bg-opority-blue/10 text-opority-blue rounded-full text-sm font-medium mb-6">
                Client Success Stories
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-opority-navy mb-6">
                What Our Clients Say
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  quote: "Opority transformed our online presence. We've seen a 300% increase in qualified leads since we started working with them.",
                  name: "Michael Johnson",
                  company: "Johnson Roofing",
                  rating: 5
                },
                {
                  quote: "Their Facebook ad campaigns have been a game-changer for our kitchen remodeling business. We're now booked 3 months in advance.",
                  name: "Sarah Williams",
                  company: "Elite Kitchen Designs",
                  rating: 5
                },
                {
                  quote: "The team at Opority understood our business and delivered results. Our website conversion rate doubled within 2 months.",
                  name: "Robert Anderson",
                  company: "Anderson Windows & Doors",
                  rating: 5
                }
              ].map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  className="bg-white p-8 rounded-xl shadow-card hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-yellow-400">
                        <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-600 italic mb-6">"{testimonial.quote}"</p>
                  <div>
                    <p className="font-semibold text-opority-navy">{testimonial.name}</p>
                    <p className="text-gray-500 text-sm">{testimonial.company}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <CtaSection
          title="Ready to Generate More Quality Leads?"
          subtitle="Schedule a free strategy call with our team to discuss how we can help your home improvement business grow."
          buttonText="Book a Free Call Now"
          buttonLink="/booking"
        />
        
        <Footer />
      </main>
    </>
  );
};

export default Index;
