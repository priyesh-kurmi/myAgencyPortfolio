import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const features = [
    'Custom Solutions',
    'Modern Tech Stack',
    'Pixel Perfect Design',
    'Fast Delivery',
    'Clear Communication',
  ];

  return (
    <section className="relative h-[100dvh] flex items-center justify-center overflow-hidden bg-black">
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-grid opacity-100"></div>
      
      {/* Animated gradient orbs - blue only */}
      <div className="absolute top-20 left-10 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-blue-600/15 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-32 right-20 w-[250px] h-[250px] md:w-[450px] md:h-[450px] bg-blue-500/15 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '3s' }}></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] md:w-[400px] md:h-[400px] bg-blue-400/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '6s' }}></div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-full mx-auto px-0 sm:px-6 lg:px-8 py-8 sm:py-16 md:py-20 text-center"
      >
        {/* Star Rating Badge */}
        <div className="inline-flex items-center gap-2 px-3 sm:px-5 py-2 sm:py-2.5 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full mb-8 sm:mb-8">
          <div className="flex gap-0.5 sm:gap-1">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="text-xs sm:text-sm text-gray-300 font-medium">Trusted by 50+ happy clients</span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 sm:mb-6 leading-[1.15] tracking-tight px-6 sm:px-8">
          <span className="block text-white">We Build Custom</span>
          <span className="block text-gradient">Software That Moves</span>
          <span className="block text-gray-500 mt-1 sm:mt-2">Businesses Forward</span>
        </h1>

        {/* Sub-headline */}
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-400 mb-10 sm:mb-10 mx-auto font-light leading-relaxed px-6 sm:px-8 max-w-[90%] sm:max-w-3xl">
          Websites, apps, and tailored digital products — built fast, built beautifully, built for growth.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-4 justify-center items-center mb-14 sm:mb-16 md:mb-20 px-6 sm:px-8">
          <Link to="/contact" className="w-full sm:w-auto">
            <button className="w-full sm:w-auto px-6 sm:px-8 py-3 bg-blue-600 text-white hover:bg-blue-700 rounded-lg transition-all text-sm font-semibold">
              START YOUR PROJECT
            </button>
          </Link>
          <Link to="/projects" className="w-full sm:w-auto">
            <button className="w-full sm:w-auto px-6 sm:px-8 py-3 bg-white/10 backdrop-blur-sm border border-white/20 hover:border-white/40 hover:bg-white/20 text-white rounded-lg text-sm font-semibold transition-all">
              VIEW OUR WORK
            </button>
          </Link>
        </div>

        {/* Scrolling Feature Tags - only on mobile */}
        <div className="relative overflow-hidden md:overflow-visible">
          <div className="flex gap-4 sm:gap-6 md:gap-8 md:justify-center animate-scroll md:animate-none">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 bg-transparent border border-white/10 rounded-lg shrink-0">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-xs sm:text-sm text-gray-400 font-medium whitespace-nowrap">{feature}</span>
              </div>
            ))}
            {/* Duplicate for mobile scroll effect */}
            <div className="flex gap-4 sm:gap-6 md:hidden">
              {features.map((feature, index) => (
                <div key={`dup-${index}`} className="flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 bg-transparent border border-white/10 rounded-lg shrink-0">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-xs sm:text-sm text-gray-400 font-medium whitespace-nowrap">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
