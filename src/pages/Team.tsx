
import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Users, Award, Star, ThumbsUp } from "lucide-react";

// Team member data
const teamMembers = [
  {
    name: "Arnold",
    role: "CEO & Founder",
    image: "/team/arnold.png",
  },
  {
    name: "Ognjen",
    role: "Facebook Manager",
    image: "/team/ognjen.png",
  },
  {
    name: "Mehadi",
    role: "Web designer & Marketer",
    image: "/team/mehadi.png",
  },
  {
    name: "David",
    role: "Appointment Setter",
    image: "/team/david.png",
  },
  {
    name: "Mike",
    role: "Appointment Setter",
    image: "/team/mike.png",
  },
  {
    name: "Farhan",
    role: "Appointment Setter",
    image: "/team/farhan.png",
  }
];

const TeamPage = () => {
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
                Our Expert Team
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">Meet the Specialists Behind Your Leads</h1>
              <p className="text-lg text-white/70 mb-10 text-balance">
                Our team of dedicated professionals is committed to generating high-quality, quote-ready leads for your home improvement business.
              </p>
            </div>
          </div>
        </section>

        
        {/* Team Members Grid */}
        <section className="py-16 reveal-section">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="glass-morphism rounded-2xl overflow-hidden group">
                  <div className="h-64 overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                    <p className="text-brand-accent mb-3">{member.role}</p>
                    <p className="text-white/70">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Join Our Team Section */}
        <section className="py-16 reveal-section">
          <div className="container">
            <div className="glass-morphism rounded-2xl p-8 md:p-12 text-center max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gradient">Join Our Growing Team</h2>
              <p className="text-white/70 mb-8 max-w-2xl mx-auto">
                We're always looking for talented individuals passionate about marketing, lead generation, and the home improvement industry.
              </p>
              <a href="#contact" className="inline-block bg-brand-accent hover:bg-brand-accent/90 text-white rounded-full px-8 py-3 text-base font-medium transition-colors">
                View Open Positions
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default TeamPage;
