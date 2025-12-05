import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Process = () => {
  const steps = [
    {
      number: '01',
      title: 'Discovery',
      description: 'Understand your goals, problems, and vision.',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      )
    },
    {
      number: '02',
      title: 'Design',
      description: 'Create user-focused wireframes, UI, and system architecture.',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      )
    },
    {
      number: '03',
      title: 'Development',
      description: 'Build clean, scalable, production-ready software.',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      )
    },
    {
      number: '04',
      title: 'Launch & Support',
      description: 'Deploy, monitor, optimize, and continue improving your product.',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      )
    }
  ];

  const circumference = 2 * Math.PI * 140;

  return (
    <section id="process" className="py-20 bg-black relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-4"
          >
            <span className="text-xs text-gray-400 font-semibold uppercase tracking-[0.2em]">THE STEPS</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-[1.1] text-white"
          >
            How We <span className="text-gradient">Work</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed"
          >
            A proven process that ensures your project's success from start to finish
          </motion.p>
        </div>

        {/* Process Steps - All Circles */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 mb-16">
          {steps.map((step, index) => {
            const stepProgress = ((index + 1) / steps.length) * 100;
            const stepCircumference = 2 * Math.PI * 95;
            const stepDashOffset = stepCircumference - (stepCircumference * stepProgress) / 100;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.7, rotateY: -45 }}
                whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.7, delay: index * 0.15, ease: "easeOut" }}
                className="flex flex-col items-center"
              >
                {/* Circular Progress Indicator */}
                <div className="relative flex items-center justify-center mb-6">
                  <svg className="w-56 h-56 -rotate-90" viewBox="0 0 220 220">
                    {/* Gray background circle */}
                    <circle
                      cx="110"
                      cy="110"
                      r="95"
                      stroke="rgba(255, 255, 255, 0.05)"
                      strokeWidth="6"
                      fill="none"
                    />
                    
                    {/* Blue progress circle - fills according to step progress */}
                    <circle
                      cx="110"
                      cy="110"
                      r="95"
                      stroke="url(#blueGradient)"
                      strokeWidth="6"
                      fill="none"
                      strokeDasharray={stepCircumference}
                      strokeDashoffset={stepDashOffset}
                      strokeLinecap="round"
                      style={{ 
                        filter: `drop-shadow(0 0 12px rgba(59, 130, 246, ${0.4 + stepProgress / 250}))`,
                        transition: 'all 0.6s ease-out'
                      }}
                    />
                    
                    <defs>
                      <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#3b82f6" />
                        <stop offset="100%" stopColor="#1d4ed8" />
                      </linearGradient>
                    </defs>
                  </svg>

                  {/* Center content */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <div className="text-blue-400 mb-3">
                      {step.icon}
                    </div>
                    <div className="text-4xl font-bold text-white mb-2">{step.number}</div>
                    <div className="text-base font-bold text-white">{step.title}</div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-gray-400 text-center max-w-[220px] leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center"
        >
          <p className="text-lg text-gray-400 mb-6">
            Ready to start your project?
          </p>
          <Link to="/contact">
            <button className="px-8 py-3 bg-blue-600 text-white hover:bg-blue-700 rounded-lg text-sm font-medium transition-all">
              Let's Talk
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Process;
