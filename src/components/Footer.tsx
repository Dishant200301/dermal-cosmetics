import { Link } from 'react-router-dom';
import { ArrowRight, Phone, Headphones, Facebook, Instagram, Dribbble } from 'lucide-react';
import { useState } from 'react';

export const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  return (
    <footer className="bg-[#FEF7F8] pt-2 lg:pt-0">
      <div className=" mx-auto px-2 pb-2 lg:pb-6 lg:px-4">
        {/* Main Footer Content */}
        <div className="bg-[#24544B] rounded-[30px] px-6 sm:px-8 lg:px-16 pt-16 lg:pt-20 pb-12 lg:pb-16 relative overflow-hidden">
          {/* Decorative Leaf - Bottom Left */}
          <svg
            className="absolute bottom-0 left-0 w-32 h-32 lg:w-40 lg:h-40 opacity-10"
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

          {/* Decorative Leaf - Top Right */}
          <svg
            className="absolute top-8 right-8 w-32 h-32 lg:w-40 lg:h-40 opacity-10"
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

          {/* 4 Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 relative z-10">
            {/* Column 1: Brand + Newsletter */}
            <div className="lg:col-span-1">
              {/* Logo */}
              <Link to="/" className="flex items-center gap-2.5 mb-5">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M12 3C12 3 8 7 8 12C8 17 12 21 12 21C12 21 16 17 16 12C16 7 12 3 12 3Z"
                      stroke="#24544B"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 8V12"
                      stroke="#24544B"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <span className="font-heading text-[28px] text-white">Dermal.</span>
              </Link>

              {/* Description */}
              <p className="font-body text-white text-base lg:text-lg leading-relaxed mb-6 max-w-sm">
                With a passion for skin health, Dermal combines the latest technologies.
              </p>

              {/* Email Subscribe */}
              <form onSubmit={handleSubmit} className="flex items-center bg-white rounded-lg h-[60px] p-1.5">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 bg-transparent px-4 font-body text-[#7B798C] placeholder:text-[#7B798C] outline-none"
                  required
                />
                <button
                  type="submit"
                  className="w-[50px] h-[50px] bg-[#24544B] rounded-lg flex items-center justify-center hover:bg-[#1C4942] transition-colors"
                  aria-label="Subscribe"
                >
                  <ArrowRight className="w-5 h-5 text-white" />
                </button>
              </form>
            </div>

            {/* Column 2: Contact Us */}
            <div>
              <h3 className="font-heading text-[22px] text-white mb-6">Contact Us</h3>
              <div className="space-y-5">
                {/* For more information */}
                <div className="flex items-start gap-4">
                  <div className="w-[50px] h-[50px] bg-white border-2 border-[#24544B] rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-[#24544B]" />
                  </div>
                  <div>
                    <p className="font-body text-white/80 text-sm mb-1">For more information</p>
                    <p className="font-body text-white text-base lg:text-lg">(702) 555-0122</p>
                  </div>
                </div>

                {/* Emergency toll free */}
                <div className="flex items-start gap-4">
                  <div className="w-[50px] h-[50px] bg-white rounded-full flex items-center justify-center flex-shrink-0">
                    <Headphones className="w-5 h-5 text-[#24544B]" />
                  </div>
                  <div>
                    <p className="font-body text-white/80 text-sm mb-1">Emergency toll free no</p>
                    <p className="font-body text-white text-base lg:text-lg">(219) 555-0114</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Column 3: Get In Touch */}
            <div>
              <h3 className="font-heading text-[22px] text-white mb-6">Get In Touch</h3>
              <div className="space-y-5">
                {/* Location */}
                <div>
                  <p className="font-body text-white/80 text-sm mb-1">Location</p>
                  <p className="font-body text-white text-base leading-relaxed">
                    6391 Elgin St. Santa Ana
                    <br />
                    Celina, Delaware 10299
                  </p>
                </div>

                {/* Email */}
                <div>
                  <p className="font-body text-white/80 text-sm mb-1">Email</p>
                  <p className="font-body text-white text-base">info@domain.com</p>
                </div>
              </div>
            </div>

            {/* Column 4: Quick Links */}
            <div>
              <h3 className="font-heading text-[22px] text-white mb-6">Quick Link</h3>
              <ul className="space-y-3.5">
                <li>
                  <Link
                    to="/"
                    className="font-body text-white text-lg hover:text-white/80 transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="font-body text-white text-lg hover:text-white/80 transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services"
                    className="font-body text-white text-lg hover:text-white/80 transition-colors"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="font-body text-white text-lg hover:text-white/80 transition-colors"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 lg:mt-16 pt-8 border-t border-white/[0.14] flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
            {/* Copyright */}
            <p className="font-body text-white text-base lg:text-lg">
              Copyright © 2025 All Rights Reserved.
            </p>

            {/* Social Media */}
            <div className="flex items-center gap-4">
              <span className="font-body text-white text-base lg:text-lg mr-2">
                Follow Us On Social
              </span>
              <a
                href="#"
                className="w-10 h-10 bg-white rounded-[10px] flex items-center justify-center hover:bg-white/90 transition-colors"
                aria-label="Dribbble"
              >
                <Dribbble className="w-5 h-5 text-[#24544B]" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white rounded-[10px] flex items-center justify-center hover:bg-white/90 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-[#24544B]" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white rounded-[10px] flex items-center justify-center hover:bg-white/90 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-[#24544B]" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
