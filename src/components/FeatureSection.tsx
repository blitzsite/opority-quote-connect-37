
import React from "react";
import { 
  Zap, 
  Shield, 
  BarChart3, 
  Layers, 
  Users, 
  Calendar 
} from "lucide-react";

const features = [
  {
    icon: <Zap className="h-6 w-6 text-brand-accent" />,
    title: "Lightning Fast",
    description: "Experience exceptional speed with our optimized platform designed for maximum efficiency.",
  },
  {
    icon: <Shield className="h-6 w-6 text-brand-accent" />,
    title: "Enterprise Security",
    description: "Bank-level encryption and security measures to keep your data safe and protected.",
  },
  {
    icon: <BarChart3 className="h-6 w-6 text-brand-accent" />,
    title: "Powerful Analytics",
    description: "Gain valuable insights with comprehensive analytics and reporting tools.",
  },
  {
    icon: <Layers className="h-6 w-6 text-brand-accent" />,
    title: "Seamless Integration",
    description: "Connect with your favorite tools and services through our extensive API and integrations.",
  },
  {
    icon: <Users className="h-6 w-6 text-brand-accent" />,
    title: "Team Collaboration",
    description: "Enhance teamwork with real-time collaboration features and shared workspaces.",
  },
  {
    icon: <Calendar className="h-6 w-6 text-brand-accent" />,
    title: "Smart Scheduling",
    description: "Plan and organize your workflow with intuitive scheduling and calendar tools.",
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
            Premium Features
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">Designed for Professionals</h2>
          <p className="text-white/70 max-w-2xl mx-auto text-balance">
            Our comprehensive suite of features is built to enhance your workflow and boost productivity to unprecedented levels.
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
