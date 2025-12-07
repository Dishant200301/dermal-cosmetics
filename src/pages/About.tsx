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
          <section className=" mx-auto  lg:px-8 lg:pt-2 ">
            <div className="relative bg-[#24544B] lg:rounded-[30px] lg:h-[280px] md:h-[350px] h-[210px] flex flex-col items-center justify-center ">
              {/* Decorative Leaf - Top Left */}
              <svg
                className="absolute top-6 left-6 md:top-10 md:left-10 w-20 h-20 md:w-28 md:h-28 opacity-20"
                viewBox="0 0 100 100"
                fill="none"
              >
                <path
                  d="M20 80C20 80 30 60 40 50C50 40 60 30 80 20C60 30 50 40 40 50C30 60 20 80 20 80Z"
                  stroke="white"
                  strokeWidth="2"
                  fill="none"
                />
              </svg>

              {/* Decorative Leaf - Bottom Right */}
              <svg
                className="absolute bottom-6 right-6 md:bottom-10 md:right-10 w-20 h-20 md:w-28 md:h-28 opacity-20"
                viewBox="0 0 100 100"
                fill="none"
              >
                <path
                  d="M80 20C80 20 70 40 60 50C50 60 40 70 20 80C40 70 50 60 60 50C70 40 80 20 80 20Z"
                  stroke="white"
                  strokeWidth="2"
                  fill="none"
                />
              </svg>

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
          </section>

          <WhyChooseUs />

          <StatsRow />

          {/* SECTION 4 - Mission, Vision & Values */}

          <MissionVisionSection />
          {/* SECTION 5 - Commitment to Excellence */}
          <CommitmentSection />

                   <BenefitsSection />


          {/* SECTION 7 - Innovation Section */}
          <section className="container mx-auto px-6 lg:px-20 py-12 lg:py-20">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Left - Content */}
              <div className="flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2 h-2 rounded-full bg-[#24544B]"></div>
                  <span className="font-body text-[#7B798C] text-base">Innovation</span>
                </div>

                <h2 className="font-heading text-[#1C4942] text-3xl md:text-[50px] leading-tight mb-6" style={{ letterSpacing: '-1px' }}>
                  Redefining dermatology with innovation
                </h2>

                <p className="font-body text-[#7B798C] text-base md:text-lg mb-8">
                  We stay at the forefront of dermatological advances, continuously adopting new technologies and techniques to provide the best possible care for our patients.
                </p>

                {/* Progress Bars */}
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="font-body text-[#1C4942] font-medium">Personalized Care</span>
                      <span className="font-body text-[#1C4942] font-medium">95%</span>
                    </div>
                    <div className="h-2 bg-[#F7F0F2] rounded-full ">
                      <div className="h-full bg-[#24544B] rounded-full" style={{ width: '95%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="font-body text-[#1C4942] font-medium">Advanced Treatments</span>
                      <span className="font-body text-[#1C4942] font-medium">85%</span>
                    </div>
                    <div className="h-2 bg-[#F7F0F2] rounded-full ">
                      <div className="h-full bg-[#24544B] rounded-full" style={{ width: '85%' }}></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right - Images */}
              <div className="relative">
                <div className="rounded-full  w-full aspect-square max-w-md mx-auto">
                  <img
                    src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=600&fit=crop"
                    alt="Innovation"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute bottom-0 right-0 rounded-full  w-32 h-32 border-4 border-white">
                  <img
                    src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=200&h=200&fit=crop&crop=face"
                    alt="Doctor"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Badge */}
                <div className="absolute top-8 -left-4 bg-white rounded-[20px] px-6 py-4 shadow-lg">
                  <p className="font-heading text-2xl text-[#1C4942]">27k</p>
                  <p className="font-body text-sm text-[#7B798C]">Customer Reviewed</p>
                </div>
              </div>
            </div>
          </section>

