
import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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

  return (
    <div className="min-h-screen flex flex-col bg-dark-100 text-white">
      <Navbar />
      <main className="flex-grow pt-28 pb-16">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">Book a Consultation</h1>
            <p className="text-white/70 max-w-2xl mx-auto">
              Schedule a time to discuss how we can help generate quote-ready leads for your home improvement business.
            </p>
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
      </main>
      <Footer />
    </div>
  );
};

export default BookingPage;
