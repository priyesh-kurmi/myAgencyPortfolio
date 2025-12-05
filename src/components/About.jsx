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
        className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10 text-center"
      >
        <div className="inline-block mb-4">
          <span className="text-xs text-gray-400 font-semibold uppercase tracking-[0.2em]">WHO WE ARE</span>
        </div>
          
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-[1.1] text-white">
          Crafting Digital <span className="text-gradient">Experiences</span> That Actually Work
        </h2>
        
        <p className="text-lg text-gray-400 mb-12 leading-relaxed max-w-3xl mx-auto">
          We're a small, sharp, and passionate team that designs and develops custom solutions for businesses. 
          From sleek websites to powerful mobile apps and fully bespoke systems — we turn ideas into real products that scale.
        </p>

        <div className="mb-12">
          <h3 className="text-lg font-semibold text-white uppercase tracking-wider mb-6">We focus on:</h3>
          <div className="grid sm:grid-cols-2 gap-5 max-w-2xl mx-auto text-left">
            {focusAreas.map((area, index) => (
              <div key={index} className="flex items-center gap-4 group">
                <div className="w-2 h-2 bg-blue-500 rounded-full group-hover:scale-150 transition-transform"></div>
                <span className="text-gray-300 group-hover:text-white transition-colors">{area}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-black/20 backdrop-blur-sm border border-white rounded-2xl p-8 max-w-2xl mx-auto">
          <p className="text-lg text-white font-medium leading-relaxed">
            No fluff. No outsourcing. Just high-quality work delivered with care.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
