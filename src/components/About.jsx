import { motion } from 'framer-motion';

const About = () => {
  const focusAreas = [
    'Clean, modern design',
    'Robust engineering',
    'Fast delivery',
    'Transparent communication'
  ];

  return (
    <section id="about" className="py-20 bg-black relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-3xl"></div>
      
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10"
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="order-2 lg:order-1">
            <div className="inline-block px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-6">
              <span className="text-sm text-blue-400 font-medium uppercase tracking-widest">About Us</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-[1.1] text-white">
              Crafting Digital<br />
              <span className="text-gradient">Experiences</span> That<br />
              Actually Work
            </h2>
            
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              We're a small, sharp, and passionate team that designs and develops custom solutions for businesses. 
              From sleek websites to powerful mobile apps and fully bespoke systems — we turn ideas into real products that scale.
            </p>

            <div className="space-y-4 mb-8">
              <h3 className="text-lg font-semibold text-white uppercase tracking-wider">We focus on:</h3>
              <div className="grid sm:grid-cols-2 gap-5">
                {focusAreas.map((area, index) => (
                  <div key={index} className="flex items-center gap-4 group">
                    <div className="w-2 h-2 bg-blue-500 rounded-full group-hover:scale-150 transition-transform"></div>
                    <span className="text-gray-300 group-hover:text-white transition-colors">{area}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-blue-500/5 border border-blue-500/20 rounded-2xl p-6">
              <p className="text-lg text-white font-medium leading-relaxed">
                No fluff. No outsourcing. Just high-quality work delivered with care.
              </p>
            </div>
          </div>

          {/* Right Content - Visual Element */}
          <div className="order-1 lg:order-2">
            <div className="relative bg-blue-500/5 backdrop-blur-sm rounded-3xl p-8 border border-blue-500/20">
              <div className="space-y-6">
                {/* Stats */}
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-black/50 rounded-2xl p-6 border border-blue-500/10 hover:border-blue-500/30 transition-all group">
                    <div className="text-4xl font-bold text-gradient mb-2 group-hover:scale-110 transition-transform">50+</div>
                    <div className="text-sm text-gray-400 uppercase tracking-wide">Projects Delivered</div>
                  </div>
                  <div className="bg-black/50 rounded-2xl p-6 border border-blue-500/10 hover:border-blue-500/30 transition-all group">
                    <div className="text-4xl font-bold text-gradient mb-2 group-hover:scale-110 transition-transform">100%</div>
                    <div className="text-sm text-gray-400 uppercase tracking-wide">Client Satisfaction</div>
                  </div>
                  <div className="bg-black/50 rounded-2xl p-6 border border-blue-500/10 hover:border-blue-500/30 transition-all group">
                    <div className="text-4xl font-bold text-gradient mb-2 group-hover:scale-110 transition-transform">5+</div>
                    <div className="text-sm text-gray-400 uppercase tracking-wide">Years Experience</div>
                  </div>
                  <div className="bg-black/50 rounded-2xl p-6 border border-blue-500/10 hover:border-blue-500/30 transition-all group">
                    <div className="text-4xl font-bold text-gradient mb-2 group-hover:scale-110 transition-transform">24/7</div>
                    <div className="text-sm text-gray-400 uppercase tracking-wide">Support Available</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
