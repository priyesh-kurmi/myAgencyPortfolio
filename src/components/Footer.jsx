import { Link, useNavigate, useLocation } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();
  const location = useLocation();

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
  };

  const footerLinks = {
    company: [
      { name: 'About', id: 'about' },
      { name: 'Services', id: 'services' },
      { name: 'Portfolio', id: 'portfolio' },
      { name: 'Contact', id: 'contact' }
    ],
    services: [
      'Web Development',
      'Mobile Apps',
      'UI/UX Design',
      'Custom Software'
    ],
    social: [
      { name: 'Twitter', url: '#' },
      { name: 'LinkedIn', url: '#' },
      { name: 'GitHub', url: '#' },
      { name: 'Dribbble', url: '#' }
    ]
  };

  return (
    <footer className="relative bg-black border-t border-blue-500/10">
      <div className="absolute inset-0 bg-blue-600/5 blur-3xl"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Column */}
          <div>
            <h3 className="text-2xl lg:text-3xl font-medium text-white mb-4" style={{ fontFamily: '"Brush Script MT", "Lucida Handwriting", "Dancing Script", cursive' }}>Webscon</h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Building custom software that moves businesses forward.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold mb-5 text-white text-lg">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-semibold mb-5 text-white text-lg">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((service, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection('services')}
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold mb-5 text-white text-lg">Stay Updated</h4>
            <p className="text-gray-400 text-sm mb-4 leading-relaxed">
              Subscribe to our newsletter for the latest updates.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-3 bg-black border border-blue-500/20 rounded-xl focus:outline-none focus:border-blue-500/60 transition-all text-sm text-white placeholder-gray-500"
              />
              <button className="px-4 py-3 bg-blue-600 text-white hover:bg-blue-700 rounded-xl transition-all hover:scale-105 glow-blue-strong">
                →
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-blue-500/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>© {currentYear} Webscon. All rights reserved.</p>
            <div className="flex gap-6">
              <Link to="/privacy-policy" className="hover:text-blue-400 transition-colors">Privacy Policy</Link>
              <Link to="/terms-of-service" className="hover:text-blue-400 transition-colors">Terms of Service</Link>
              <Link to="/cookie-policy" className="hover:text-blue-400 transition-colors">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
