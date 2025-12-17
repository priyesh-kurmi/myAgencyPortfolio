import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();
  const navigate = useNavigate();

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
    // If not on home page, navigate to home first
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
  };

  const handleHomeClick = () => {
    navigate('/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const handleLogoClick = () => {
    navigate('/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/5 transition-transform duration-300 ease-in-out ${
      isVisible ? 'translate-y-0' : '-translate-y-full'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 cursor-pointer" onClick={handleLogoClick}>
            <h1 className="text-2xl lg:text-3xl font-medium text-white transition-all duration-300" style={{ fontFamily: '"Brush Script MT", "Lucida Handwriting", "Dancing Script", cursive' }}>
              Webscon
            </h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 absolute left-1/2 -translate-x-1/2">
            <button onClick={handleHomeClick} className="text-gray-300 hover:text-white transition-colors text-sm">
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-white transition-colors text-sm">
              About
            </button>
            <button onClick={() => scrollToSection('portfolio')} className="text-gray-300 hover:text-white transition-colors text-sm">
              Portfolio
            </button>
            <Link to="/contact" className="text-gray-300 hover:text-white transition-colors text-sm">
              Contact
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link to="/contact">
              <button className="px-6 py-2 bg-blue-600 text-white hover:bg-blue-700 rounded-lg transition-all text-sm font-medium">
                Get In Touch
              </button>
            </Link>
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
                  <>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16h16" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute left-0 right-0 top-full bg-black/95 backdrop-blur-xl border-t border-white/10 shadow-2xl">
            <div className="max-w-7xl mx-auto px-6 py-6">
              <div className="flex flex-col space-y-1">
                <button onClick={handleHomeClick} className="text-left px-4 py-3 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-all">
                  Home
                </button>
                <button onClick={() => scrollToSection('about')} className="text-left px-4 py-3 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-all">
                  About
                </button>
                <button onClick={() => scrollToSection('portfolio')} className="text-left px-4 py-3 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-all">
                  Portfolio
                </button>
                <Link to="/contact" className="text-left px-4 py-3 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-all block" onClick={() => setIsMenuOpen(false)}>
                  Contact
                </Link>
                <div className="pt-4">
                  <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                    <button className="w-full px-6 py-3 bg-blue-600 text-white hover:bg-blue-700 rounded-lg transition-all text-sm font-medium shadow-lg shadow-blue-500/20">
                      Get In Touch
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
