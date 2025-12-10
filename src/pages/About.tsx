import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Marquee } from '@/components/Marquee';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Check, Play, Star, Quote, MapPin, Phone, Mail, Users, Award, Heart, Target, Lightbulb, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { StatsRow } from '@/components/StatsRow';
import { MissionVisionSection } from '@/components/MissionVisionSection';
import { CommitmentSection } from '@/components/CommitmentSection';
import { ExpertTeamSection } from '@/components/ExpertTeamSection';
import ContactSection from '@/components/ContactSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import WhyChooseUs from '@/components/WhyChooseUs';
import { BenefitsSection } from '@/components/BenefitsSection';
import AboutBenefitsSection from '@/components/AboutBenefitsSection';
import { motion } from 'framer-motion';

const features = [
  { icon: Users, title: 'Expert Supervision', description: 'Board-certified dermatologists overseeing every treatment' },
  { icon: Heart, title: 'Personalized Plan', description: 'Customized care tailored to your unique skin needs' },
  { icon: Award, title: 'Laser Treatment', description: 'State-of-the-art laser technology for optimal results' },
];

const stats = [
  { value: '96%', label: 'Patient Satisfaction' },
  { value: '12+', label: 'Expert Dermatologists' },
  { value: '1000+', label: 'Success Stories' },
  { value: '24/7', label: 'Support' },
];



const exceptionalFeatures = [
  { icon: Shield, title: 'Safe Treatments', description: 'FDA-approved procedures with proven safety records' },
  { icon: Users, title: 'Expert Team', description: 'Board-certified dermatologists with years of experience' },
  { icon: Lightbulb, title: 'Innovation', description: 'Latest technology and treatment methodologies' },
  { icon: Heart, title: 'Patient Care', description: 'Compassionate approach to every patient interaction' },
];

