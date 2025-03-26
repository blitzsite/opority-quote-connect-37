
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center pt-32 pb-20 md:pt-40 md:pb-24 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/lovable-uploads/1a72c6c8-1bbe-4fff-99df-38b3d3589976.png" 
          alt="Background" 
          className="w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Chip/Badge */}
          <div 
            className={`inline-block glass-morphism px-4 py-1.5 rounded-full mb-6 text-white/80 text-sm mx-auto
              transform transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: '200ms' }}
          >
            <span className="inline-block w-2 h-2 rounded-full bg-indigo-500 mr-2"></span>
            Home Improvement Lead Generation
          </div>

          {/* Main Heading */}
          <h1 
            className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-balance
              transform transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: '400ms' }}
          >
            We Generate <span className="text-indigo-400">Quote-Ready</span> Home Improvement <span className="text-indigo-400">Leads For You.</span>
          </h1>

          {/* Description */}
          <p 
            className={`text-lg text-white/80 mb-8 max-w-2xl mx-auto text-balance
              transform transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: '600ms' }}
          >
            No heavy lifting required. We do the hard work, so you can focus on growing your home improvement business with qualified leads ready to convert.
          </p>

          {/* CTA Buttons */}
          <div 
            className={`flex flex-col sm:flex-row items-center justify-center gap-4
              transform transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: '800ms' }}
          >
            <Link to="/booking">
              <Button className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-full px-8 py-6 text-base font-medium group">
                Book a Consultation
                <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/services">
              <Button variant="ghost" className="text-white hover:bg-white/5 rounded-full px-6 py-6 text-base font-medium group">
                Learn How It Works
                <ArrowRight className="ml-2 h-4 w-4 opacity-70 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
