
import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Check } from "lucide-react";

const BookingPage = () => {
  useEffect(() => {
    // Load Calendly script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Clean up
      document.body.removeChild(script);
    };
  }, []);

  const benefits = [
    "Free 30-minute consultation",
    "Discuss your specific lead generation needs",
    "Learn about our proven strategies",
    "Get a customized action plan",
    "No obligation - just valuable insights"
  ];

  return (
    <div className="min-h-screen flex flex-col bg-dark-100 text-white">
      <Navbar />
      <main className="flex-grow pt-28 pb-16">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">Book a Consultation</h1>
            <p className="text-white/70 max-w-2xl mx-auto">
              Schedule a time to discuss how we can help generate quote-ready leads for your home improvement business.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass-morphism p-8 rounded-xl">
              <h2 className="text-2xl font-bold mb-6">Why Book a Call With Us?</h2>
              <p className="text-white/70 mb-6">
                In just 30 minutes, we'll show you exactly how our lead generation process works and how we can help your home improvement business get more qualified customers.
              </p>
              
              <ul className="space-y-4 mb-8">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-5 w-5 text-indigo-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
              
              <div className="p-4 bg-indigo-900/30 rounded-lg border border-indigo-500/20">
                <h3 className="text-xl font-semibold mb-2">Our Guarantee</h3>
                <p className="text-white/80">
                  We promise at least 5 quote-ready leads in your first 30 days, or you don't pay. No risk, guaranteed results.
                </p>
              </div>
            </div>
            
            <div className="glass-morphism p-2 rounded-xl">
              {/* Calendly inline widget */}
              <div 
                className="calendly-inline-widget" 
                data-url="https://calendly.com/opority/30min" 
                style={{ minWidth: '320px', height: '700px' }}
              ></div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BookingPage;