const About = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    service: '',
    date: '',
    time: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you shortly.",
    });
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      service: '',
      date: '',
      time: '',
      message: '',
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // Framer Motion variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <>
      <Helmet>
        <title>About Us - Dermal Dermatology Clinic</title>
        <meta name="description" content="Learn about Dermal's commitment to exceptional dermatology care. Our expert team provides personalized treatments for all your skin health needs." />
      </Helmet>
      <div className="min-h-screen bg-[#FEF7F8] ">
        <Header />
        <main className='overflow-hidden'>
          {/* SECTION 1 - Page Header */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className=" mx-auto  lg:px-8 lg:pt-2 "
          >
            <div className="relative bg-[#24544B] lg:rounded-[30px] lg:h-[280px] md:h-[350px] h-[210px] flex flex-col items-center justify-center ">
              {/* Decorative Leaf - Bottom Left */}
              <div className="absolute bottom-0 left-0 animate-[float_6s_ease-in-out_infinite]">
                <img src="/image/leaf-bottom-left.png" alt="Leaf" className="w-20 h-20 md:w-32 md:h-32 lg:w-48 lg:h-48" />
              </div>
              {/* Decorative Leaf - Top Right */}
              <div className="absolute top-0 right-0 animate-[float_8s_ease-in-out_infinite]">
                <img src="/image/leaf-top-right.png" alt="Leaf" className="w-100 h-100 md:w-100 md:h-100 lg:w-50 lg:h-50 xl:w-100 xl:h-100" />
              </div>

              {/* Hero Content */}
              <h1 className="font-heading text-white text-[32px] md:text-[40px] lg:text-[56px] z-10">
                About Us
              </h1>
              <div className="font-body text-white text-sm md:text-base mb-3 z-10">
                <a href="/" className="opacity-70">Home</a>
                <span className="mx-2">/</span>
                <span>About</span>
              </div>
            </div>
          </motion.section>

          <WhyChooseUs />

          <StatsRow />

          {/* SECTION 4 - Mission, Vision & Values */}

          <MissionVisionSection />
          {/* SECTION 5 - Commitment to Excellence */}
          <CommitmentSection />

          <BenefitsSection />


          {/* SECTION 7 - Innovation Section */}
          {/* SECTION 7 - Innovation Section */}
          <section className="container mx-auto px-6 md:px-10 lg:px-20 xl:px-28 py-12 md:py-16 lg:py-20">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-center">

              {/* Image Group - Shows FIRST on mobile/tablet, SECOND on desktop */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeInUp}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="relative order-1 lg:order-2"
              >
                {/* Main Large Circle */}
                <div className="relative w-full aspect-square max-w-[400px] md:max-w-[450px] mx-auto lg:mx-0 lg:ml-auto">
                  <img
                    src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=600&fit=crop"
                    alt="Innovation in Dermatology"
                    className="w-full h-full object-cover rounded-full"
                  />

                  {/* Small Overlapping Circle - Bottom Right */}
                  <div className="absolute bottom-0 right-0 w-32 h-32 lg:w-36 lg:h-36 rounded-full border-4 border-white overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=200&h=200&fit=crop&crop=face"
                      alt="Doctor"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Floating Badge - Top Left */}
                  <div className="absolute -top-4 -left-4 md:top-8 md:-left-6 lg:top-8 lg:-left-4 bg-white rounded-[20px] px-5 py-3 md:px-6 md:py-4 shadow-[0_4px_20px_rgba(0,0,0,0.1)]">
                    <p className="font-heading text-[28px] md:text-[32px] text-[#1C4942] leading-none mb-1">27k</p>
                    <p className="font-body text-sm text-[#7B798C]">Customer Reviewed</p>
                  </div>
                </div>
              </motion.div>

              {/* Content - Shows SECOND on mobile/tablet, FIRST on desktop - STAGGER CONTAINER */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={containerVariants}
                className="flex flex-col justify-center order-2 lg:order-1"
              >
                {/* Subheading with Bullet (1st item) */}
                <motion.div variants={fadeInUp} className="flex items-center gap-2 mb-4 md:mb-6">
                  <div className="w-2 h-2 rounded-full bg-[#24544B]"></div>
                  <span className="font-body text-[#7B798C] text-base">Innovation</span>
                </motion.div>

                {/* Main Heading (2nd item) */}
                <motion.h2
                  variants={fadeInUp}
                  className="font-heading text-[#1C4942] text-[28px] md:text-[36px] lg:text-[50px] leading-[110%] mb-5 md:mb-6"
                  style={{ letterSpacing: '-1px' }}
                >
                  Redefining dermatology with innovation
                </motion.h2>

                {/* Description Paragraph (3rd item) */}
                <motion.p variants={fadeInUp} className="font-body text-[#7B798C] text-base md:text-lg leading-[29px] max-w-[620px] mb-8 md:mb-10">
                  We stay at the forefront of dermatological advances, continuously adopting new technologies and techniques to provide the best possible care for our patients.
                </motion.p>

                {/* Progress Bars Container (4th & 5th items) */}
                <div className="space-y-6 md:space-y-7">
                  {/* Progress Bar 1 - Personalized Care (4th item) */}
                  <motion.div variants={fadeInUp}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-body text-[#1C4942] text-base md:text-lg font-medium">Personalized Care</span>
                      <span className="font-body text-[#1C4942] text-base md:text-lg font-medium">95%</span>
                    </div>
                    <div className="h-2 bg-[#F7F0F2] rounded-full overflow-hidden">
                      <div
                        className="h-full bg-[#24544B] rounded-full transition-all duration-1000 ease-out"
                        style={{ width: '95%' }}
                      ></div>
                    </div>
                  </motion.div>

                  {/* Progress Bar 2 - Advanced Treatments (5th item) */}
                  <motion.div variants={fadeInUp}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-body text-[#1C4942] text-base md:text-lg font-medium">Advanced Treatments</span>
                      <span className="font-body text-[#1C4942] text-base md:text-lg font-medium">85%</span>
                    </div>
                    <div className="h-2 bg-[#F7F0F2] rounded-full overflow-hidden">
                      <div
                        className="h-full bg-[#24544B] rounded-full transition-all duration-1000 ease-out"
                        style={{ width: '85%' }}
                      ></div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>

            </div>
          </section>

          <AboutBenefitsSection />

          {/* SECTION 8 - Excellence in Skincare */}
          <section className=" rounded-none lg:rounded-[30px] mx-0 lg:mx-10 xl:mx-0 py-10 md:py-16 lg:py-20 xl:py-[100px]">
            <div className="container mx-auto px-6 md:px-10 lg:px-0 xl:px-[100px]">

              {/* Desktop: 2-column grid | Mobile/Tablet: Stack vertically */}
              <div className="grid xl:grid-cols-2 gap-10 lg:gap-12 xl:gap-16 items-center">

                {/* LEFT PANEL - Content (STAGGER CONTAINER) */}
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={containerVariants}
                  className="order-1"
                >
                  {/* 1. Section Label */}
                  <motion.div variants={fadeInUp} className="flex items-center gap-2 mb-4 md:mb-5">
                    <div className="w-2 h-2 rounded-full bg-[#24544B]"></div>
                    <span className="font-body text-[#7B798C] text-base">
                      Dedicated To You
                    </span>
                  </motion.div>

                  {/* 2. Main Heading */}
                  <motion.h2
                    variants={fadeInUp}
                    className="font-heading text-[#1C4942] text-[28px] md:text-[36px] lg:text-[50px] leading-tight lg:leading-[55px] mb-5 md:mb-6"
                    style={{ letterSpacing: '-1px' }}
                  >
                    Delivering excellence every aspect of skincare
                  </motion.h2>

                  {/* 3. Subheading Paragraph */}
                  <motion.p variants={fadeInUp} className="font-body text-[#7B798C] text-base md:text-lg leading-relaxed max-w-[560px] mb-8 md:mb-10 lg:mb-12">
                    We are committed to providing unparalleled dermatology care,
                    combining expertise, innovation, and compassion to ensure the best outcomes.
                  </motion.p>

                  {/* Numbered List - 3 Items (4th, 5th, 6th items) */}
                  <div className="flex flex-col gap-6 md:gap-7 lg:gap-[35px]">

                    {/* Item 1 - Custom Care (4th item) */}
                    <motion.div variants={fadeInUp} className="grid grid-cols-[50px_1fr] gap-4 md:gap-5 items-start">
                      <div className="w-[50px] h-[50px] bg-white rounded-[10px] flex items-center justify-center shadow-sm">
                        <span className="font-heading text-[#1C4942] text-[22px] leading-none">1</span>
                      </div>
                      <div>
                        <h3 className="font-heading text-[#1C4942] text-[20px] md:text-[22px] mb-1 md:mb-2">
                          Custom Care
                        </h3>
                        <p className="font-body text-[#7B798C] text-base md:text-lg leading-relaxed max-w-[480px]">
                          This helps us create a customized treatment plan that aligns with your specific needs and expectations.
                        </p>
                      </div>
                    </motion.div>

                    {/* Item 2 - Tailored Advice (5th item) */}
                    <motion.div variants={fadeInUp} className="grid grid-cols-[50px_1fr] gap-4 md:gap-5 items-start">
                      <div className="w-[50px] h-[50px] bg-white rounded-[10px] flex items-center justify-center shadow-sm">
                        <span className="font-heading text-[#1C4942] text-[22px] leading-none">2</span>
                      </div>
                      <div>
                        <h3 className="font-heading text-[#1C4942] text-[20px] md:text-[22px] mb-1 md:mb-2">
                          Tailored Advice
                        </h3>
                        <p className="font-body text-[#7B798C] text-base md:text-lg leading-relaxed max-w-[480px]">
                          Based on your consultation, we develop a personalized treatment plan designed to address your specific skin concerns.
                        </p>
                      </div>
                    </motion.div>

                    {/* Item 3 - Expert Guidance (6th item) */}
                    <motion.div variants={fadeInUp} className="grid grid-cols-[50px_1fr] gap-4 md:gap-5 items-start">
                      <div className="w-[50px] h-[50px] bg-white rounded-[10px] flex items-center justify-center shadow-sm">
                        <span className="font-heading text-[#1C4942] text-[22px] leading-none">3</span>
                      </div>
                      <div>
                        <h3 className="font-heading text-[#1C4942] text-[20px] md:text-[22px] mb-1 md:mb-2">
                          Expert Guidance
                        </h3>
                        <p className="font-body text-[#7B798C] text-base md:text-lg leading-relaxed max-w-[480px]">
                          Your skin's health is our priority, so we provide ongoing care and follow-up. After your treatment, we monitor your progress.
                        </p>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>

                {/* RIGHT PANEL - Image + Floating Card */}
                <div className="order-2 xl:order-2">

                  {/* Mobile Only - Service Cards (STAGGER CONTAINER) */}
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={containerVariants}
                    className="md:hidden grid grid-cols-1 gap-5"
                  >

                    {/* Service Item 1 - Skin Rejuvenation */}
                    <motion.div variants={fadeInUp} className="bg-white rounded-[20px] shadow-lg p-6 flex flex-col items-center text-center gap-3 transition-all duration-300 hover:bg-[#24544B] group">
                      <svg
                        className="w-10 h-10 text-[#1C4942] transition-colors duration-300 group-hover:text-white"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                      </svg>
                      <h4 className="font-heading text-[#1C4942] text-[20px] transition-colors duration-300 group-hover:text-white">
                        Skin Rejuvenation
                      </h4>
                      <p className="font-body text-[#7B798C] text-base leading-6 transition-colors duration-300 group-hover:text-white">
                        From preventive care to specialized.
                      </p>
                    </motion.div>

                    {/* Service Item 2 - Facial Contouring */}
                    <motion.div variants={fadeInUp} className="bg-white rounded-[20px] shadow-lg p-6 flex flex-col items-center text-center gap-3 transition-all duration-300 hover:bg-[#24544B] group">
                      <svg
                        className="w-10 h-10 text-[#1C4942] transition-colors duration-300 group-hover:text-white"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <path d="M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01" />
                      </svg>
                      <h4 className="font-heading text-[#1C4942] text-[20px] transition-colors duration-300 group-hover:text-white">
                        Facial Contouring
                      </h4>
                      <p className="font-body text-[#7B798C] text-base leading-6 transition-colors duration-300 group-hover:text-white">
                        From preventive care to specialized.
                      </p>
                    </motion.div>

                    {/* Service Item 3 - Youthful Glow */}
                    <motion.div variants={fadeInUp} className="bg-white rounded-[20px] shadow-lg p-6 flex flex-col items-center text-center gap-3 transition-all duration-300 hover:bg-[#24544B] group">
                      <svg
                        className="w-10 h-10 text-[#1C4942] transition-colors duration-300 group-hover:text-white"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M4.93 19.07l1.41-1.41m11.32-11.32l1.41-1.41" />
                        <circle cx="12" cy="12" r="4" />
                      </svg>
                      <h4 className="font-heading text-[#1C4942] text-[20px] transition-colors duration-300 group-hover:text-white">
                        Youthful Glow
                      </h4>
                      <p className="font-body text-[#7B798C] text-base leading-6 transition-colors duration-300 group-hover:text-white">
                        From preventive care to specialized.
                      </p>
                    </motion.div>
                  </motion.div>

                  {/* Tablet/Laptop/Desktop - Image with Overlay Card */}
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={fadeInUp}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="hidden md:block relative w-full md:w-[90%] xl:w-full mx-auto xl:ml-auto"
                  >
                    {/* Main Image */}
                    <div className="group relative overflow-hidden rounded-[20px] md:rounded-[30px]">
                      <div className="absolute top-0 -left-[100%] w-1/2 h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-[50deg] transition-all duration-700 ease-in-out z-10 group-hover:left-[200%] pointer-events-none" />
                      <img
                        src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=700&h=800&fit=crop"
                        alt="Dermatology Care Excellence"
                        className="w-full h-auto rounded-[20px] md:rounded-[30px] object-cover"
                      />
                    </div>

                    {/* Floating Service Card - Overlays Image on Tablet+ (STAGGER CONTAINER) */}
                    <motion.div
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.3 }}
                      variants={containerVariants}
                      transition={{ delay: 0.3 }}
                      className="absolute -right-5 md:-left-8 xl:-left-8 top-8 md:top-48 lg:top-80 xl:top-48 w-[240px] md:w-[260px] bg-white rounded-[20px] md:rounded-[30px] shadow-[0_8px_30px_rgba(0,0,0,0.12)] p-5 md:p-[30px_25px] flex flex-col gap-6 md:gap-8"
                    >

                      {/* Service Item 1 - Skin Rejuvenation */}
                      <motion.div variants={fadeInUp} className="flex flex-col items-center text-center gap-2 md:gap-3 transition-all duration-300 hover:bg-[#24544B] rounded-[15px] p-3 md:p-4 -m-3 md:-m-4 group">
                        <svg
                          className="w-8 h-8 md:w-10 md:h-10 text-[#1C4942] transition-colors duration-300 group-hover:text-white"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                        </svg>
                        <h4 className="font-heading text-[#1C4942] text-[20px] md:text-[22px] transition-colors duration-300 group-hover:text-white">
                          Skin Rejuvenation
                        </h4>
                        <p className="font-body text-[#7B798C] text-base leading-6 transition-colors duration-300 group-hover:text-white">
                          From preventive care to specialized.
                        </p>
                      </motion.div>

                      {/* Service Item 2 - Facial Contouring */}
                      <motion.div variants={fadeInUp} className="flex flex-col items-center text-center gap-2 md:gap-3 transition-all duration-300 hover:bg-[#24544B] rounded-[15px] p-3 md:p-4 -m-3 md:-m-4 group">
                        <svg
                          className="w-8 h-8 md:w-10 md:h-10 text-[#1C4942] transition-colors duration-300 group-hover:text-white"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <circle cx="12" cy="12" r="10" />
                          <path d="M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01" />
                        </svg>
                        <h4 className="font-heading text-[#1C4942] text-[20px] md:text-[22px] transition-colors duration-300 group-hover:text-white">
                          Facial Contouring
                        </h4>
                        <p className="font-body text-[#7B798C] text-base leading-6 transition-colors duration-300 group-hover:text-white">
                          From preventive care to specialized.
                        </p>
                      </motion.div>

                      {/* Service Item 3 - Youthful Glow */}
                      <motion.div variants={fadeInUp} className="flex flex-col items-center text-center gap-2 md:gap-3 transition-all duration-300 hover:bg-[#24544B] rounded-[15px] p-3 md:p-4 -m-3 md:-m-4 group">
                        <svg
                          className="w-8 h-8 md:w-10 md:h-10 text-[#1C4942] transition-colors duration-300 group-hover:text-white"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M4.93 19.07l1.41-1.41m11.32-11.32l1.41-1.41" />
                          <circle cx="12" cy="12" r="4" />
                        </svg>
                        <h4 className="font-heading text-[#1C4942] text-[20px] md:text-[22px] transition-colors duration-300 group-hover:text-white">
                          Youthful Glow
                        </h4>
                        <p className="font-body text-[#7B798C] text-base leading-6 transition-colors duration-300 group-hover:text-white">
                          From preventive care to specialized.
                        </p>
                      </motion.div>
                    </motion.div>
                  </motion.div>
                </div>

              </div>
            </div>
          </section>

          {/* SECTION 10 - Expert Team */}
          <ExpertTeamSection />

          {/* SECTION 11 - Testimonials */}
          <TestimonialsSection />

          {/* SECTION 12 - Contact Section */}
          <ContactSection />

          {/* Scrolling Marquee */}
          <Marquee />
        </main>

        {/* SECTION 13 - Footer */}
        <Footer />
      </div>
    </>
  );
};

export default About;
