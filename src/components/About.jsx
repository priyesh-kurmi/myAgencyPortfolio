import { motion } from 'framer-motion';

const About = () => {
  const focusAreas = [
    {
      title: 'Clean, modern design',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      )
    },
    {
      title: 'Robust engineering',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      )
    },
    {
      title: 'Fast delivery',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: 'Transparent communication',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      )
    }
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
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section id="about" className="py-10 bg-black relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
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
            Crafting Digital <span className="text-gradient">Experiences</span><br />That Actually Work
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-400 leading-relaxed max-w-3xl mx-auto"
          >
            We're a small, sharp, and passionate team that designs and develops custom solutions for businesses. 
            From sleek websites to powerful mobile apps and fully bespoke systems — we turn ideas into real products that scale.
          </motion.p>
        </div>

        {/* Premium Grid Layout */}
        <div className="grid lg:grid-cols-2 gap-8 items-center mb-12">
          {/* Left Side - Focus Areas */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            {/* Decorative element */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl"></div>
            
            <div className="relative bg-gradient-to-br from-blue-950/30 via-black to-black border border-blue-500/20 rounded-3xl p-8 lg:p-10">
              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/20 to-transparent rounded-bl-full"></div>
              
              <h3 className="text-2xl font-bold text-white mb-8 relative">
                We focus on:
                <div className="absolute -bottom-3 left-0 w-16 h-1 bg-gradient-to-r from-blue-500 to-transparent"></div>
              </h3>
              
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
                className="space-y-4"
              >
                {focusAreas.map((area, index) => (
                  <motion.div 
                    key={index} 
                    variants={itemVariants}
                    className="group flex items-center gap-4 p-4 rounded-xl bg-black/40 border border-white/5 hover:border-blue-500/30 hover:bg-blue-950/20 transition-all duration-300"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-blue-600/10 border border-blue-500/20 flex items-center justify-center group-hover:scale-110 group-hover:border-blue-500/40 transition-all">
                      <div className="text-blue-400 group-hover:text-blue-300 transition-colors">
                        {area.icon}
                      </div>
                    </div>
                    <span className="text-base text-gray-300 group-hover:text-white font-medium transition-colors">{area.title}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side - Premium 3D Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            {/* 3D Premium Card with layered design */}
            <div className="relative max-w-md mx-auto perspective-1000">
              {/* Background glow layers */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/30 via-blue-500/20 to-blue-600/30 rounded-3xl blur-2xl"></div>
              <div className="absolute -inset-2 bg-gradient-to-br from-blue-500/20 to-transparent rounded-3xl blur-xl"></div>
              
              {/* Main card container */}
              <div className="relative">
                {/* Animated border gradient */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 p-[2px] overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400/40 via-transparent to-blue-600/40 animate-pulse"></div>
                </div>
                
                {/* Inner card */}
                <div className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 rounded-3xl overflow-hidden">
                  {/* Geometric pattern overlay */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{
                      backgroundImage: `
                        linear-gradient(30deg, transparent 40%, rgba(59, 130, 246, 0.3) 40%, rgba(59, 130, 246, 0.3) 60%, transparent 60%),
                        linear-gradient(150deg, transparent 40%, rgba(59, 130, 246, 0.3) 40%, rgba(59, 130, 246, 0.3) 60%, transparent 60%)
                      `,
                      backgroundSize: '80px 140px',
                      backgroundPosition: '0 0, 40px 70px'
                    }}></div>
                  </div>
                  
                  {/* Top accent bar */}
                  <div className="relative h-2 bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
                  
                  {/* Content area */}
                  <div className="relative p-12 lg:p-14">
                    {/* Floating corner accents */}
                    <div className="absolute top-6 left-6 w-16 h-16 border-t-2 border-l-2 border-blue-400/60 rounded-tl-2xl"></div>
                    <div className="absolute bottom-6 right-6 w-16 h-16 border-b-2 border-r-2 border-blue-400/60 rounded-br-2xl"></div>
                    
                    {/* Center badge */}
                    <div className="relative mb-8">
                      <div className="inline-flex items-center justify-center px-6 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-blue-600/20 border border-blue-400/30 backdrop-blur-sm">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mr-2 animate-pulse"></div>
                        <span className="text-xs font-semibold text-blue-300 uppercase tracking-wider">Premium Quality</span>
                      </div>
                    </div>
                    
                    {/* Main percentage */}
                    <div className="relative mb-6">
                      <div className="text-6xl lg:text-7xl font-black text-center leading-none mb-3">
                        <span className="text-transparent bg-gradient-to-br from-blue-300 via-blue-400 to-blue-600 bg-clip-text drop-shadow-2xl">
                          100
                        </span>
                        <span className="text-transparent bg-gradient-to-br from-blue-400 to-blue-600 bg-clip-text">%</span>
                      </div>
                      {/* Percentage underline */}
                      <div className="flex justify-center">
                        <div className="h-1 w-32 bg-gradient-to-r from-transparent via-blue-500 to-transparent rounded-full"></div>
                      </div>
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-3xl lg:text-4xl font-bold text-center mb-5 text-white">
                      Custom Built
                    </h3>
                    
                    {/* Divider */}
                    <div className="flex items-center justify-center gap-2 mb-5">
                      <div className="w-8 h-[1px] bg-gradient-to-r from-transparent to-blue-500/50"></div>
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                      <div className="w-8 h-[1px] bg-gradient-to-l from-transparent to-blue-500/50"></div>
                    </div>
                    
                    {/* Description */}
                    <div className="text-center space-y-2">
                      <p className="text-gray-300 text-base font-medium">No templates.</p>
                      <p className="text-gray-200 text-lg font-semibold">Pure craftsmanship.</p>
                    </div>
                    
                    {/* Bottom decorative elements */}
                    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
                      <div className="w-2 h-2 bg-blue-500/60 rounded-full"></div>
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      <div className="w-2 h-2 bg-blue-500/60 rounded-full"></div>
                    </div>
                  </div>
                  
                  {/* Bottom accent bar */}
                  <div className="relative h-2 bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
                  
                  {/* Shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                </div>
              </div>
              
              {/* Floating accent particles */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-500/30 rounded-full blur-2xl animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-blue-600/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Card */}
        <motion.div 
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="relative max-w-4xl mx-auto"
        >
          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-transparent to-blue-500/20 rounded-3xl blur-xl"></div>
          
          <div className="relative bg-gradient-to-br from-black via-blue-950/20 to-black border border-white/20 rounded-3xl p-10 text-center backdrop-blur-sm">
            {/* Decorative corners */}
            <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-blue-500/40 rounded-tl-3xl"></div>
            <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-blue-500/40 rounded-br-3xl"></div>
            
            <p className="text-2xl md:text-3xl font-bold text-transparent bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text mb-4">
              No fluff. No outsourcing.
            </p>
            <p className="text-lg text-gray-300">
              Just high-quality work delivered with care.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
