
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight, ArrowRight } from "lucide-react";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -right-32 w-64 h-64 rounded-full bg-brand-purple/10 blur-3xl"></div>
        <div className="absolute top-1/2 -left-32 w-72 h-72 rounded-full bg-brand-blue/10 blur-3xl"></div>
        <div className="absolute -bottom-32 right-1/3 w-80 h-80 rounded-full bg-brand-accent/10 blur-3xl"></div>
      </div>

      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Chip/Badge */}
          <div 
            className={`inline-block glass-morphism px-4 py-1.5 rounded-full mb-6 text-white/80 text-sm mx-auto
              transform transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: '200ms' }}
          >
            <span className="inline-block w-2 h-2 rounded-full bg-brand-accent mr-2"></span>
            Revolutionizing Digital Workflow
          </div>

          {/* Main Heading */}
          <h1 
            className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-gradient text-balance
              transform transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: '400ms' }}
          >
            Transform Your Work With Premium Digital Tools
          </h1>

          {/* Description */}
          <p 
            className={`text-lg text-white/80 mb-8 max-w-2xl mx-auto text-balance
              transform transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: '600ms' }}
          >
            Streamline your workflow, enhance productivity, and unleash creativity with our comprehensive suite of digital solutions tailored for modern professionals.
          </p>

          {/* CTA Buttons */}
          <div 
            className={`flex flex-col sm:flex-row items-center justify-center gap-4 mb-16
              transform transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: '800ms' }}
          >
            <Button className="bg-brand-accent hover:bg-brand-accent/90 text-white rounded-full px-8 py-6 text-base font-medium group">
              Get Started Free
              <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="ghost" className="text-white hover:bg-white/5 rounded-full px-6 py-6 text-base font-medium group">
              View Demo
              <ArrowRight className="ml-2 h-4 w-4 opacity-70 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Preview Image */}
          <div 
            className={`relative w-full max-w-5xl mx-auto perspective
              transform transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: '1000ms' }}
          >
            <div className="glass-morphism rounded-xl overflow-hidden shadow-2xl border border-white/10 transform hover:translate-y-[-5px] transition-transform duration-500">
              <div className="h-10 bg-dark-200 flex items-center px-4 space-x-2 border-b border-white/5">
                <div className="w-3 h-3 rounded-full bg-white/20"></div>
                <div className="w-3 h-3 rounded-full bg-white/20"></div>
                <div className="w-3 h-3 rounded-full bg-white/20"></div>
                <div className="h-5 w-64 ml-4 rounded-md bg-white/10"></div>
              </div>
              <div className="bg-dark-300 aspect-video w-full flex items-center justify-center">
                <div className="text-white/30 text-lg">Dashboard Preview</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
