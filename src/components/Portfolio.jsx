import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Portfolio = () => {
  const projects = [
    {
      title: 'Noas Café',
      category: 'Corporate Website',
      description: 'Premium specialty coffee and corporate catering platform across 9+ London locations',
      tags: ['React', 'Next.js', 'E-commerce'],
      url: 'https://www.noas.uk/'
    },
    {
      title: 'Eversham Chauffeurs',
      category: 'Luxury Service Website',
      description: 'Elite chauffeur booking platform featuring premium fleet management and 24/7 service',
      tags: ['React', 'Booking System', 'CMS'],
      url: 'https://www.evershamchauffeurs.co.uk/'
    },
    {
      title: 'Noas Catering',
      category: 'Catering Platform',
      description: 'London\'s trusted office and event catering service with custom menu ordering',
      tags: ['React', 'Order System', 'CMS'],
      url: 'https://www.noascatering.co.uk/'
    }
  ];

  return (
    <section id="portfolio" className="py-10 bg-black relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.div 
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-4"
          >
            <span className="text-xs text-gray-400 font-semibold uppercase tracking-[0.2em]">OUR WORK</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-[1.1] text-white"
          >
            Our Work <span className="text-gradient">Speaks</span> For Itself
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed"
          >
            A showcase of selected projects demonstrating our design quality, engineering depth, and attention to detail.
          </motion.p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <motion.div
                initial={{ opacity: 0, y: 60, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group relative bg-black/20 backdrop-blur-sm border border-white/5 rounded-3xl overflow-hidden hover:border-white/10 hover:bg-black/30 transition-all duration-300 cursor-pointer"
              >
              {/* Project Image Placeholder */}
              <div className="relative h-48 bg-white/5 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg className="w-20 h-20 text-blue-400/30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <div className="text-sm text-blue-400 font-semibold mb-3 uppercase tracking-wider">{project.category}</div>
                <h3 className="text-xl font-bold mb-3 text-white transition-all">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-4 py-2 bg-black/30 backdrop-blur-sm border border-white/10 rounded-full text-sm text-blue-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              </motion.div>
            </a>
          ))}
        </div>
        {/* View All Projects Button */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link to="/projects">
            <button className="px-8 py-3.5 bg-blue-600 text-white hover:bg-blue-700 rounded-xl text-base font-semibold transition-all hover:scale-[1.02] glow-blue-strong">
              View All Projects
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
