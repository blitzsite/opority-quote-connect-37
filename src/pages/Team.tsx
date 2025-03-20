
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import TeamMember from '@/components/ui/TeamMember';
import CtaSection from '@/components/sections/CtaSection';

const teamMembers = [
  {
    name: 'Arnold',
    role: 'Founder & CEO',
    imageUrl: 'public/lovable-uploads/3ca5c8ec-9593-4f72-9e4e-3ee99069918b.png',
    id: 'arnold'
  },
  {
    name: 'Ognjen',
    role: 'Facebook Manager',
    imageUrl: 'public/lovable-uploads/3ca5c8ec-9593-4f72-9e4e-3ee99069918b.png',
    id: 'ognjen'
  },
  {
    name: 'Mehadi',
    role: 'Website Designer & Marketer',
    imageUrl: 'public/lovable-uploads/3ca5c8ec-9593-4f72-9e4e-3ee99069918b.png',
    id: 'mehadi'
  },
  {
    name: 'Ken',
    role: 'Sales Representative',
    imageUrl: 'public/lovable-uploads/3ca5c8ec-9593-4f72-9e4e-3ee99069918b.png',
    id: 'ken'
  },
  {
    name: 'David',
    role: 'Appointment Setter',
    imageUrl: 'public/lovable-uploads/3ca5c8ec-9593-4f72-9e4e-3ee99069918b.png',
    id: 'david'
  },
  {
    name: 'Mike',
    role: 'Appointment Setter',
    imageUrl: 'public/lovable-uploads/3ca5c8ec-9593-4f72-9e4e-3ee99069918b.png',
    id: 'mike'
  },
  {
    name: 'Farhan',
    role: 'Appointment Setter',
    imageUrl: 'public/lovable-uploads/3ca5c8ec-9593-4f72-9e4e-3ee99069918b.png',
    id: 'farhan'
  }
];

const Team = () => {
  useEffect(() => {
    document.title = 'Our Team | Opority';
  }, []);

  return (
    <>
      <Navbar />
      <main>
        {/* Page Header */}
        <section className="pt-32 pb-16 bg-gradient-to-b from-white to-gray-50">
          <div className="container-custom">
            <motion.div 
              className="text-center max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-block px-4 py-1.5 bg-opority-blue/10 text-opority-blue rounded-full text-sm font-medium mb-6">
                Our Team
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-opority-navy mb-6">
                Meet the Experts Behind Opority
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Our dedicated team of professionals is committed to delivering exceptional results for your home improvement business.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Team Grid */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <TeamMember
                  key={member.id}
                  name={member.name}
                  role={member.role}
                  imageUrl={member.imageUrl}
                  delay={index}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Team Values */}
        <section className="py-20 bg-gray-50">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-block px-4 py-1.5 bg-opority-blue/10 text-opority-blue rounded-full text-sm font-medium mb-6">
                Our Values
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-opority-navy mb-6">
                What Drives Our Team
              </h2>
              <p className="text-lg text-gray-600">
                At Opority, our core values shape everything we do and how we serve our clients.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Client Success",
                  description: "Your success is our success. We're committed to delivering results that help your business grow and thrive."
                },
                {
                  title: "Innovation",
                  description: "We stay at the forefront of digital marketing trends and technologies to provide you with cutting-edge solutions."
                },
                {
                  title: "Transparency",
                  description: "We believe in open communication and complete transparency in everything we do, from pricing to reporting."
                },
                {
                  title: "Quality",
                  description: "We focus on generating high-quality leads that are ready to engage with your business and convert into customers."
                },
                {
                  title: "Collaboration",
                  description: "We work closely with you to understand your business goals and develop strategies that align with your vision."
                },
                {
                  title: "Continuous Improvement",
                  description: "We're constantly refining our processes and strategies to deliver better results for your business."
                }
              ].map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  className="bg-white p-8 rounded-xl shadow-card hover:shadow-lg transition-all duration-300"
                >
                  <h3 className="text-xl font-semibold text-opority-navy mb-4">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <CtaSection
          title="Ready to Work With Our Expert Team?"
          subtitle="Schedule a call to discuss how we can help your home improvement business generate more quality leads."
          buttonText="Meet With Our Team"
          buttonLink="/booking"
        />
        
        <Footer />
      </main>
    </>
  );
};

export default Team;
