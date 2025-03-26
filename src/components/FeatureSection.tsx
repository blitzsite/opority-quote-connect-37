
import React from "react";
import { 
  Zap, 
  Shield, 
  BarChart3, 
  Users, 
  Target,
  PhoneCall
} from "lucide-react";

const features = [
  {
    icon: <Target className="h-6 w-6 text-brand-accent" />,
    title: "Targeted Leads",
    description: "We focus exclusively on homeowners actively seeking home improvement services in your area.",
  },
  {
    icon: <Shield className="h-6 w-6 text-brand-accent" />,
    title: "Quality Guaranteed",
    description: "We stand by our lead quality with our guarantee: 5+ quote-ready leads in 30 days or you don't pay.",
  },
  {
    icon: <BarChart3 className="h-6 w-6 text-brand-accent" />,
    title: "ROI Focused",
    description: "Our campaigns are designed to maximize your return on investment and grow your business.",
  },
  {
    icon: <Zap className="h-6 w-6 text-brand-accent" />,
    title: "Quick Results",
    description: "Start receiving qualified leads within days, not months, after launching your campaign.",
  },
  {
    icon: <Users className="h-6 w-6 text-brand-accent" />,
    title: "Pre-Qualified",
    description: "We screen all leads to ensure they have the budget and timeline that match your services.",
  },
  {
    icon: <PhoneCall className="h-6 w-6 text-brand-accent" />,
    title: "Ready To Quote",
    description: "Leads are delivered ready for you to contact and provide estimates for their projects.",
  },
];

const FeatureSection = () => {
  return (
    <section id="features" className="py-20 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -right-32 w-64 h-64 rounded-full bg-brand-purple/5 blur-3xl"></div>
        <div className="absolute bottom-1/4 -left-32 w-72 h-72 rounded-full bg-brand-blue/5 blur-3xl"></div>
      </div>

      <div className="container relative">
        {/* Section Title */}
        <div className="text-center mb-16">
          <div className="inline-block glass-morphism px-4 py-1.5 rounded-full mb-4 text-white/80 text-sm">
            <span className="inline-block w-2 h-2 rounded-full bg-brand-accent mr-2"></span>
            Key Benefits
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">Why Our Leads Convert Better</h2>
          <p className="text-white/70 max-w-2xl mx-auto text-balance">
            Our comprehensive approach to lead generation ensures you get high-quality, ready-to-quote home improvement leads.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group glass-morphism rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
            >
              <div className="h-12 w-12 rounded-xl neo-morphism flex items-center justify-center mb-4 transform group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-white/70">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