<AboutBenefitsSection />
          {/* SECTION 9 - Delivering Excellence */}
          <section className="bg-[#F7F0F2] lg:rounded-[30px] xl:rounded-30 mx-0 lg:mx-20 py-16 lg:py-[100px]">
            <div className="container mx-auto px-6 lg:px-[100px]">
              <div className="grid lg:grid-cols-2 gap-10 lg:gap-10 items-center">
                {/* Left - Content Panel */}
                <div className="order-2 lg:order-1">
                  {/* Section Label */}
                  <div className="flex items-center gap-2 mb-2.5">
                    <div className="w-2 h-2 rounded-full bg-[#24544B]"></div>
                    <span className="font-body text-[#7B798C] text-base font-medium">
                      Dedicated To You
                    </span>
                  </div>

                  {/* Heading */}
                  <h2
                    className="font-heading text-[#1C4942] text-3xl md:text-4xl lg:text-[50px] leading-tight lg:leading-[55px] mb-5"
                    style={{ letterSpacing: '-1px' }}
                  >
                    Delivering excellence every aspect of skincare
                  </h2>

                  {/* Subheading */}
                  <p className="font-body text-[#7B798C] text-base md:text-lg leading-relaxed max-w-[560px] mb-10 lg:mb-[50px]">
                    We are committed to providing unparalleled dermatology care,
                    combining expertise, innovation, and compassion to ensure the best outcomes.
                  </p>

                  {/* Numbered List */}
                  <div className="flex flex-col gap-8 lg:gap-[35px]">
                    {/* List Item 1 */}
                    <div className="grid grid-cols-[50px_1fr] gap-5 items-start">
                      <div className="w-[50px] h-[50px] bg-white rounded-[10px] flex items-center justify-center shadow-sm">
                        <span className="font-heading text-[#1C4942] text-[22px]">1</span>
                      </div>
                      <div>
                        <h3 className="font-heading text-[#1C4942] text-[22px] mb-1">
                          Custom Care
                        </h3>
                        <p className="font-body text-[#7B798C] text-lg leading-relaxed max-w-[480px]">
                          This helps us create a customized treatment plan that aligns with your specific needs and expectations.
                        </p>
                      </div>
                    </div>

                    {/* List Item 2 */}
                    <div className="grid grid-cols-[50px_1fr] gap-5 items-start">
                      <div className="w-[50px] h-[50px] bg-white rounded-[10px] flex items-center justify-center shadow-sm">
                        <span className="font-heading text-[#1C4942] text-[22px]">2</span>
                      </div>
                      <div>
                        <h3 className="font-heading text-[#1C4942] text-[22px] mb-1">
                          Tailored Advice
                        </h3>
                        <p className="font-body text-[#7B798C] text-lg leading-relaxed max-w-[480px]">
                          Based on your consultation, we develop a personalized treatment plan designed to address your specific skin concerns.
                        </p>
                      </div>
                    </div>

                    {/* List Item 3 */}
                    <div className="grid grid-cols-[50px_1fr] gap-5 items-start">
                      <div className="w-[50px] h-[50px] bg-white rounded-[10px] flex items-center justify-center shadow-sm">
                        <span className="font-heading text-[#1C4942] text-[22px]">3</span>
                      </div>
                      <div>
                        <h3 className="font-heading text-[#1C4942] text-[22px] mb-1">
                          Expert Guidance
                        </h3>
                        <p className="font-body text-[#7B798C] text-lg leading-relaxed max-w-[480px]">
                          Your skin's health is our priority, so we provide ongoing care and follow-up. After your treatment, we monitor your progress.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right - Image Panel with Floating Card */}
                <div className="relative order-1 lg:order-2 w-full lg:w-[90%] ml-auto">
                  {/* Main Image */}
                  <img
                    src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=700&h=800&fit=crop"
                    alt="Dermatology Care"
                    className="w-full h-auto rounded-[30px] object-cover"
                  />

                  {/* Floating Service Card */}
                  <div className="absolute -right-5 lg:-right-10 top-10 lg:top-[60px] w-[240px] lg:w-[260px] bg-white rounded-[30px] shadow-lg p-6 lg:p-[30px_25px] flex flex-col gap-8">
                    {/* Service Item 1 */}
                    <div className="flex flex-col gap-2">
                      <svg
                        className="w-10 h-10 text-[#1C4942]"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <rect x="3" y="3" width="7" height="7" />
                        <rect x="14" y="3" width="7" height="7" />
                        <rect x="14" y="14" width="7" height="7" />
                        <rect x="3" y="14" width="7" height="7" />
                      </svg>
                      <h4 className="font-heading text-[#1C4942] text-xl">
                        Skin Rejuvenation
                      </h4>
                      <p className="font-body text-[#7B798C] text-base leading-6">
                        From preventive care to specialized.
                      </p>
                    </div>

                    {/* Service Item 2 */}
                    <div className="flex flex-col gap-2">
                      <svg
                        className="w-10 h-10 text-[#1C4942]"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M3 3h7v7H3zM14 3h7v7h-7zM14 14h7v7h-7zM3 14h7v7H3z" />
                      </svg>
                      <h4 className="font-heading text-[#1C4942] text-xl">
                        Facial Contouring
                      </h4>
                      <p className="font-body text-[#7B798C] text-base leading-6">
                        From preventive care to specialized.
                      </p>
                    </div>

                    {/* Service Item 3 */}
                    <div className="flex flex-col gap-2">
                      <svg
                        className="w-10 h-10 text-[#1C4942]"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M20 7h-4V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v3H4a2 2 0 00-2 2v11a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2z" />
                      </svg>
                      <h4 className="font-heading text-[#1C4942] text-xl">
                        Youthful Glow
                      </h4>
                      <p className="font-body text-[#7B798C] text-base leading-6">
                        From preventive care to specialized.
                      </p>
                    </div>
                  </div>
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
