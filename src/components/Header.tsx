import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { ArrowIcon } from './icons';

const Logo = () => (
  <Link to="/" className="flex items-center  gap-2">
<svg width="32" height="26" viewBox="0 0 32 26" fill="none" className="w-10 h-10 pb-1" xmlns="http://www.w3.org/2000/svg">
<path d="M31.5727 10.3919C31.0479 9.85666 30.2153 9.51366 25.8494 11.1739C24.2623 11.7773 22.188 12.6778 20.5068 13.6109C20.2736 13.0077 20.0691 12.5115 19.939 12.2022C17.5465 6.52246 16.5784 6.52246 16.0001 6.52246C15.4214 6.52246 14.4533 6.52246 12.0611 12.2022C11.9308 12.5115 11.7262 13.0077 11.4933 13.6109C9.81181 12.6778 7.73781 11.7773 6.15071 11.1739C1.78481 9.51366 0.952546 9.85666 0.427416 10.3919C0.018286 10.8091 -0.666114 11.507 1.58051 17.2485C2.06651 18.4899 3.76641 22.658 5.24371 24.1643C6.42951 25.3736 8.01141 25.9868 9.59611 25.9868C10.706 25.9868 11.8171 25.6847 12.7949 25.0771C13.7286 25.6617 14.8262 25.9997 16.0001 25.9997C17.1737 25.9997 18.2716 25.6617 19.2052 25.0771C20.1833 25.685 21.2941 25.9874 22.4043 25.9874C23.9888 25.9874 25.5703 25.3742 26.7565 24.1646C28.2337 22.6583 29.9339 18.4902 30.4196 17.2488C32.6662 11.507 31.9815 10.8088 31.5727 10.3919ZM6.89331 22.4815C5.48501 21.0455 3.02071 14.9336 2.44641 12.4561C4.27671 12.9052 8.2121 14.4479 10.6841 15.8732C10.2323 17.2655 9.85561 18.7271 9.85561 19.7334C9.85561 21.0771 10.2741 22.3224 10.9828 23.3436C9.60871 23.8887 7.98241 23.5922 6.89331 22.4815ZM12.1888 19.7337C12.1888 17.7011 14.6888 11.5931 15.9998 9.43236C17.3107 11.5931 19.8107 17.7008 19.8107 19.7337C19.8107 21.8766 18.1012 23.6199 15.9998 23.6199C13.8983 23.6199 12.1888 21.8766 12.1888 19.7337ZM25.1062 22.4815C24.0165 23.5925 22.3908 23.889 21.0168 23.3439C21.7257 22.3227 22.1442 21.0774 22.1442 19.7334C22.1442 18.7271 21.7675 17.2652 21.3157 15.8732C23.7877 14.4479 27.7235 12.9052 29.5534 12.4561C28.9789 14.9336 26.5145 21.0455 25.1062 22.4815Z" fill="#24544B"/>
<path d="M15.9992 3.7964C17.0273 3.7964 17.8607 2.9466 17.8607 1.8982C17.8607 0.8499 17.0273 0 15.9992 0C14.9711 0 14.1377 0.8499 14.1377 1.8982C14.1377 2.9463 14.9711 3.7964 15.9992 3.7964Z" fill="#24544B"/>
<path d="M24.339 9.29347C25.3671 9.29347 26.2006 8.44357 26.2006 7.39527C26.2006 6.34687 25.3671 5.49707 24.339 5.49707C23.311 5.49707 22.4775 6.34687 22.4775 7.39527C22.4775 8.44357 23.311 9.29347 24.339 9.29347Z" fill="#24544B"/>
<path d="M7.66131 9.29347C8.68941 9.29347 9.52281 8.44357 9.52281 7.39527C9.52281 6.34687 8.68941 5.49707 7.66131 5.49707C6.63321 5.49707 5.7998 6.34687 5.7998 7.39527C5.7998 8.44357 6.63321 9.29347 7.66131 9.29347Z" fill="#24544B"/>
</svg>
    <span className="font-heading font-bold text-2xl text-deep-green-900">Dermal.</span>
  </Link>
);

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Blog', path: '/blog' },
];

export const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();
  const sidebarRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Close sidebar on route change
  useEffect(() => {
    setIsSidebarOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when sidebar is open
  useEffect(() => {
    if (isSidebarOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isSidebarOpen]);

  // Focus trap for accessibility
  useEffect(() => {
    if (isSidebarOpen && closeButtonRef.current) {
      closeButtonRef.current.focus();
    }
  }, [isSidebarOpen]);

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isSidebarOpen) {
        setIsSidebarOpen(false);
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isSidebarOpen]);

  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <>
      <header className="w-full sticky top-0 z-50 bg-[#fef7f8]">
        <div className="container mx-auto px-4 lg:px-8 xl:px-24">
          <nav className="flex items-center justify-between h-20">
            <Logo />

            {/* Desktop Navigation - Only on lg+ (1024px+) */}
            <ul className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
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
            <Link
              to="/contact"
              className="hidden lg:inline-flex btn-primary w-46 h-12 text-base "
            >
              Contact Us
              <ArrowIcon className="w-4 h-4 ml-2" />
            </Link>

            {/* Mobile/Tablet Hamburger Button - Shows on mobile + tablet (0-1023px) */}
            <button
              className="lg:hidden p-2 text-deep-green-900 hover:bg-white/50 rounded-lg transition-colors"
              onClick={() => setIsSidebarOpen(true)}
              aria-label="Open navigation menu"
              aria-expanded={isSidebarOpen}
            >
              <Menu className="w-6 h-6" />
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile/Tablet Sidebar Drawer - Shows on mobile + tablet (0-1023px) */}
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-[60] lg:hidden transition-opacity duration-300 ${isSidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        onClick={closeSidebar}
        aria-hidden="true"
      />

      {/* Sidebar */}
      <aside
        ref={sidebarRef}
        className={`fixed top-0 left-0 h-full w-[280px] sm:w-[320px] bg-[#fef7f8] shadow-2xl z-[70] lg:hidden transform transition-transform duration-300 ease-out ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        <div className="flex flex-col h-full">
          {/* Sidebar Header */}
          <div className="flex items-center justify-between p-6 border-b border-[#D9D9D9]">
            <Logo />
            <button
              ref={closeButtonRef}
              onClick={closeSidebar}
              className="p-2 text-deep-green-900 hover:bg-white rounded-lg transition-colors"
              aria-label="Close navigation menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Sidebar Navigation Links */}
          <nav className="flex-1 overflow-y-auto py-6 px-4">
            <ul className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className={`block py-4 px-5 font-body text-lg font-medium rounded-[14px] transition-all duration-200 ${location.pathname === link.path
                      ? 'text-deep-green-900 bg-white shadow-sm'
                      : 'text-text-gray-400 hover:text-deep-green-900 hover:bg-white/70'
                      }`}
                    onClick={closeSidebar}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Sidebar Footer with CTA */}
          <div className="p-6 border-t border-[#D9D9D9]">
            <Link
              to="/contact"
              className="btn-primary w-full justify-center text-base"
              onClick={closeSidebar}
            >
              Contact Us
              <ArrowIcon className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </aside>
    </>
  );
};
