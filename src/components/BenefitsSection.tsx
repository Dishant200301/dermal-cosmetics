import { Layers, Grid3X3, Shield, Smile, Database, ClipboardList } from 'lucide-react';
import benefitsModel from '@/assets/benefits-model.jpg';

const leftBenefits = [
  {
    icon: <ClipboardList className="w-6 h-6" />,
    title: 'Expert Dermatologists',
    description: 'Our team consists board-certified dermatologists with experience',
  },
  {
    icon: <Database className="w-6 h-6" />,
    title: 'Advanced Technology',
    description: 'We use cutting-edge equipment and innovative techniques',
  },
  {
    icon: <Grid3X3 className="w-6 h-6" />,
    title: 'Personalized Care',
    description: 'Every treatment plan is tailored to your unique skin type, concerns',
  },
];

const rightBenefits = [
  {
    icon: <Layers className="w-6 h-6" />,
    title: 'Comprehensive Services',
    description: 'From medical dermatology cosmetic enhancements, we offer a treatment',
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: 'High Safety Standards',
    description: 'Your safety is our priority. We adhere to strict hygiene and safety protocols',
  },
  {
    icon: <Smile className="w-6 h-6" />,
    title: 'Comfortable Environment',
    description: 'Our clinic provides a welcoming and stress-free atmosphere',
  },
];

export const BenefitsSection = () => {
  return (
    <section className="bg-deep-green-900 py-16 lg:py-24 relative overflow-hidden">
      {/* Decorative leaf */}
      <svg className="absolute bottom-0 right-0 w-48 h-48 opacity-20" viewBox="0 0 100 100" fill="none">
        <path d="M80 80C60 70 50 50 50 20C70 30 80 50 80 80Z" stroke="currentColor" strokeWidth="1" className="text-white"/>
        <path d="M70 70C55 62 48 48 50 25" stroke="currentColor" strokeWidth="1" className="text-white"/>
        <circle cx="85" cy="85" r="8" stroke="currentColor" strokeWidth="1" className="text-white"/>
      </svg>

      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 text-white/80 font-body mb-4">
            <span className="w-2 h-2 rounded-full bg-white/80"></span>
            Our Benefits
          </span>
          <h2 className="font-heading text-3xl lg:text-5xl text-white mb-4">
            Exceptional dermatology, every step of<br className="hidden lg:block" /> the way
          </h2>
          <p className="font-body text-lg text-white/70 max-w-2xl mx-auto">
            Experience personalized care, advanced treatments, and visible results with our expert dermatology services.
          </p>
        </div>

        {/* Benefits Grid with Center Image */}
        <div className="grid lg:grid-cols-3 gap-8 items-center">
          {/* Left Benefits */}
          <div className="space-y-8">
            {leftBenefits.map((benefit) => (
              <div key={benefit.title} className="flex items-start gap-4 text-right lg:flex-row-reverse">
                <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-deep-green-900">{benefit.icon}</span>
                </div>
                <div>
                  <h3 className="font-heading text-xl text-white mb-2">{benefit.title}</h3>
                  <p className="font-body text-white/70">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Center Image */}
          <div className="flex justify-center order-first lg:order-none">
            <div className="relative">
              <div className="w-64 h-80 lg:w-72 lg:h-96 rounded-[100px] overflow-hidden bg-deep-green-800">
                <img
                  src={benefitsModel}
                  alt="Happy woman with clear skin"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right Benefits */}
          <div className="space-y-8">
            {rightBenefits.map((benefit) => (
              <div key={benefit.title} className="flex items-start gap-4">
                <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-deep-green-900">{benefit.icon}</span>
                </div>
                <div>
                  <h3 className="font-heading text-xl text-white mb-2">{benefit.title}</h3>
                  <p className="font-body text-white/70">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
