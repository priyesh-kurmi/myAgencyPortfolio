import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY < lastScrollY || currentScrollY < 10) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/5 transition-transform duration-300 ease-in-out ${
      isVisible ? 'translate-y-0' : '-translate-y-full'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="flex items-center gap-2">
              <svg className="w-8 h-8 text-blue-500" viewBox="0 0 40 40" fill="currentColor">
                <circle cx="8" cy="20" r="3"/>
                <circle cx="20" cy="20" r="3"/>
                <circle cx="32" cy="20" r="3"/>
              </svg>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-white transition-colors text-sm">
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-white transition-colors text-sm">
              About
            </button>
            <button onClick={() => scrollToSection('portfolio')} className="text-gray-300 hover:text-white transition-colors text-sm">
              Portfolio
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-300 hover:text-white transition-colors text-sm">
              Contact
            </button>
            <button className="text-gray-300 hover:text-white transition-colors text-sm">
              FAQ
            </button>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button onClick={() => scrollToSection('contact')} className="px-6 py-2 bg-blue-600 text-white hover:bg-blue-700 rounded-lg transition-all text-sm font-medium">
              Get In Touch
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-3">
              <button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-white transition-colors text-left text-sm">
                Home
              </button>
              <button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-white transition-colors text-left text-sm">
                About
              </button>
              <button onClick={() => scrollToSection('portfolio')} className="text-gray-300 hover:text-white transition-colors text-left text-sm">
                Portfolio
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-300 hover:text-white transition-colors text-left text-sm">
                Contact
              </button>
              <button className="text-gray-300 hover:text-white transition-colors text-left text-sm">
                FAQ
              </button>
              <button onClick={() => scrollToSection('contact')} className="px-6 py-2 bg-blue-600 text-white hover:bg-blue-700 rounded-lg transition-all text-sm font-medium mt-2">
                Get In Touch
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
