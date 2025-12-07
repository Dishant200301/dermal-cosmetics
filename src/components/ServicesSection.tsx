import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Globe, Clipboard } from 'lucide-react';
import treatment1 from '@/assets/treatment-1.jpg';
import treatment2 from '@/assets/treatment-2.jpg';
import treatment3 from '@/assets/treatment-3.jpg';

const services = [
  {
    title: 'Dermal Fillers',
    description: 'From preventive care to specialized treatments, our wide range.',
    image: treatment1,
    icon: <Sparkles className="w-6 h-6" />,
  },
  {
    title: 'Chemical Peels',
    description: 'From preventive care to specialized treatments, our wide range.',
    image: treatment2,
    icon: <Globe className="w-6 h-6" />,
  },
  {
    title: 'Acne Treatment',
    description: 'From preventive care to specialized treatments, our wide range.',
    image: treatment3,
    icon: <Clipboard className="w-6 h-6" />,
  },
];

export const ServicesSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className=" bg-[#fef7f8] px-2 py-16 lg:py-24 relative">
      <div className="w-full bg-[#f7f0f2] lg:rounded-[30px] xl:rounded-[50px] py-10 px-0 lg:px-[10px] lg:py-12">
      {/* Decorative leaf */}
      <svg className="absolute bottom-20 left-0 w-32 h-32 opacity-30" viewBox="0 0 100 100" fill="none">
        <path d="M20 80C40 70 50 50 50 20C30 30 20 50 20 80Z" stroke="currentColor" strokeWidth="1" className="text-deep-green-800"/>
        <path d="M30 70C45 62 52 48 50 25" stroke="currentColor" strokeWidth="1" className="text-deep-green-800"/>
      </svg>

      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="section-label justify-center mb-4">Our Services</span>
          <h2 className="font-heading text-3xl lg:text-5xl text-deep-green-900 mb-4">
            Comprehensive dermatology services<br />for every skin need
          </h2>
          <p className="font-body text-lg text-text-gray-400 max-w-2xl mx-auto">
            From preventive care to specialized treatments, our wide range of services is designed to support your health at every stage.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="relative overflow-hidden rounded-[30px] h-[324px] lg:h-[424px] cursor-pointer group"
              onClick={() => setActiveIndex(index)}
            >
              <img
                src={service.image}
                alt={service.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep-green-900/90 via-deep-green-900/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                <div className="w-14 h-14 bg-light-pink-100 rounded-xl flex items-center justify-center mb-4">
                  <span className="text-deep-green-900">{service.icon}</span>
                </div>
                <h3 className="font-heading text-xl text-white mb-2">{service.title}</h3>
                <p className="font-body text-white/80">{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mb-8">
          {services.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`transition-all duration-300 rounded-full ${
                index === activeIndex
                  ? 'w-8 h-2.5 bg-deep-green-900'
                  : 'w-2.5 h-2.5 bg-text-gray-400'
              }`}
              aria-label={`Go to service ${index + 1}`}
            />
          ))}
        </div>

        {/* CTA */}
        <p className="text-center font-body text-lg text-text-gray-400">
          Professional electrical solutions for every need.{' '}
          <Link to="/contact" className="font-bold text-deep-green-900 hover:underline">
            Contact Us Today!
          </Link>
        </p>
      </div>
      </div>
    </section>
  );
};
