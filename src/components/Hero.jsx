import { motion } from 'framer-motion';

const Hero = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-grid opacity-100"></div>
      
      {/* Animated gradient orbs - scattered */}
      <div className="absolute top-20 left-10 w-[500px] h-[500px] bg-blue-600/15 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-32 right-20 w-[450px] h-[450px] bg-blue-500/15 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '3s' }}></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-blue-400/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '6s' }}></div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20 text-center"
      >
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 backdrop-blur-sm border border-blue-500/20 rounded-full mb-8 animate-float">
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
          <span className="text-sm text-blue-400 font-medium tracking-wide">Premium Software Agency</span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-[1.1] tracking-tight">
          <span className="block text-white mb-2">We Build Custom</span>
          <span className="block text-gradient mb-2">Software That Moves</span>
          <span className="block text-white">Businesses Forward</span>
        </h1>

        {/* Sub-headline */}
        <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
          Websites, apps, and tailored digital products — built fast, built beautifully, built for growth.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <button 
            onClick={() => scrollToSection('contact')}
            className="px-8 py-3 bg-blue-600 text-white hover:bg-blue-700 rounded-lg transition-all text-sm font-medium"
          >
            Start Your Project
          </button>
          <button 
            onClick={() => scrollToSection('portfolio')}
            className="px-8 py-3 bg-transparent border border-white/20 hover:border-white/40 hover:bg-white/5 text-white rounded-lg text-sm font-medium transition-all"
          >
            View Our Work
          </button>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap justify-center items-center gap-12 text-sm">
          <div className="text-center group">
            <div className="text-3xl font-bold text-gradient mb-1.5 group-hover:scale-110 transition-transform">50+</div>
            <div className="text-gray-500 uppercase tracking-wider text-xs">Projects Delivered</div>
          </div>
          <div className="text-center group">
            <div className="text-3xl font-bold text-gradient mb-1.5 group-hover:scale-110 transition-transform">100%</div>
            <div className="text-gray-500 uppercase tracking-wider text-xs">Client Satisfaction</div>
          </div>
          <div className="text-center group">
            <div className="text-3xl font-bold text-gradient mb-1.5 group-hover:scale-110 transition-transform">5+</div>
            <div className="text-gray-500 uppercase tracking-wider text-xs">Years Experience</div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
