import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Marquee } from '@/components/Marquee';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Check, Play, Star, Quote, MapPin, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import TestimonialSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection';
import { ProcessSection } from '@/components/ProcessSection';

const services = [
  {
    title: 'Dermal Fillers',
    description: 'From preventive care to specialized treatments, our wide range.',
    image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=600&h=800&fit=crop',
    icon: '💉',
  },
  {
    title: 'Chemical Peels',
    description: 'From preventive care to specialized treatments, our wide range.',
    image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=600&h=800&fit=crop',
    icon: '🧪',
  },
  {
    title: 'Acne Treatment',
    description: 'From preventive care to specialized treatments, our wide range.',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&h=800&fit=crop',
    icon: '✨',
  },
  {
    title: 'Skin Tightening',
    description: 'From preventive care to specialized treatments, our wide range.',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&h=800&fit=crop',
    icon: '🔬',
  },
  {
    title: 'Scar Revision',
    description: 'From preventive care to specialized treatments, our wide range.',
    image: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=600&h=800&fit=crop',
    icon: '💆',
  },
  {
    title: 'Wrinkle Reduction',
    description: 'From preventive care to specialized treatments, our wide range.',
    image: 'https://images.unsplash.com/photo-1560750588-73207b1ef5b8?w=600&h=800&fit=crop',
    icon: '🌟',
  },
];

const features = [
  'Expert Dermatologists',
  'Personalized Care',
  'Advanced Technology',
  'Comprehensive Services',
  'Effective Solutions',
  'Comfortable Environment',
];

const testimonials = [
  {
    quote: 'The experts at this clinic took the time to truly understand my condition and prescribed a treatment plan that worked wonders. The combination of medical treatments.',
    author: 'Jenny Wilson',
    role: 'Skin Expert',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face',
  },
  {
    quote: 'The experts at this clinic took the time to truly understand my condition and prescribed a treatment plan that worked wonders. The combination of medical treatments.',
    author: 'David Julio',
    role: 'Makeup Artist',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
  },
];

const brands = ['Logoipsum', 'Logoipsum', 'Logoipsum', 'Logoipsum', 'Logoipsum'];

const Services = () => {
  const { toast } = useToast();
  const [activeTestimonial, setActiveTestimonial] = useState(0);
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
        <title>Our Services - Dermal Dermatology Clinic</title>
        <meta name="description" content="Explore Dermal's comprehensive dermatology services including dermal fillers, chemical peels, acne treatment, and more." />
      </Helmet>
      <div className="min-h-screen bg-[#FEF7F8]">
        <Header />
        <main>
          {/* Hero Banner */}
          <section className=" mx-auto  lg:px-8 lg:pt-2">
            <div className="relative bg-[#24544B] lg:rounded-[30px] lg:h-[280px] md:h-[350px] h-[210px] flex flex-col items-center justify-center overflow-hidden">
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
                <path
                  d="M25 75C25 75 35 60 42 52C48 45 55 38 70 28"
                  stroke="white"
                  strokeWidth="1.5"
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
                <path
                  d="M75 25C75 25 65 40 58 48C52 55 45 62 30 72"
                  stroke="white"
                  strokeWidth="1.5"
                  fill="none"
                />
              </svg>

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
          </section>

        {/* Services Grid */}
<section className="container mx-auto px-6 lg:px-20 py-12 lg:py-20">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
    {services.map((service, index) => (
      <Link
        key={index}
        to={`/services/${service.title.toLowerCase().replace(/\s+/g, "-")}`}
        className="group relative w-full h-[424px] rounded-[30px] overflow-hidden cursor-pointer"
      >
        {/* Background Image */}
        <img
          src={service.image}
          alt={service.title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Gradient Overlay EXACT from Figma */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(28, 73, 66, 0) 52.13%, rgba(28, 73, 66, 0.9) 81.58%)",
          }}
        />

        {/* CONTENT — Figma bottom position converted to responsive */}
        <div className="absolute left-6 right-6 lg:left-8 lg:right-8 bottom-10 flex flex-col">

          {/* ICON BOX */}
          <div
            className="w-[60px] h-[60px] rounded-[10px] flex items-center justify-center mb-5"
            style={{ backgroundColor: "#F7F0F2" }}
          >
            <span className="text-[30px] leading-none">{service.icon}</span>
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
    ))}
  </div>
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
