
import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Users, Award, Star, ThumbsUp } from "lucide-react";

// Team member data
const teamMembers = [
  {
    name: "Alex Johnson",
    role: "CEO & Founder",
    bio: "15+ years in digital marketing and lead generation for home improvement businesses.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&h=200&auto=format&fit=crop",
  },
  {
    name: "Sarah Williams",
    role: "Lead Generation Specialist",
    bio: "Expert in creating high-converting campaigns for contractors and home services.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&h=200&auto=format&fit=crop",
  },
  {
    name: "Michael Chen",
    role: "Digital Marketing Director",
    bio: "Specializes in PPC and social media campaigns for home improvement companies.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=200&h=200&auto=format&fit=crop",
  },
  {
    name: "Jessica Rodriguez",
    role: "Client Success Manager",
    bio: "Ensures our clients receive the highest quality leads and exceptional service.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&h=200&auto=format&fit=crop",
  },
  {
    name: "David Smith",
    role: "Web Development Lead",
    bio: "Creates high-converting websites for home improvement businesses.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&h=200&auto=format&fit=crop",
  },
  {
    name: "Emma Wilson",
    role: "Content Strategist",
    bio: "Crafts engaging content that resonates with homeowners looking for improvements.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&h=200&auto=format&fit=crop",
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

        {/* Core Values Section */}
        <section className="py-16 relative reveal-section">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gradient">Our Core Values</h2>
              <p className="text-white/70 max-w-2xl mx-auto">
                The principles that guide our lead generation approach and define how we work with clients.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="glass-morphism p-6 rounded-2xl">
                <div className="h-12 w-12 rounded-xl neo-morphism flex items-center justify-center mb-4">
                  <ThumbsUp className="h-6 w-6 text-brand-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Quality First</h3>
                <p className="text-white/70">We focus on generating high-quality leads that are ready to convert, not just increasing numbers.</p>
              </div>
              
              <div className="glass-morphism p-6 rounded-2xl">
                <div className="h-12 w-12 rounded-xl neo-morphism flex items-center justify-center mb-4">
                  <Award className="h-6 w-6 text-brand-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Expertise</h3>
                <p className="text-white/70">Our team has specialized knowledge in home improvement marketing and lead generation.</p>
              </div>
              
              <div className="glass-morphism p-6 rounded-2xl">
                <div className="h-12 w-12 rounded-xl neo-morphism flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-brand-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Client Partnership</h3>
                <p className="text-white/70">We view our relationships as partnerships, working closely with you for mutual success.</p>
              </div>
              
              <div className="glass-morphism p-6 rounded-2xl">
                <div className="h-12 w-12 rounded-xl neo-morphism flex items-center justify-center mb-4">
                  <Star className="h-6 w-6 text-brand-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Results-Driven</h3>
                <p className="text-white/70">We measure our success by the results we deliver for your business.</p>
              </div>
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
