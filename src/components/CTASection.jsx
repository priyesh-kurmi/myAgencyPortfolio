import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const CTASection = () => {
  return (
    <section className="py-10 bg-black relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[800px] h-[800px] bg-blue-600/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 flex items-center justify-center">
        {/* Animated Border Card */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, y: 60 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative w-full max-w-5xl"
        >
          {/* Outer container with gradient border */}
          <div 
            className="relative rounded-3xl p-[1px] overflow-visible"
            style={{
              background: 'radial-gradient(circle 600px at 0% 0%, #3b82f6, #0c0d0d)',
            }}
          >
            {/* Animated dot */}
            <div 
              className="absolute w-[5px] h-[5px] bg-blue-400 rounded-full z-20 shadow-[0_0_15px_#3b82f6]"
              style={{
                animation: 'moveDot 8s linear infinite',
              }}
            />
            
            {/* Card content */}
            <div 
              className="relative rounded-3xl overflow-hidden"
              style={{
                background: 'radial-gradient(circle 700px at 0% 0%, #1e293b, #0a0a0a)',
              }}
            >
              {/* Grid lines */}
              <div className="absolute top-[10%] left-0 right-0 h-[1px] bg-gradient-to-r from-blue-500/40 via-blue-400/20 to-transparent" />
              <div className="absolute bottom-[10%] left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-400/10 to-transparent" />
              <div className="absolute top-0 bottom-0 left-[10%] w-[1px] bg-gradient-to-b from-blue-500/40 via-blue-400/20 to-transparent" />
              <div className="absolute top-0 bottom-0 right-[10%] w-[1px] bg-gradient-to-b from-transparent via-blue-400/10 to-transparent" />
              
              {/* Light ray effect */}
              <div 
                className="absolute top-0 left-0 w-[300px] h-[60px] rounded-full opacity-30 blur-2xl"
                style={{
                  background: '#60a5fa',
                  boxShadow: '0 0 80px #60a5fa',
                  transform: 'rotate(40deg)',
                  transformOrigin: '10%',
                }}
              />
              
              {/* Content */}
              <div className="relative z-10 text-center py-10 md:py-12 px-12 md:px-20 lg:px-24">
                {/* Dot indicator */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="flex justify-center items-center gap-2 mb-8"
                >
                  <div className="w-2 h-2 bg-blue-400 rounded-full shadow-[0_0_10px_#3b82f6]"></div>
                  <span className="text-blue-300 text-sm font-medium">Join Us Now</span>
                </motion.div>
                
                {/* Heading with gradient */}
                <motion.h2 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-[1.1]"
                >
                  <span 
                    className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent"
                    style={{
                      backgroundSize: '200% auto',
                    }}
                  >
                    Each Project we Undertake
                  </span>
                  <br />
                  <span className="text-gray-400">is a Unique Opportunity.</span>
                </motion.h2>
                
                {/* Description */}
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="text-base md:text-lg text-gray-400 mb-10 max-w-3xl mx-auto leading-relaxed"
                >
                  Ready to take the next step? Join us now and start transforming your vision into reality with expert support.
                </motion.p>
                
                {/* CTA Button */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <Link to="/contact">
                    <button className="px-10 py-4 bg-blue-600 text-white hover:bg-blue-700 rounded-xl text-lg font-semibold transition-all hover:scale-105 shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50">
                      Book an Appointment
                    </button>
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
