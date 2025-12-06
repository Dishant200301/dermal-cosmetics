import { ArrowRight, Check, Play, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import doctorProcedure from '@/assets/doctor-procedure.jpg';
import treatment1 from '@/assets/treatment-1.jpg';

const RotatingBadgeDark = () => (
  <div className="absolute -right-4 top-1/3 z-10">
    <div className="relative w-[100px] h-[100px]">
      <svg className="w-full h-full animate-[spin_15s_linear_infinite]" viewBox="0 0 100 100">
        <defs>
          <path
            id="circlePathSmall"
            d="M 50, 50 m -38, 0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0"
          />
        </defs>
        <circle cx="50" cy="50" r="50" className="fill-deep-green-800" />
        <text className="fill-white text-[10px] font-inter uppercase tracking-wide">
          <textPath href="#circlePathSmall">
            Contact Us • Contact Us •
          </textPath>
        </text>
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <ArrowRight className="w-4 h-4 text-white -rotate-45" />
      </div>
    </div>
  </div>
);

const benefits = [
  'Commitment to Excellence in Skin Health',
  'State-of-the-Art Facility and Technology',
  'Trusted by Thousands of Satisfied Patients',
];

export const WhyChooseUs = () => {
  return (
    <section className="bg-light-pink-100 py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Images */}
          <div className="relative">
            <div className="relative">
              <img
                src={doctorProcedure}
                alt="Doctor performing procedure"
                className="rounded-20 w-full max-w-md object-cover h-[350px] lg:h-[420px]"
              />
              <RotatingBadgeDark />
            </div>
            <img
              src={treatment1}
              alt="Patient receiving treatment"
              className="absolute -bottom-8 left-1/4 rounded-20 w-48 lg:w-64 h-36 lg:h-48 object-cover shadow-xl border-4 border-light-pink-100"
            />
          </div>

          {/* Right - Content */}
          <div className="mt-12 lg:mt-0">
            <span className="section-label mb-4 block">About Us</span>
            <h2 className="font-heading text-3xl lg:text-5xl text-deep-green-900 mb-6 leading-tight">
              Why choose us for all your dermatology needs
            </h2>
            <p className="font-body text-lg text-text-gray-400 mb-8">
              We're dedicated to helping you achieve and maintain beautiful, healthy skin. Trust us to provide exceptional care tailored to you.
            </p>

            <ul className="space-y-4 mb-8">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded bg-deep-green-800 flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="font-body text-lg text-deep-green-900">{benefit}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-4 mb-8">
              <Link to="/about" className="btn-primary">
                About More
                <ArrowRight className="w-4 h-4" />
              </Link>
              <button className="btn-outline">
                <Play className="w-4 h-4 fill-current" />
                Play Session
              </button>
            </div>

            {/* Team Counter Card */}
            <div className="inline-flex items-center gap-4 bg-deep-green-900 rounded-20 p-6">
              <Users className="w-8 h-8 text-white" />
              <div>
                <p className="font-heading text-3xl text-white">29+</p>
                <p className="font-body text-white/80">Team Members</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
