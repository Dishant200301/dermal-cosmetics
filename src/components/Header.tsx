import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import { ArrowIcon } from './icons';

const Logo = () => (
  <Link to="/" className="flex items-center gap-2">
    <div className="w-10 h-10 bg-deep-green-800 rounded-lg flex items-center justify-center">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 3C12 3 8 7 8 12C8 17 12 21 12 21C12 21 16 17 16 12C16 7 12 3 12 3Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 8V12" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M5 9C5 9 7 11 12 11C17 11 19 9 19 9" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    </div>
    <span className="font-heading text-2xl text-deep-green-900">Dermal.</span>
  </Link>
);

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Blog', path: '/blog' },
];

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="w-full sticky top-0 z-50 bg-[#fef7f8]">
      <div className="container mx-auto px-4 lg:px-8">
        <nav className="flex items-center justify-between h-20">
          <Logo />

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  className={`font-body text-lg font-medium transition-colors duration-200 ${
                    location.pathname === link.path
                    ? 'text-deep-green-900'
                    : 'text-text-gray-400 hover:text-deep-green-900'
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <Link
            to="/contact"
            className="hidden md:inline-flex btn-primary text-base "
          >
            Contact Us
            <ArrowIcon className="w-4 h-4 ml-2" />
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-deep-green-900"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 right-0 bg-light-pink-100 border-t border-divider-gray-200 shadow-lg">
            <ul className="flex flex-col p-4 gap-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className={`block py-3 px-4 font-body text-lg font-medium rounded-lg transition-colors ${
                      location.pathname === link.path
                      ? 'text-deep-green-900 bg-white'
                      : 'text-text-gray-400 hover:text-deep-green-900 hover:bg-white'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/contact"
                  className="btn-primary w-full justify-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact Us
                  <ArrowIcon className="w-4 h-4 ml-2" />
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};
