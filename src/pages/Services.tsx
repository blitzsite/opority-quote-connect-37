
import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { 
  Globe, 
  TrendingUp, 
  Video, 
  BadgeCheck, 
} from "lucide-react";
import { Link } from "react-router-dom";

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
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img 
              src="/lovable-uploads/cd50f0d2-beb7-4133-b9b9-b0a56bb290e6.png" 
              alt="Background" 
              className="w-full h-full object-cover" 
            />
            <div className="absolute inset-0 bg-black/60"></div>
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                    <Link to="/booking">
                      <Button className="bg-brand-accent hover:bg-brand-accent/90 text-white rounded-full px-8 py-6 text-base font-medium">
                        Get Started Today
                      </Button>
                    </Link>
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
