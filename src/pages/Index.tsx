
import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeatureSection from "@/components/FeatureSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  // Smooth reveal animations for sections as they come into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
            entry.target.classList.remove("opacity-0");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      }
    );

    const sections = document.querySelectorAll(".reveal-section");
    sections.forEach((section) => {
      section.classList.add("opacity-0");
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-dark-100 text-white">
      <Navbar />
      <main>
        <HeroSection />
        
        {/* Trusted By Section */}
        <section className="py-16 reveal-section">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-2xl font-bold mb-8">Trusted By Many</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
              <div className="flex items-center justify-center px-6 py-4">
                <img 
                  src="/partners/partner1.png"
                  alt="Partner 1" 
                  className="max-h-16 w-auto opacity-80 hover:opacity-100 transition-opacity" 
                />
              </div>
              <div className="flex items-center justify-center px-6 py-4">
                <img 
                  src="/partners/partner2.png"
                  alt="Partner 2" 
                  className="max-h-16 w-auto opacity-80 hover:opacity-100 transition-opacity" 
                />
              </div>
              <div className="flex items-center justify-center px-6 py-4">
                <img 
                  src="/partners/partner3.png"
                  alt="Partner 3" 
                  className="max-h-16 w-auto opacity-80 hover:opacity-100 transition-opacity" 
                />
              </div>
              <div className="flex items-center justify-center px-6 py-4">
                <img 
                  src="/partners/partner4.png"
                  alt="Partner 4" 
                  className="max-h-16 w-auto opacity-80 hover:opacity-100 transition-opacity" 
                />
              </div>
              <div className="flex items-center justify-center px-6 py-4">
                <img 
                  src="/partners/partner5.png"
                  alt="Partner 5" 
                  className="max-h-16 w-auto opacity-80 hover:opacity-100 transition-opacity" 
                />
              </div>
            </div>
          </div>
        </section>
        
        <div className="reveal-section">
          <FeatureSection />
        </div>
        
        {/* Process Section */}
        <section className="py-20 relative reveal-section">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 -right-32 w-64 h-64 rounded-full bg-indigo-500/5 blur-3xl"></div>
            <div className="absolute bottom-1/4 -left-32 w-72 h-72 rounded-full bg-indigo-600/5 blur-3xl"></div>
          </div>
          
          <div className="container relative">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block glass-morphism px-4 py-1.5 rounded-full mb-6 text-white/80 text-sm">
                  <span className="inline-block w-2 h-2 rounded-full bg-indigo-500 mr-2"></span>
                  Our Process
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient">From website to quote-ready leads</h2>
                <p className="text-white/70 mb-8">
                  Our process attracts more quote-ready leads for your home improvement business. We do the hard work, so you can enjoy the results.
                </p>
                <div className="space-y-6">
                  <div className="flex">
                    <div className="h-10 w-10 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400 font-bold mr-4 flex-shrink-0">1</div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">We identify your ideal customers</h3>
                      <p className="text-white/70">We research and target homeowners who need your specific services.</p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="h-10 w-10 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400 font-bold mr-4 flex-shrink-0">2</div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">We create engaging campaigns</h3>
                      <p className="text-white/70">Custom ads and content that showcase your services to the right audience.</p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="h-10 w-10 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400 font-bold mr-4 flex-shrink-0">3</div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">We qualify all leads</h3>
                      <p className="text-white/70">We ensure leads have the budget, need, and timeline that match your services.</p>
                    </div>
                  </div>
                </div>
                
                <Link to="/booking">
                  <Button 
                    className="mt-8 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full px-6 py-5 text-base font-medium group"
                  >
                    Book a Consultation
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
              
              <div className="relative">
                <div className="absolute -top-10 -left-10 w-64 h-64 rounded-full bg-indigo-500/5 blur-3xl"></div>
                <div className="glass-morphism rounded-2xl p-8 relative border border-indigo-500/10">
                  <div className="aspect-square bg-gradient-to-br from-indigo-400 to-indigo-600 rounded-xl mb-6 flex items-center justify-center">
                    <div className="text-6xl font-bold text-white">5+</div>
                  </div>
                  <h3 className="text-2xl font-bold mb-3">Quote-Ready Leads</h3>
                  <p className="text-white/70 mb-4">Within 30 days or you don't pay.</p>
                  <Link to="/booking" className="w-full">
                    <Button className="w-full bg-indigo-600 hover:bg-indigo-700 rounded-lg">
                      Book Now
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="py-16 reveal-section">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4 text-gradient">FAQ</h2>
              <p className="text-white/70 max-w-2xl mx-auto">
                Common questions about our lead generation services for home improvement businesses.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              <div className="glass-morphism p-6 rounded-xl border border-indigo-500/10">
                <h3 className="text-xl font-semibold mb-3">How quick can websites take?</h3>
                <p className="text-white/70">
                  Simpler sites are ready within 48 hours, and our more complex sites can take from 2 to 4 days to finish.
                </p>
              </div>
              
              <div className="glass-morphism p-6 rounded-xl border border-indigo-500/10">
                <h3 className="text-xl font-semibold mb-3">Is advertising worth it?</h3>
                <p className="text-white/70">
                  Advertising guarantees more quotes since we search for quote-ready leads that make your money back with plenty of profit.
                </p>
              </div>
              
              <div className="glass-morphism p-6 rounded-xl border border-indigo-500/10">
                <h3 className="text-xl font-semibold mb-3">What is the process?</h3>
                <p className="text-white/70">
                  We gather videos of your project, we test the ads and optimize the ads to get you more sales through the door.
                </p>
              </div>
              
              <div className="glass-morphism p-6 rounded-xl border border-indigo-500/10">
                <h3 className="text-xl font-semibold mb-3">Why do I need Video Design?</h3>
                <p className="text-white/70">
                  Video design helps increase sales by showcasing your services to a large audience.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <div className="reveal-section">
          <ContactSection />
        </div>
        
        {/* CTA Section */}
        <section className="py-16 reveal-section">
          <div className="container">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient">Ready for more leads?</h2>
              <Link to="/booking">
                <Button className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-full px-8 py-6 text-lg font-medium">
                  BOOK A CONSULTATION
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
