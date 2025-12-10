import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Marquee } from '@/components/Marquee';
import { Helmet } from 'react-helmet-async';
import { Syringe, Beaker, Sparkles, Scan, Eraser, Smile } from 'lucide-react';
import { Link } from 'react-router-dom';

import TestimonialSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection';
import { ProcessSection } from '@/components/ProcessSection';
import { motion } from 'framer-motion';

const services = [
  {
    title: 'Dermal Fillers',
    description: 'From preventive care to specialized treatments, our wide range.',
    image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=600&h=800&fit=crop',
    icon: Syringe,
  },
  {
    title: 'Chemical Peels',
    description: 'From preventive care to specialized treatments, our wide range.',
    image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=600&h=800&fit=crop',
    icon: Beaker,
  },
  {
    title: 'Acne Treatment',
    description: 'From preventive care to specialized treatments, our wide range.',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&h=800&fit=crop',
    icon: Sparkles,
  },
  {
    title: 'Skin Tightening',
    description: 'From preventive care to specialized treatments, our wide range.',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&h=800&fit=crop',
    icon: Scan,
  },
  {
    title: 'Scar Revision',
    description: 'From preventive care to specialized treatments, our wide range.',
    image: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=600&h=800&fit=crop',
    icon: Eraser,
  },
  {
    title: 'Wrinkle Reduction',
    description: 'From preventive care to specialized treatments, our wide range.',
    image: 'https://images.unsplash.com/photo-1560750588-73207b1ef5b8?w=600&h=800&fit=crop',
    icon: Smile,
  },
];

const Services = () => {
  // 1. **Variants for Individual Elements (Fade Up)**
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" } // Duration and Easing for each item
    }
  };

  // 2. **Container Variant (Staggering)**
  const staggerContainer = {
    hidden: {}, // No animation on the container itself
    visible: {
      transition: {
        staggerChildren: 0.2 // Delay between the start of each child's animation
      }
    }
  };

  return (
    <>
      <Helmet>
        <title>Our Services - Dermal Dermatology Clinic</title>
        <meta name="description" content="Explore Dermal's comprehensive dermatology services including dermal fillers, chemical peels, acne treatment, and more." />
      </Helmet>
      <div className="min-h-screen bg-[#FEF7F8]">
        <Header />
        <main>
          {/* Hero Banner (Single element fade-in) */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            // 👇 Animation must trigger ONLY when scrolled to the section
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            className=" mx-auto lg:px-8 lg:pt-2"
          >
            <div className="relative bg-[#24544B] lg:rounded-[30px] lg:h-[280px] md:h-[350px] h-[210px] flex flex-col items-center justify-center overflow-hidden">
              {/* Decorative Leaf - Bottom Left */}
              <div className="absolute bottom-0 left-0 animate-[float_6s_ease-in-out_infinite]">
                <img src="/image/leaf-bottom-left.png" alt="Leaf" className="w-20 h-20 md:w-32 md:h-32 lg:w-48 lg:h-48" />
              </div>
              {/* Decorative Leaf - Top Right */}
              <div className="absolute top-0 right-0 animate-[float_8s_ease-in-out_infinite]">
                <img src="/image/leaf-top-right.png" alt="Leaf" className="w-100 h-100 md:w-100 md:h-100 lg:w-50 lg:h-50 xl:w-100 xl:h-100" />
              </div>

              {/* Hero Content */}
              <h1 className="font-heading text-white text-[32px] md:text-[40px] lg:text-[56px] mb-4 md:mb-5 z-10">
                Our Services
              </h1>
              <div className="font-body text-white text-base md:text-lg z-10">
                <a href="/" className="opacity-70">Home</a>
                <span className="mx-2">/</span>
                <span>Services</span>
              </div>
            </div>
          </motion.section>

          {/* Services Grid (Staggered fade-in) */}
          <section className="container mx-auto px-4 lg:px-20 py-12 lg:py-20">
            {/* 👇 Parent motion.div for stagger effect */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              // 👇 Animation must trigger ONLY when scrolled to the section
              viewport={{ once: true, amount: 0.1 }}
              variants={staggerContainer} // Use the container variant to define stagger
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
            >
              {services.map((service, index) => (
                // 👇 Child motion.div for the individual fade-in animation
                <motion.div
                  key={index}
                  variants={fadeInUp} // Use the fadeInUp variant for the card's animation
                  className="relative"
                >
                  <Link
                    to={`/services/${service.title.toLowerCase().replace(/\s+/g, "-")}`}
                    className="group relative block w-full h-[400px] rounded-[30px] overflow-hidden cursor-pointer touch-manipulation"
                  >
                    {/* Shine Effect */}
                    <div className="absolute top-0 -left-[100%] w-1/2 h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-[50deg] transition-all duration-700 ease-in-out z-10 group-hover:left-[200%] pointer-events-none" />

                    {/* Background Image */}
                    <img
                      src={service.image}
                      alt={service.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />

                    {/* Gradient Overlay EXACT from Figma */}
                    <div
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        background:
                          "linear-gradient(180deg, rgba(28, 73, 66, 0) 52.13%, rgba(28, 73, 66, 0.9) 81.58%)",
                      }}
                    />

                    {/* CONTENT — Figma bottom position converted to responsive */}
                    <div className="absolute left-6 right-6 lg:left-8 lg:right-8 bottom-10 flex flex-col lg:pointer-events-none z-20">

                      {/* ICON BOX */}
                      <div
                        className="w-[50px] h-[50px] rounded-[10px] flex items-center justify-center mb-5 bg-white transition-all duration-300 group-hover:bg-[#24544B]"
                      >
                        <service.icon className="w-7 h-7 text-[#1C4942] transition-colors duration-300 group-hover:text-white" strokeWidth={2} />
                      </div>

                      {/* TITLE */}
                      <h3 className="font-heading text-[18px] leading-[24px] text-white mb-3">
                        {service.title}
                      </h3>

                      {/* DESCRIPTION */}
                      <p
                        className="font-body text-[18px] leading-[29px] text-white opacity-90"
                        style={{ maxWidth: "300px" }}
                      >
                        {service.description}
                      </p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </section>

          <ProcessSection />
          <TestimonialSection />
          <ContactSection />
          <Marquee />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Services;