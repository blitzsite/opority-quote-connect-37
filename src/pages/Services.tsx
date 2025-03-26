
import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { 
  Globe, 
  TrendingUp, 
  Video, 
  Phone, 
  BadgeCheck, 
  Zap, 
  BarChart4,
  Clock 
} from "lucide-react";

const services = [
  {
    icon: <Globe className="h-8 w-8 text-brand-accent" />,
    title: "Website Development",
    description: "Custom websites designed to convert visitors into leads for your home improvement business.",
    features: [
      "Mobile-optimized design",
      "Lead capture forms",
      "SEO-friendly structure",
      "Fast loading speeds"
    ]
  },
  {
    icon: <TrendingUp className="h-8 w-8 text-brand-accent" />,
    title: "Digital Marketing",
    description: "Targeted advertising campaigns that attract homeowners looking for your services.",
    features: [
      "Google Ads management",
      "Facebook & Instagram campaigns",
      "Retargeting strategies",
      "ROI tracking"
    ]
  },
  {
    icon: <Video className="h-8 w-8 text-brand-accent" />,
    title: "Video Production",
    description: "Engaging video content that showcases your work and builds trust with potential customers.",
    features: [
      "Project testimonials",
      "Service explanations",
      "Before & after reveals",
      "Social media clips"
    ]
  },
  {
    icon: <Phone className="h-8 w-8 text-brand-accent" />,
    title: "Lead Qualification",
    description: "We screen all leads to ensure you're only spending time on serious, ready-to-quote prospects.",
    features: [
      "Initial contact handling",
      "Budget verification",
      "Project timeline confirmation",
      "Service matching"
    ]
  }
];

const ServicesPage = () => {
  // Smooth reveal animations for sections
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
        {/* Hero Section */}
        <section className="pt-32 pb-20 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-32 -right-32 w-64 h-64 rounded-full bg-brand-purple/10 blur-3xl"></div>
            <div className="absolute bottom-0 -left-32 w-72 h-72 rounded-full bg-brand-blue/10 blur-3xl"></div>
          </div>
          
          <div className="container relative z-10">
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-block glass-morphism px-4 py-1.5 rounded-full mb-6 text-white/80 text-sm mx-auto">
                <span className="inline-block w-2 h-2 rounded-full bg-brand-accent mr-2"></span>
                Our Services
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">Comprehensive Lead Generation for Home Improvement Pros</h1>
              <p className="text-lg text-white/70 mb-10 text-balance">
                We offer a complete suite of services designed to attract, engage, and convert homeowners looking for quality improvement services.
              </p>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 relative reveal-section">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div key={index} className="glass-morphism rounded-2xl p-8 transition-transform hover:translate-y-[-5px] duration-300">
                  <div className="h-16 w-16 rounded-xl neo-morphism flex items-center justify-center mb-6">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-white/70 mb-6">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <BadgeCheck className="h-5 w-5 text-brand-accent mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-white/80">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-16 reveal-section">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">How We Generate Quote-Ready Leads</h2>
              <p className="text-white/70 max-w-2xl mx-auto">
                Our proven process attracts the right homeowners and converts them into qualified leads for your business.
              </p>
            </div>

            <div className="relative">
              {/* Timeline connector */}
              <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-brand-accent/30 transform -translate-x-1/2 hidden md:block"></div>
              
              <div className="space-y-12 relative">
                {/* Step 1 */}
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-12 text-right mb-6 md:mb-0">
                    <h3 className="text-xl font-semibold mb-2">Targeted Marketing Campaigns</h3>
                    <p className="text-white/70">
                      We run highly targeted ads and content campaigns to attract homeowners actively looking for your services.
                    </p>
                  </div>
                  <div className="h-12 w-12 rounded-full bg-brand-accent flex items-center justify-center z-10 mb-6 md:mb-0">
                    <Zap className="h-6 w-6 text-white" />
                  </div>
                  <div className="md:w-1/2 md:pl-12"></div>
                </div>
                
                {/* Step 2 */}
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-12"></div>
                  <div className="h-12 w-12 rounded-full bg-brand-accent flex items-center justify-center z-10 mb-6 md:mb-0">
                    <BarChart4 className="h-6 w-6 text-white" />
                  </div>
                  <div className="md:w-1/2 md:pl-12 text-left">
                    <h3 className="text-xl font-semibold mb-2">Lead Qualification & Screening</h3>
                    <p className="text-white/70">
                      We verify project details, budget, and timeframe to ensure leads are ready for quotes.
                    </p>
                  </div>
                </div>
                
                {/* Step 3 */}
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-12 text-right mb-6 md:mb-0">
                    <h3 className="text-xl font-semibold mb-2">Seamless Delivery</h3>
                    <p className="text-white/70">
                      Qualified leads are delivered directly to you through your preferred method - email, CRM, or phone.
                    </p>
                  </div>
                  <div className="h-12 w-12 rounded-full bg-brand-accent flex items-center justify-center z-10 mb-6 md:mb-0">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div className="md:w-1/2 md:pl-12"></div>
                </div>
                
                {/* Step 4 */}
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-12"></div>
                  <div className="h-12 w-12 rounded-full bg-brand-accent flex items-center justify-center z-10 mb-6 md:mb-0">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div className="md:w-1/2 md:pl-12 text-left">
                    <h3 className="text-xl font-semibold mb-2">Continuous Optimization</h3>
                    <p className="text-white/70">
                      We track results and continually refine our approach to improve lead quality and conversion rates.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Guarantee Section */}
        <section className="py-16 reveal-section">
          <div className="container">
            <div className="glass-morphism rounded-2xl overflow-hidden">
              <div className="grid md:grid-cols-2">
                <div className="p-8 md:p-12 flex items-center">
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gradient">Our Lead Guarantee</h2>
                    <p className="text-white/70 mb-6">
                      We're so confident in our ability to deliver quality leads that we offer a simple guarantee: Get at least 5 quote-ready home improvement leads within 30 days or you don't pay.
                    </p>
                    <Button className="bg-brand-accent hover:bg-brand-accent/90 text-white rounded-full px-8 py-6 text-base font-medium">
                      Get Started Today
                    </Button>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-brand-purple/20 to-brand-accent/20 p-8 md:p-12 flex items-center justify-center">
                  <div className="text-center">
                    <div className="h-32 w-32 mx-auto bg-brand-accent/20 rounded-full flex items-center justify-center mb-6">
                      <div className="h-24 w-24 bg-brand-accent/30 rounded-full flex items-center justify-center">
                        <div className="text-5xl font-bold text-brand-accent">5+</div>
                      </div>
                    </div>
                    <h3 className="text-2xl font-semibold">Guaranteed Leads</h3>
                    <p className="text-white/70 mt-2">in 30 days or you don't pay</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ServicesPage;
