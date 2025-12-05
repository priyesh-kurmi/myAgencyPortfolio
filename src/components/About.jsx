import { motion } from 'framer-motion';

const About = () => {
  const focusAreas = [
    'Clean, modern design',
    'Robust engineering',
    'Fast delivery',
    'Transparent communication'
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section id="about" className="py-20 bg-black relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="inline-block mb-4"
        >
          <span className="text-xs text-gray-400 font-semibold uppercase tracking-[0.2em]">WHO WE ARE</span>
        </motion.div>
        
        <motion.h2 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-[1.1] text-white"
        >
          Crafting Digital <span className="text-gradient">Experiences</span> That Actually Work
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-gray-400 mb-12 leading-relaxed max-w-3xl mx-auto"
        >
          We're a small, sharp, and passionate team that designs and develops custom solutions for businesses. 
          From sleek websites to powerful mobile apps and fully bespoke systems — we turn ideas into real products that scale.
        </motion.p>

        <div className="mb-12">
          <motion.h3 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg font-semibold text-white uppercase tracking-wider mb-6"
          >
            We focus on:
          </motion.h3>
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            className="grid sm:grid-cols-2 gap-5 max-w-2xl mx-auto text-left"
          >
            {focusAreas.map((area, index) => (
              <motion.div 
                key={index} 
                variants={itemVariants}
                className="flex items-center gap-4 group"
              >
                <div className="w-2 h-2 bg-blue-500 rounded-full group-hover:scale-150 transition-transform"></div>
                <span className="text-gray-300 group-hover:text-white transition-colors">{area}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="bg-black/20 backdrop-blur-sm border border-white rounded-2xl p-8 max-w-2xl mx-auto"
        >
          <p className="text-lg text-white font-medium leading-relaxed">
            No fluff. No outsourcing. Just high-quality work delivered with care.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
