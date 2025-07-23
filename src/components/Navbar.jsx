import { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  // Detect scroll for background styling
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scroll jump and maintain position
  useEffect(() => {
    if (menuOpen) {
      const currentScroll = window.scrollY;
      setScrollPosition(currentScroll);

      document.body.style.position = 'fixed';
      document.body.style.top = `-${currentScroll}px`;
      document.body.style.left = '0';
      document.body.style.right = '0';
      document.body.style.width = '100%';
    } else {
      const scrollY = parseInt(document.body.style.top || '0') * -1;
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.left = '';
      document.body.style.right = '';
      document.body.style.width = '';
      document.body.style.overflow = '';
      window.scrollTo(0, scrollY || scrollPosition);
    }
  }, [menuOpen]);

  const navLinks = [
    { name: 'Home', id: 'hero' },
    { name: 'Case Studies', id: 'casestudies' },
    { name: 'Projects', id: 'projects' },
    { name: 'Problem Solving', id: 'problemsolving' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-[100] transition-all duration-300 ${
        scrolled
          ? 'bg-white/5 backdrop-blur-md border-b border-white/10'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2 sm:py-3 lg:py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            src="/images/m.png"
            alt="Logo M"
            className="h-3 sm:h-3 md:h-4 lg:h-6 object-contain"
          />

          <span className="text-white text-sm sm:text-sm md:text-lg lg:text-2xl font-bold tracking-wide">
            MyPortfolio
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex space-x-8 xl:space-x-12">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={`#${link.id}`}
              className="text-gray-300 hover:text-white transition-all duration-200 font-medium text-lg"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden">
          <button
            onClick={(e) => {
              e.preventDefault(); // prevent top jump
              setMenuOpen(!menuOpen);
            }}
            className="text-white text-lg sm:text-sm md:text-2xl focus:outline-none"
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Backdrop Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-[90] bg-black/40 backdrop-blur-sm transition-opacity duration-300"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* Right Side Slide Menu */}
      <div
        className={`fixed top-0 right-0 h-screen w-4/5 sm:w-3/5 md:w-2/5 z-[100] transition-transform duration-500 ease-in-out
          ${menuOpen ? 'translate-x-0' : 'translate-x-full'}
          bg-black/30 backdrop-blur-xl backdrop-saturate-150
          border-l border-white/10
          flex flex-col items-end px-6 pt-24 space-y-6`}
        style={{ isolation: 'isolate' }}
      >
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={`#${link.id}`}
            className="text-2xl text-white font-semibold hover:text-purple-300 transition duration-300"
            onClick={() => setMenuOpen(false)}
          >
            {link.name}
          </a>
        ))}
      </div>
    </header>
  );
}

export default Navbar;
