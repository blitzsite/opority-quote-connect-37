
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const PricingSection = () => {
  const [isAnnual, setIsAnnual] = useState(true);

  const plans = [
    {
      name: "Starter",
      description: "Perfect for individuals and small projects",
      monthlyPrice: 19,
      annualPrice: 190,
      features: [
        "Essential features",
        "1 project",
        "5GB storage", 
        "Basic analytics",
        "Email support",
      ],
      cta: "Start Free Trial",
      popular: false,
      highlightColor: "from-brand-blue/60 to-brand-blue/20",
    },
    {
      name: "Professional",
      description: "Ideal for professionals and growing teams",
      monthlyPrice: 49,
      annualPrice: 490,
      features: [
        "All Starter features",
        "Unlimited projects",
        "25GB storage",
        "Advanced analytics",
        "Priority support",
        "API access",
        "Team collaboration",
      ],
      cta: "Start Free Trial",
      popular: true,
      highlightColor: "from-brand-accent/70 to-brand-accent/30",
    },
    {
      name: "Enterprise",
      description: "Advanced features for larger organizations",
      monthlyPrice: 99,
      annualPrice: 990,
      features: [
        "All Professional features",
        "Unlimited everything",
        "100GB storage",
        "Custom analytics",
        "24/7 premium support",
        "Advanced security",
        "Custom integrations",
        "Dedicated account manager",
      ],
      cta: "Contact Sales",
      popular: false,
      highlightColor: "from-brand-purple/60 to-brand-purple/20",
    },
  ];

  return (
    <section id="pricing" className="py-20 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 left-1/4 w-64 h-64 rounded-full bg-brand-purple/5 blur-3xl"></div>
        <div className="absolute -bottom-32 right-1/4 w-72 h-72 rounded-full bg-brand-blue/5 blur-3xl"></div>
      </div>

      <div className="container relative">
        {/* Section Title */}
        <div className="text-center mb-16">
          <div className="inline-block glass-morphism px-4 py-1.5 rounded-full mb-4 text-white/80 text-sm">
            <span className="inline-block w-2 h-2 rounded-full bg-brand-accent mr-2"></span>
            Simple Pricing
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">Choose Your Perfect Plan</h2>
          <p className="text-white/70 max-w-2xl mx-auto mb-8 text-balance">
            Transparent pricing structured to accommodate businesses of all sizes, from startups to enterprises.
          </p>

          {/* Toggle Switch */}
          <div className="flex items-center justify-center space-x-4 mb-12">
            <span className={`text-sm ${!isAnnual ? 'text-white' : 'text-white/60'}`}>Monthly</span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className="relative h-6 w-12 rounded-full bg-dark-200 p-1 transition-colors duration-200"
            >
              <span
                className={`absolute top-1 h-4 w-4 rounded-full bg-brand-accent transition-transform duration-200 ${
                  isAnnual ? 'translate-x-6' : 'translate-x-0'
                }`}
              ></span>
            </button>
            <span className={`text-sm flex items-center ${isAnnual ? 'text-white' : 'text-white/60'}`}>
              Yearly
              <span className="ml-1.5 bg-brand-accent/20 text-brand-accent text-xs px-2 py-0.5 rounded-full">
                Save 20%
              </span>
            </span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`glass-morphism rounded-2xl overflow-hidden transition-transform duration-300 hover:-translate-y-2 ${
                plan.popular ? 'relative z-10 md:scale-105' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-brand-accent to-brand-purple text-white text-xs font-semibold text-center py-1.5">
                  MOST POPULAR
                </div>
              )}
              
              <div className="p-8">
                <div className="mb-4">
                  <h3 className="text-xl font-bold mb-1">{plan.name}</h3>
                  <p className="text-white/70 text-sm">{plan.description}</p>
                </div>
                
                <div className="mb-6">
                  <div className="flex items-baseline">
                    <span className="text-4xl font-bold">
                      ${isAnnual ? plan.annualPrice : plan.monthlyPrice}
                    </span>
                    <span className="text-white/70 ml-2">
                      {isAnnual ? '/year' : '/month'}
                    </span>
                  </div>
                  {isAnnual && (
                    <p className="text-xs text-brand-accent mt-1">
                      Save ${(plan.monthlyPrice * 12) - plan.annualPrice} annually
                    </p>
                  )}
                </div>

                <Button 
                  className={`w-full mb-6 rounded-lg bg-gradient-to-r ${plan.highlightColor} hover:opacity-90`}
                >
                  {plan.cta}
                </Button>
                
                <div className="border-t border-white/10 pt-6">
                  <p className="text-sm font-medium mb-4">Plan includes:</p>
                  <ul className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <Check className="h-4 w-4 text-brand-accent mr-3 flex-shrink-0" />
                        <span className="text-white/80">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
