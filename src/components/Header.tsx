import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { ArrowIcon } from './icons';
import { AnimatedButton } from './AnimatedButton';

const Logo = () => (
  <Link to="/" className="flex items-center  gap-2">
    <img src="/image/favicon.png" alt="logo" />
    <span className="font-heading font-bold text-2xl text-deep-green-900">Dermal.</span>
  </Link>
);

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact Us', path: '/contact' },
];

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const menuRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  // Focus trap for accessibility
  useEffect(() => {
    if (isMenuOpen && closeButtonRef.current) {
      closeButtonRef.current.focus();
    }
  }, [isMenuOpen]);

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  // Filter nav links for desktop (exclude Contact Us)
  const desktopNavLinks = navLinks.filter(link => link.name !== 'Contact Us');

  return (
    <>
      <header className="w-full sticky top-0 z-50 bg-[#f8f1f3]">
        <div className="container mx-auto px-4 lg:px-8 xl:px-24">
          <nav className="flex items-center justify-between h-20">
            <Logo />

            {/* Desktop Navigation - Only on lg+ (1024px+) */}
            <ul className="hidden lg:flex items-center gap-8">
              {desktopNavLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className={`font-body text-lg font-medium transition-colors duration-200 ${location.pathname === link.path
                      ? 'text-deep-green-900'
                      : 'text-text-gray-400 hover:text-deep-green-900'
                      }`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Desktop CTA Button - Only on lg+ (1024px+) */}
            <AnimatedButton to="/contact" variant="primary" className="hidden lg:inline-flex w-46 h-12 text-base">
              Contact Us
            </AnimatedButton>

            {/* Mobile/Tablet Hamburger Button - Shows on mobile + tablet (0-1023px) */}
            <button
              className="lg:hidden p-2 text-white bg-[#1C4942] hover:bg-[#24544B] rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(true)}
              aria-label="Open navigation menu"
              aria-expanded={isMenuOpen}
            >
              <Menu className="w-6 h-6" />
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile/Tablet Full-Page Menu - Shows on mobile + tablet (0-1023px) */}
      <div
        ref={menuRef}
        className={`fixed inset-0 bg-white z-[100] lg:hidden transform transition-transform duration-300 ease-out ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        <div className="flex flex-col h-full">
          {/* Menu Header with Logo and Close Button */}
          <div className="flex items-center justify-between p-6 border-b border-gray-100">
            <Logo />
            <button
              ref={closeButtonRef}
              onClick={closeMenu}
              className="p-2 text-white bg-[#1C4942] hover:bg-[#24544B] rounded-lg transition-colors"
              aria-label="Close navigation menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Menu Navigation Links */}
          <nav className="flex-1 px-8 pt-4">
            <ul className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="flex items-center justify-between py-2 font-body text-lg font-medium text-[#1C4942] hover:text-[#24544B] transition-colors"
                    onClick={closeMenu}
                  >
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>


        </div>
      </div>
    </>
  );
};
