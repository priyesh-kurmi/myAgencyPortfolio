import { motion } from 'framer-motion';

const Portfolio = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      category: 'Web Application',
      description: 'Full-stack e-commerce solution with payment integration',
      tags: ['React', 'Node.js', 'MongoDB']
    },
    {
      title: 'Healthcare App',
      category: 'Mobile App',
      description: 'Patient management system for healthcare providers',
      tags: ['React Native', 'Firebase']
    },
    {
      title: 'SaaS Dashboard',
      category: 'Web Application',
      description: 'Analytics dashboard with real-time data visualization',
      tags: ['React', 'D3.js', 'PostgreSQL']
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-black relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-3xl"></div>
      
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10"
      >
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <span className="text-xs text-gray-400 font-semibold uppercase tracking-[0.2em]">OUR WORK</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-[1.1] text-white">
            Our Work <span className="text-gradient">Speaks</span> For Itself
          </h2>
          
          <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
            A showcase of selected projects demonstrating our design quality, engineering depth, and attention to detail.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-black/20 backdrop-blur-sm border border-white/5 rounded-3xl overflow-hidden hover:border-white/10 hover:bg-black/30 transition-all duration-300"
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
            </div>
          ))}
        </div>

        {/* Note */}
        <div className="text-center bg-black/20 backdrop-blur-sm border border-white/5 rounded-3xl p-6">
          <p className="text-gray-400 text-lg">
            <span className="font-semibold text-white">Note:</span> You can add thumbnails and links to your actual projects here as you complete them.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default Portfolio;
