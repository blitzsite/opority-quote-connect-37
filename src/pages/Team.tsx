
import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Team member data with new names, roles and images
const teamMembers = [
  {
    name: "Arnold",
    role: "Founder & CEO",
    image: "/lovable-uploads/57a6075e-cf29-4f44-9901-e9996ff9bfe7.png",
  },
  {
    name: "Ognjen",
    role: "Facebook Manager",
    image: "/lovable-uploads/2fc2db0b-93de-4a9e-ac58-589bd59d03c1.png",
  },
  {
    name: "Mehadi",
    role: "Website Designer & Marketer",
    image: "/lovable-uploads/3b7f2e3c-e8a2-4a44-a742-1cd57a8f722f.png",
  },
  {
    name: "Ken",
    role: "Sales Representative",
    image: "/lovable-uploads/71661749-5e59-455e-8679-8f69a760d99e.png",
  },
  {
    name: "David",
    role: "Appointment Setter",
    image: "/lovable-uploads/ec929c3f-415a-4656-9399-8dfa4f18c9fc.png",
  },
  {
    name: "Mike",
    role: "Appointment Setter",
    image: "/lovable-uploads/a7fcc662-0e75-44ea-b89d-8abda10025ca.png",
  },
  {
    name: "Farhan",
    role: "Appointment Setter",
    image: "/lovable-uploads/d5db8600-1283-4159-9e34-02691928c610.png",
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
                <div key={index} className="bg-indigo-900/20 rounded-xl overflow-hidden group">
                  <div className="aspect-square overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                    />
                  </div>
                  <div className="py-4 px-3 bg-indigo-900/80">
                    <h3 className="text-xl font-semibold">{member.name}</h3>
                    <p className="text-indigo-300">{member.role}</p>
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
