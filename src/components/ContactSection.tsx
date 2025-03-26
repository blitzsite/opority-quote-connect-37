
import React from "react";
import { Button } from "@/components/ui/button";
import { Mail, MessageCircle, ArrowRight } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 right-1/5 w-80 h-80 rounded-full bg-brand-purple/5 blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/5 w-64 h-64 rounded-full bg-brand-blue/5 blur-3xl"></div>
      </div>

      <div className="container relative">
        <div className="max-w-5xl mx-auto glass-morphism rounded-2xl overflow-hidden">
          <div className="grid md:grid-cols-2">
            {/* Left Column */}
            <div className="p-8 md:p-12 bg-gradient-to-br from-dark-200/50 to-dark-300/50">
              <h2 className="text-3xl font-bold mb-4 text-gradient">Ready to Transform Your Workflow?</h2>
              <p className="text-white/70 mb-8 text-balance">
                Get in touch with our team to discuss how our solutions can enhance your productivity and streamline your operations.
              </p>
              
              <div className="mb-8">
                <div className="flex items-center mb-4">
                  <div className="h-10 w-10 rounded-full glass-morphism flex items-center justify-center mr-3">
                    <Mail className="h-5 w-5 text-brand-accent" />
                  </div>
                  <div>
                    <p className="text-white/70 text-sm">Email us at</p>
                    <a href="mailto:contact@opority.com" className="text-white hover:text-brand-accent transition-colors">
                      contact@opority.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full glass-morphism flex items-center justify-center mr-3">
                    <MessageCircle className="h-5 w-5 text-brand-accent" />
                  </div>
                  <div>
                    <p className="text-white/70 text-sm">Live chat</p>
                    <a href="#" className="text-white hover:text-brand-accent transition-colors">
                      Start a conversation
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="glass-morphism p-4 rounded-xl text-white/80 text-sm">
                <p className="flex items-center">
                  <span className="h-3 w-3 rounded-full bg-green-500 mr-2"></span>
                  Our team typically responds within 2 hours
                </p>
              </div>
            </div>
            
            {/* Right Column */}
            <div className="p-8 md:p-12">
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-1">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 rounded-lg glass-morphism bg-white/5 border border-white/10 focus:border-brand-accent focus:outline-none focus:ring-1 focus:ring-brand-accent/50 text-white placeholder:text-white/30"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 rounded-lg glass-morphism bg-white/5 border border-white/10 focus:border-brand-accent focus:outline-none focus:ring-1 focus:ring-brand-accent/50 text-white placeholder:text-white/30"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-white/80 mb-1">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 rounded-lg glass-morphism bg-white/5 border border-white/10 focus:border-brand-accent focus:outline-none focus:ring-1 focus:ring-brand-accent/50 text-white placeholder:text-white/30"
                    placeholder="Tell us how we can help..."
                  ></textarea>
                </div>
                <Button className="w-full bg-brand-accent hover:bg-brand-accent/90 rounded-lg group">
                  Send Message
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <p className="text-white/50 text-xs text-center mt-4">
                  By submitting, you agree to our <a href="#" className="text-white/70 hover:text-white underline">Terms of Service</a> and <a href="#" className="text-white/70 hover:text-white underline">Privacy Policy</a>.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
