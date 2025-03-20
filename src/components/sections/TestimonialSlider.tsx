
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  quote: string;
  name: string;
  company: string;
  role: string;
  rating: number;
  imageUrl?: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "Opority transformed our online presence. We've seen a 300% increase in qualified leads since we started working with them. Their team is professional, responsive, and truly cares about our success.",
    name: "Michael Johnson",
    company: "Johnson Roofing",
    role: "Owner",
    rating: 5,
    imageUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80"
  },
  {
    id: 2,
    quote: "Their Facebook ad campaigns have been a game-changer for our kitchen remodeling business. We're now booked 3 months in advance and have had to hire additional staff to keep up with the demand.",
    name: "Sarah Williams",
    company: "Elite Kitchen Designs",
    role: "Marketing Director",
    rating: 5,
    imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80"
  },
  {
    id: 3,
    quote: "The team at Opority understood our business and delivered results. Our website conversion rate doubled within 2 months, and the quality of leads coming through has been exceptional.",
    name: "Robert Anderson",
    company: "Anderson Windows & Doors",
    role: "CEO",
    rating: 5,
    imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80"
  },
  {
    id: 4,
    quote: "Opority's video content strategy helped us showcase our craftsmanship and connect with homeowners on a deeper level. The ROI has been phenomenal, and we couldn't be happier with the results.",
    name: "Jennifer Martinez",
    company: "Luxury Bath Solutions",
    role: "Founder",
    rating: 5,
    imageUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80"
  }
];

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);
  const autoplayTimeoutRef = useRef<number | null>(null);
  
  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const pauseAutoplay = () => {
    setIsAutoplay(false);
    if (autoplayTimeoutRef.current) {
      window.clearTimeout(autoplayTimeoutRef.current);
    }
  };

  const resumeAutoplay = () => {
    setIsAutoplay(true);
  };

  useEffect(() => {
    if (isAutoplay) {
      autoplayTimeoutRef.current = window.setTimeout(() => {
        nextTestimonial();
      }, 6000);
    }
    
    return () => {
      if (autoplayTimeoutRef.current) {
        window.clearTimeout(autoplayTimeoutRef.current);
      }
    };
  }, [currentIndex, isAutoplay]);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0
    })
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <svg 
        key={i} 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 24 24" 
        fill={i < rating ? "currentColor" : "none"} 
        stroke={i >= rating ? "currentColor" : "none"}
        className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
      >
        <path 
          fillRule="evenodd" 
          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" 
          clipRule="evenodd" 
        />
      </svg>
    ));
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div 
            className="inline-block px-4 py-1.5 bg-opority-blue/10 text-opority-blue rounded-full text-sm font-medium mb-6"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Client Success Stories
          </motion.div>
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-opority-navy mb-6"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            What Our Clients Say
          </motion.h2>
        </div>

        <div 
          className="relative max-w-5xl mx-auto px-6"
          onMouseEnter={pauseAutoplay}
          onMouseLeave={resumeAutoplay}
          onTouchStart={pauseAutoplay}
          onTouchEnd={resumeAutoplay}
        >
          <div className="absolute -top-10 -left-10 text-5xl text-opority-blue/10">
            <Quote size={80} />
          </div>
          
          <div className="min-h-[400px] flex items-center">
            <AnimatePresence initial={false} custom={1}>
              <motion.div
                key={currentIndex}
                custom={1}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="w-full"
              >
                <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10">
                  <div className="flex gap-1 mb-4">
                    {renderStars(testimonials[currentIndex].rating)}
                  </div>
                  
                  <p className="text-lg md:text-xl text-gray-700 italic mb-8 leading-relaxed">
                    "{testimonials[currentIndex].quote}"
                  </p>
                  
                  <div className="flex items-center">
                    {testimonials[currentIndex].imageUrl && (
                      <div className="mr-4 flex-shrink-0">
                        <img 
                          src={testimonials[currentIndex].imageUrl} 
                          alt={testimonials[currentIndex].name} 
                          className="w-14 h-14 rounded-full object-cover border-2 border-opority-blue/20"
                        />
                      </div>
                    )}
                    <div>
                      <h4 className="font-semibold text-opority-navy text-lg">
                        {testimonials[currentIndex].name}
                      </h4>
                      <p className="text-gray-600">
                        {testimonials[currentIndex].role}, {testimonials[currentIndex].company}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          
          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex 
                    ? 'bg-opority-blue w-8' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
          
          <button
            className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-12 bg-white p-3 rounded-full shadow-md text-gray-700 hover:text-opority-blue hover:shadow-lg transition-all"
            onClick={prevTestimonial}
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={20} />
          </button>
          
          <button
            className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-12 bg-white p-3 rounded-full shadow-md text-gray-700 hover:text-opority-blue hover:shadow-lg transition-all"
            onClick={nextTestimonial}
            aria-label="Next testimonial"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;
